<template>
	<div>
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<el-button size="mini" class="right" @click="toLink('columnAdd')">导出数据</el-button>
					<el-breadcrumb-item>排行榜</el-breadcrumb-item>
				</el-breadcrumb>
				
				<div class="w-100 p-15 mainTop">
					是否在APP显示
					<el-switch
					v-model="isApp"
					active-color="#13ce66"
					inactive-color="#ccc">
					</el-switch>
				</div>
				
				<el-table :data="tableData" class="w-100 p-15">
					<el-table-column label="排名" width="180">
						<template slot-scope="scope">
							排名
						</template>
					</el-table-column>
					<el-table-column label="昵称" width="180">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="设备" width="180">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="当月吸烟口数" width="180">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="当月活跃天数" width="180">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="设备激活日期" width="180">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" plain @click="handleDelete(scope.$index, scope.row)">详情</el-button>
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
		name: "message",
		data() {
			return {
				isApp:false,// 是否在APP显示
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
<style lang="less" scoped>
.mainTop{
  text-align: right;
}
</style>