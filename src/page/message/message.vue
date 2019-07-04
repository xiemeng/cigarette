<template>
	<div>
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<el-button size="mini" class="right" @click="toLink('columnAdd')">导出数据</el-button>
					<el-button class="elbut right" size="mini" @click="goAdd('add')">新增</el-button>
					<el-breadcrumb-item>烟型管理</el-breadcrumb-item>
				</el-breadcrumb>
				
				<el-table :data="tableData" class="w-100 p-15" stripe>
					<el-table-column label="序号" width="180">
						<template slot-scope="scope">
							{{scope.$index}}
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
				  background
				  layout="prev, pager, next"
				  :total="1000">
				</el-pagination>
				</div>

				
			</div>
	</div>
</template>

<script>
	// import {postNormal} from "@/request/http";
	export default {
		name: "message",
		components: {
			
		},
		data() {
			return {
				enter:{},//
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				
				
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
				// postNormal('/admin/ectype/find_page',{'sessionId':this.enter.sessionId},{
				// 	param:{
				// 	  "pageIndex": 1,
				// 	  "pageSize": 10
				// 	}
				// }).then((res)=>{
				// 	console.log(res)
				// 	// 登录信息存储到VUEX 再存储到本地
				// 	
				// })
			},
			toLink(i) {
				this.$router.push({
					path: i
				});
			},
			goAdd (tips) {  // 编辑新增
				const text = tips == 'add'?'新增':'编辑';
				this.$prompt('烟型', text, {
					  confirmButtonText: '确定',
					  cancelButtonText: '取消',
					  
					}).then(({ value }) => {
					  this.$message({
						type: 'success',
						message: '你的烟型是: ' + value
					  });
					}).catch(() => {
					  this.$message({
						type: 'info',
						message: '取消输入'
					  });       
				})
			}
		}
	}
</script>
<style scoped>
	.elbut{
		margin-right: 20px;
	}
</style>