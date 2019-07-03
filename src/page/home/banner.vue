<template>
	<div>
		<div class="w-100 h-100 p-15">
			<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
				<el-button class="right" size="mini" plain >导出数据</el-button>
				<el-breadcrumb-item>用户管理</el-breadcrumb-item>
			</el-breadcrumb>

			<div class="w-100 p-15">
				<el-row :gutter="20">
					<el-col :span="6">
						<div class="flex w-100"><em class="nowrap" style="line-height: 40px;">微信名：</em>
							<el-input placeholder="请输入" v-model="form.name"></el-input>
						</div>
					</el-col>
					<el-col :span="6">
						<div class="flex w-100"><em class="nowrap" style="line-height: 40px;">性别：</em>
							<el-select v-model="sex" placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-col>
					<el-col :span="6">
						<el-button>查询</el-button>
					</el-col>
				</el-row>
			</div>

			<el-table 
				:data="tableData" stripe  
				:default-sort = "{prop: 'date', order: 'descending'}" 
				class="w-100 p-15">
				<el-table-column label="头像">
					<template slot-scope="scope">
						<img src="../../assets/imgs/rightimg.png" />
					</template>
				</el-table-column>
				<el-table-column label="微信名">
					<template slot-scope="scope">
						微信名
					</template>
				</el-table-column>
				<el-table-column label="年龄">
					<template slot-scope="scope">
						年龄
					</template>
				</el-table-column>
				<el-table-column label="性别">
					<template slot-scope="scope">
						性别
					</template>
				</el-table-column>
				<el-table-column label="设备激活日期" sortable>
					<template slot-scope="scope">
						设备激活日期
					</template>
				</el-table-column>
				<el-table-column label="设备数">
					<template slot-scope="scope">
						设备激活日期
					</template>
				</el-table-column>
				<el-table-column label="设备型号">
					<template slot-scope="scope">
						{{ scope.row.name }}
					</template>
				</el-table-column>
				<el-table-column label="最后一次使用设备" sortable>
					<template slot-scope="scope">
						{{ scope.row.name }}
					</template>
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button class="elbut" size="mini" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="text-center p-t-30">
				<el-pagination background layout="prev, pager, next" :total="1000">
				</el-pagination>
			</div>


		</div>
	</div>
</template>

<script>
	import {postNormal} from "@/request/http";
	export default {
		name: "column",
		data() {
			return {
				enter:{},// 登录信息
				sex: 3, // 性别
				options: [
					{
						value: 3,
						label: '全部'
					},{
						value: 1,
						label: '男'
					},
					{
						value: 2,
						label: '女'
					},
				],
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


				form: {
					name: ''
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
				postNormal('/admin/user/find_page',{'sessionId':this.enter.sessionId},{
					param:{
					  "loginNameLike": this.enter.loginName,
					  "pageIndex": 1,
					  "pageSize": 10,
					  "roleId": this.enter.roleId,
					  "userNameLike":  this.enter.userName
					}
				}).then((res)=>{
					console.log(res)
					// 登录信息存储到VUEX 再存储到本地
					const enter = JSON.stringify(res.bussData)
					localStorage.setItem("enter", enter);
					this.toLink('/home/banner')
					this.$message({
						message: '登录成功！',
						type: 'success'
					});
				})
			},
			toLink(i) {
				this.$router.push({
					path: i
				});
			},
			handleEdit(index,row) {
				this.$router.push({
					path: '/home/userDetail'
				});
			}
		}
	};
</script>
<style scoped>
	
</style>
