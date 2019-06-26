<template>
	<div>
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<el-button size="mini" class="right" type="primary" @click="toLink('columnAdd')">+ 新增栏目</el-button>
					<el-breadcrumb-item>设备管理</el-breadcrumb-item>
				</el-breadcrumb>
				
				<div class="w-100 p-15">
					<el-row :gutter="20">
					  <el-col :span="6">
					  	<div class="flex w-100"><em class="nowrap" style="line-height: 40px;">栏目名称：</em><el-input v-model="form.name"></el-input></div>
					  </el-col>
					  <el-col :span="6">
					  	<div class="flex w-100"><em class="nowrap" style="line-height: 40px;">一级栏目：</em><el-input v-model="form.name"></el-input></div>
					  </el-col>
					  <el-col :span="6">
					  	<div class="flex w-100"><em class="nowrap" style="line-height: 40px;">二级栏目：</em><el-input v-model="form.name"></el-input></div>
					  </el-col>
					  <el-col :span="6">
					  	<el-button>查询</el-button>
					  </el-col>
					</el-row>
				</div>
				
				<el-table :data="tableData" class="w-100 p-15">
					<el-table-column label="栏目名称">
						<template slot-scope="scope">
							栏目名称
						</template>
					</el-table-column>
					<el-table-column label="所属一级栏目">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="所属二级栏目">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="栏目类型">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="上架状态">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="创建时间">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button size="mini" plain type="danger" @click="handleDelete(scope.$index, scope.row)">下架</el-button>
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
	import top from '../components/top.vue'
	import left from '../components/left.vue'
	export default {
		name: "column",
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