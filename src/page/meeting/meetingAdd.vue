<template>
	<div>
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<el-button class="right" size="mini" plain @click="addUser">新增</el-button>
					<el-breadcrumb-item>角色管理</el-breadcrumb-item>
				</el-breadcrumb>
				
				<div class="w-100 p-15">
					<el-row :gutter="20">
					  <el-col :span="6">
						<div class="flex w-100"><em class="nowrap" style="line-height: 40px;">角色：</em>
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
				
				<el-table :data="tableData" class="w-100 p-15">
					<el-table-column label="角色" width="180">
						<template slot-scope="scope">
							留言内容
						</template>
					</el-table-column>
					<el-table-column label="角色描述" width="180">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="拥有权限" width="180">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" plain @click="addUser(scope.$index, scope.row)">编辑</el-button>
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
	export default {
		name: "meetingList",
		components: {
			
		},
		data() {
			return {
				sex: '', // 性别
				options: [{
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
				
				
				form:{
					name:''
				}
				
			};
		},
		created() {},
		mounted() {},
		methods: {
			toLink(i) {
				this.$router.push({
					path: i
				});
			},
			addUser(){
				this.$router.push({
					path: 'meetingAdd/addUser'
				});
			}
		}
	};
</script>
<style scoped>

</style>