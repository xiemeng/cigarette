<template>
	<div>
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<!-- <el-button size="mini" class="right" @click="goexportList">导出数据</el-button> -->
					<el-button class="elbut elbut2 right" size="mini" @click="goAdd('add')">新增</el-button>
					<el-breadcrumb-item>设备管理</el-breadcrumb-item>
				</el-breadcrumb>
				
				<el-table :data="tableData" class="w-100 p-15" stripe>
					<el-table-column label="设备型号">
						<template slot-scope="scope">
							{{scope.row.model}}
						</template>
					</el-table-column>
					<el-table-column label="设备照片">
						<template slot-scope="scope">
							<img :src="scope.row.imageUrl" />
						</template>
					</el-table-column>
					<el-table-column label="烟弹类型">
						<template slot-scope="scope">
							{{ scope.row.bombName == 'kao'?'烤烟型':'烟油型' }}
						</template>
					</el-table-column>
					<el-table-column label="支持烟型">
						<template slot-scope="scope">
							{{ disposeDate(scope.row.ecTypes) }}
						</template>
					</el-table-column>
					<el-table-column label="上市日期">
						<template slot-scope="scope">
							{{ scope.row.onDate}}
						</template>
					</el-table-column>
					<el-table-column label="当月使用人/全部激活比" width="200">
						<template slot-scope="scope">
							{{ getNums(scope.row.monthPeopleNum,scope.row.allPeopleNum) }}
						</template>
					</el-table-column>
					<el-table-column label="当月吸烟支数">
						<template slot-scope="scope">
							{{ scope.row.monthUseNum }}
						</template>
					</el-table-column>
					<el-table-column label="当月平均每支口数">
						<template slot-scope="scope">
							{{ getNums(scope.row.monthMouthNum,scope.row.monthUseNum) }}
						</template>
					</el-table-column>
					<el-table-column label="操作" width="240">
						<template slot-scope="scope">
							<el-button class="elbut" size="mini" plain @click="goDetail(scope.$index, scope.row)">详情</el-button>
							<el-button class="elbut" size="mini" plain @click="goAdd(scope.$index, scope.row)">编辑</el-button>
							<el-button size="mini" type="danger" @click="handleEdit(scope.$index, scope.row)">删除</el-button>
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
	import {columPage,exportList} from '@/api/colum'
	export default {
		name: "column",
		components: {
			
		},
		data() {
			return {
				enter:{},
				total:0,  // 总数据条数
				totalsPage:0, // 总分页数
				data:{  // 分页 相关信息
					pageSize:10,
					currentPage:1,
				},
				tableData: [],
				form:{
					name:''
				}
				
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
					}
				columPage(param,this.enter.sessionId).then((res)=>{
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
			handleDelete(tips,row){ // 删除
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				  confirmButtonText: '确定',
				  cancelButtonText: '取消',
				  type: 'warning',
				  center: true
				}).then(() => {
					const param = {
					 "id": row.id
					}
// 					meetuserDelete(param,this.enter.sessionId).then((res)=>{
// 						console.log(res);
// 						if(!res)return
// 						this.$message({
// 							type: 'success',
// 							message: '删除成功!'
// 						});
// 						this.init()
// 					})
				  
				}).catch(() => {
				  this.$message({
					type: 'info',
					message: '已取消删除'
				  });
				});
			},
			goexportList(){  // 导出数据
				const param = {
					  "pageIndex": this.data.currentPage,
					  "pageSize": this.data.pageSize,
					}
				if(this.weixinName){
					param.nicknameLike = this.weixinName
				}
				if(this.sex){
					param.sex = this.sex;
				}
				exportList(this.enter.sessionId).then((res)=>{
					console.log(res)
					const filename = '设备列表.xlsx'
					this.fileDownload(res, filename)
				}).catch((error)=>{
					this.$message({
						showClose: true,
						message: error,
						type: 'error'
					})
				})
			},
			goDetail(item,row) {  // 去详情
				console.log(item,row)
				this.$router.push({
					path: '/column/column/detail',
					query:{id:row.id}
				});
			},
			goAdd(tips,date) {  // 去添加
				console.log(tips,date)
				if(tips == 'add'){  // 新增
					this.$router.push({
						path: '/column/column/add',
						query:{tips:'add'}
					});
				}else{
					this.$router.push({
						path: '/column/column/add',
						query:{id:date.id}
					});
				}
			},
			handleSizeChange(val) {
				this.data.pageSize = val
				this.init()
			},
			handleCurrentChange(val) {
				this.data.currentPage = val
				this.init()
			},
			getNums(val1,val2){  // 计算，处理数据
				if(val1 == 0 || val2 == 0){
					return '0%';
				}
				let num = (val1/val2).toFixed(2);
				return num+'%';
			},
			disposeDate(date){  // 处理数据
				let value = date.map((item)=>{
					return item.name
				})
				return value.join(' ');
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
	};
</script>
<style scoped>
	.elbut2{
		margin-right:20px;
	}
	.el-button+.el-button{
		margin-left: 5px;
	}
	img{
		width: 82px;height: 52px;
		object-fit: cover;
	}
</style>