<template>
	<div>
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<el-button size="mini" class="right" @click="exportList('columnAdd')">导出数据</el-button>
					<el-button class="elbut right" size="mini" @click="goAdd('add')">新增</el-button>
					<el-breadcrumb-item>烟型管理</el-breadcrumb-item>
				</el-breadcrumb>
				
				<el-table :data="tableData" class="w-100 p-15" stripe>
					<el-table-column label="序号" width="180">
						<template slot-scope="scope">
							{{scope.$index+1}}
						</template>
					</el-table-column>
					<el-table-column label="命令" width="180">
						<template slot-scope="scope">
							{{scope.row.command}}
						</template>
					</el-table-column>
					<el-table-column label="烟型" width="180">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
				
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" plain class="elbut" @click="goAdd(scope.$index, scope.row)">编辑</el-button>
							<el-button size="mini" plain type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div class="text-center p-t-30">
					<el-pagination 
						@size-change="handleSizeChange" @current-change="handleCurrentChange" 
						:current-page="data.currentPage" :page-sizes="[10, 20, 30, 40]" 
						:page-size="data.pageSize" layout="total,slot, sizes, prev, pager, next, jumper" 
						:total="total">
					        <span>第{{data.currentPage}} / {{totalsPage}}页</span>
					</el-pagination>
				</div>

				
			</div>
			
			<el-dialog :title="title" :visible.sync="dialogFormVisible">
			  <el-form :model="form">
				<el-form-item label="命令" :label-width="formLabelWidth">
				  <el-input v-model="form.command" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="烟型" :label-width="formLabelWidth">
				  <el-input v-model="form.name" autocomplete="off"></el-input>
				</el-form-item>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="chooseis">确 定</el-button>
			  </div>
			</el-dialog>
	</div>
</template>

<script>
	import {messagePage,messageInsert,messageUpdate,messageDelete,messageExportList} from "@/api/message";
	export default {
		name: "message",
		components: {
			
		},
		data() {
			return {
				dialogFormVisible:false,// 测试用
				total:0,  // 总数据条数
				totalsPage:0, // 总分页数
				data:{  // 分页 相关信息
					pageSize:10,
					currentPage:1,
				},
				enter:{},//
				tableData: [],
				form: {
				  command: '',// 命令
				  name:'',// 烟型
				  id:'',// 唯一标识
				},
				title:'新增',// 标题
				formLabelWidth: '40px',
				
			};
		},
		created() {},
		mounted() {
			this.enter = JSON.parse(localStorage.getItem("enter"));
			this.init()
		},
		methods: {
			init(){
				const param = {
				  "pageIndex": this.data.currentPage,
				  "pageSize": this.data.pageSize,
				  "isVisible":'y'
				}
				messagePage(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					this.tableData = res.bussData;
					this.total = res.count;
					this.totalsPage = res.pageCount;
				})
			},
			toLink(i) {
				this.$router.push({
					path: i
				});
			},
			handleDelete(tips,date){  // 删除
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				  confirmButtonText: '确定',
				  cancelButtonText: '取消',
				  type: 'warning',
				  center: true
				}).then(() => {
					const param = {
					 "id": date.id
					}
					messageDelete(param,this.enter.sessionId).then((res)=>{
						console.log(res);
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
						this.init()
					})
				  
				}).catch(() => {
				  this.$message({
					type: 'info',
					message: '已取消删除'
				  });
				});
			},
			goAdd (tips,date) {  // 编辑新增
				const text = tips == 'add'?'新增':'编辑';
				this.title = text;
				let str = '';
				if(date){
					this.form.name = date.name;
					this.form.command = date.command;
					this.form.id = date.id;
				}else{
					this.form.name = '';
					this.form.command = '';
				}
				this.dialogFormVisible = true;
			},
			chooseis(tips){  // 确定
				if(this.form.command == ''){
					this.$message({
					  message: '请填写命令',
					  type: 'warning'
					});
					return
				}
				if(this.form.name == ''){
					this.$message({
					  message: '请填写烟型',
					  type: 'warning'
					});
					return
				}
				if(this.title == '新增'){
					this.addType();  // 新增
				}else{
					this.undate();  //  编辑
				}
			},
			addType(date){  // 增加
				const param = {
				 "name": this.form.name,
				 "command":this.form.command,
				}
				messageInsert(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					this.init();
					this.dialogFormVisible = false;
					this.$message({
						type: 'success',
						message: '您新增的烟型是: ' + this.form.name
					});
				})
			},
			undate(date){  // 修改
				const param = {
				 "name": this.form.name,
				 "command":this.form.command,
				 "id":this.form.id
				}
				messageUpdate(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					this.init();
					this.dialogFormVisible = false;
					this.$message({
						type: 'success',
						message: '修改成功'
					});
				})
			},
			exportList(){  // 导出数据
				messageExportList(this.enter.sessionId).then((res)=>{
					console.log(res)
					const filename = '烟型管理列表.xlsx'
					this.fileDownload(res, filename)
				})
			},
			handleSizeChange(val) {
				this.data.pageSize = val
				this.init()
			},
			handleCurrentChange(val) {
				this.data.currentPage = val
				this.init()
			},
			fileDownload(data, fileName) {
			    const blob = new Blob([data], {
			        type: 'application/octet-stream'
			    })
			   
			    const filename = fileName || 'filename.xlsx'
			    if (typeof window.navigator.msSaveBlob !== 'undefined') {
			        window.navigator.msSaveBlob(blob, filename)
			    } else {
			        var blobURL = window.URL.createObjectURL(blob)
			        var tempLink = document.createElement('a')
			        tempLink.style.display = 'none'
			        tempLink.href = blobURL
			        tempLink.setAttribute('download', filename)
			        if (typeof tempLink.download === 'undefined') {
			        tempLink.setAttribute('target', '_blank')
			        }
			        
			        document.body.appendChild(tempLink)
			        tempLink.click()
			        document.body.removeChild(tempLink)
			        window.URL.revokeObjectURL(blobURL)
			    }
			}
		}
	}
</script>
<style scoped>
	.elbut{
		margin-right: 20px;
	}
</style>