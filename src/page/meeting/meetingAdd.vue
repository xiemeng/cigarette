<template>
	<div>
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<el-button class="right elbut" size="mini" plain @click="addUser('add')">新增</el-button>
					<el-breadcrumb-item>角色管理</el-breadcrumb-item>
				</el-breadcrumb>
				
				<div class="w-100 p-15">
					<el-row :gutter="20">
					  <el-col :span="6">
						<div class="flex w-100"><em class="nowrap" style="line-height: 40px;">角色：</em>
							<el-select v-model="loginNameLike" placeholder="请选择">
								<el-option v-for="(item,index) in options" :key="index" :label="item.roleName" :value="item.roleName">
								</el-option>
							</el-select>
						</div>
					</el-col>
					  <el-col :span="6">
					  	<el-button @click="search">查询</el-button>
					  </el-col>
					</el-row>
				</div>
				
				<el-table :data="tableData" class="w-100 p-15" stripe>
					<el-table-column label="角色" width="280">
						<template slot-scope="scope">
							{{ scope.row.roleName   }}
						</template>
					</el-table-column>
					<el-table-column label="角色描述" width="280">
						<template slot-scope="scope">
							{{ scope.row.roleDesc  }}
						</template>
					</el-table-column>
					<el-table-column label="拥有权限" width="380">
						<template slot-scope="scope">
							{{ scope.row.topMenuName  }}
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button class="elbut" size="mini" plain @click="addUser(scope.$index, scope.row)">编辑</el-button>
							<el-button size="mini" plain type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div class="text-center p-t-30" v-if="totalsPage">
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
	import {meetuserPage,meetList,meetuserDelete} from '@/api/meeting'
	export default {
		name: "meetingList",
		components: {
			
		},
		data() {
			return {
				enter:{},
				loginNameLike : '', // 角色名
				total:0,  // 总数据条数
				totalsPage:0, // 总分页数
				data:{  // 分页 相关信息
					pageSize:10,
					currentPage:1,
				},
				options: [],
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
			this.getList()
		},
		methods: {
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
					meetuserDelete(param,this.enter.sessionId).then((res)=>{
						console.log(res);
						if(!res)return
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
			search(){  // 查找
				this.init()
			},
			addUser(tips,date){
				if(tips == 'add'){  // 新增
					this.$router.push({
						path: '/meeting/meetingAdd/addList',
						query:{tips:'add'}
					});
				}else{
					this.$router.push({
						path: '/meeting/meetingAdd/addList',
						query:{id:date.id}
					});
				}
			},
			init(){
				const param = {
					  "pageIndex": this.data.currentPage,
					  "pageSize": this.data.pageSize,
					}
				if(this.loginNameLike)param.roleNameLike = this.loginNameLike;
				meetuserPage(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					this.tableData = res.bussData;
					this.total = res.count;
					this.totalsPage = res.pageCount;
				})
			},
			getList(){  // 获取角色列表
				meetList(this.enter.sessionId).then((res)=>{
					console.log(res)
					this.options = res.bussData;
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
	};
</script>
<style scoped>

</style>