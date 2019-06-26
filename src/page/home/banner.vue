<template>
	<div>
		<top></top>
		<left></left>
		<div class="main">
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<el-button size="mini" class="right" type="primary" @click="toLink('updataImg')">+ 新增轮播图</el-button>
					<el-breadcrumb-item>用户管理</el-breadcrumb-item>
					
				</el-breadcrumb>

				<el-table :data="tableData" class="w-100 p-15">
					<el-table-column label="图片">
						<template slot-scope="scope">
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561267546143&di=b2a443ec089d4310863a479a6d4a3321&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c8545787c0bb0000012e7ed665f8.jpg" width="120px;" />
						</template>
					</el-table-column>
					<el-table-column label="描述">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="上架状态">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="时间">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button size="mini" plain type="danger" @click="handleDelete(scope.$index, scope.row)">上架</el-button>
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
		name: "banner",
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
				}]
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