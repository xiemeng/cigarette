<template>
	<div>
		<top></top>
		<left></left>
		<div class="main">
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<el-breadcrumb-item>专家列表</el-breadcrumb-item>
				</el-breadcrumb>
				
				<div class="w-100 p-15">
					<el-row :gutter="20">
					  <el-col :span="6">
					  	<div class="flex w-100"><em class="nowrap" style="line-height: 40px;">留言内容：</em><el-input v-model="form.name"></el-input></div>
					  </el-col>
					  <el-col :span="6">
					  	<div class="flex w-100"><em class="nowrap" style="line-height: 40px;">留言人：</em><el-input v-model="form.name"></el-input></div>
					  </el-col>
					  <el-col :span="6">
					  	<div class="flex w-100"><em class="nowrap" style="line-height: 40px;">被留言人：</em><el-input v-model="form.name"></el-input></div>
					  </el-col>
					  <el-col :span="6">
					  	<el-button>查询</el-button>
					  </el-col>
					</el-row>
				</div>
				
				<el-table :data="tableData" class="w-100 p-15">
					<el-table-column label="留言内容" width="180">
						<template slot-scope="scope">
							留言内容
						</template>
					</el-table-column>
					<el-table-column label="留言人" width="180">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="被留言人" width="180">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="回复内容" width="180">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="留言时间" width="180">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="回复时间" width="180">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
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
	</div>
</template>

<script>
	import top from '../components/top.vue'
	import left from '../components/left.vue'
	export default {
		name: "message",
		components: {
			top,
			left
		},
		data() {
			return {
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
			}
		}
	};
</script>
<style scoped>

</style>