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
				total:0,  // 总数据条数
				totalsPage:0, // 总分页数
				data:{  // 分页 相关信息
					pageSize:10,
					currentPage:1,
				},
				enter:{},//
				tableData: []
				
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
				  "pageSize": this.data.pageSize
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
				let str = '';
				if(date){
					str = date.name;
				}
				console.log(date)
				this.$prompt('烟型', text, {
					  confirmButtonText: '确定',
					  cancelButtonText: '取消',
					  inputValue:str,
					  closeOnClickModal:false
					}).then(({ value }) => {
					  if(value){
						if(tips == 'add'){
							this.addType(date,value);  // 新增
						}else{
							this.undate(date,value);  //  编辑
						}
					  }else{
						this.$message({
							type: 'error',
							message: '请输入烟型'
						});
					  }
					  
					}).catch(() => {})
			},
			addType(date,value){  // 增加
				const param = {
				 "name": value
				}
				messageInsert(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					this.init()
					this.$message({
						type: 'success',
						message: '您新增的烟型是: ' + value
					});
				})
			},
			undate(date,value){  // 修改
				const param = {
				 "name": value,
				 "id":date.id
				}
				messageUpdate(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					this.init()
					this.$message({
						type: 'success',
						message: '修改成功'
					});
				})
			},
			exportList(){  // 导出数据
				messageExportList().then((res)=>{
					console.log(res)
				})
			},
			handleSizeChange(val) {
				this.data.pageSize = val
				this.init()
			},
			handleCurrentChange(val) {
				this.data.currentPage = val
				this.init()
			}
		}
	}
</script>
<style scoped>
	.elbut{
		margin-right: 20px;
	}
</style>