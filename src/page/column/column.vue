<template>
	<div>
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<el-button size="mini" class="right" @click="toLink('columnAdd')">导出数据</el-button>
					<el-button class="elbut right" size="mini" @click="goAdd('add')">新增</el-button>
					<el-breadcrumb-item>设备管理</el-breadcrumb-item>
				</el-breadcrumb>
				
				<el-table :data="tableData" class="w-100 p-15">
					<el-table-column label="设备型号">
						<template slot-scope="scope">
							栏目名称
						</template>
					</el-table-column>
					<el-table-column label="设备照片">
						<template slot-scope="scope">
							<img src="../../assets/imgs/rightimg.png" />
						</template>
					</el-table-column>
					<el-table-column label="烟弹类型">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="支持烟型">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="上市日期">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="当月使用人/全部激活比">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="当月吸烟支数">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="当月平均每支口数">
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" plain @click="goDetail(scope.$index, scope.row)">详情</el-button>
							<el-button size="mini" plain @click="goAdd(scope.$index, scope.row)">编辑</el-button>
							<el-button size="mini" type="danger" @click="handleEdit(scope.$index, scope.row)">删除</el-button>
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
			},
			goDetail() {  // 去详情
				this.$router.push({
					path: '/column/column/detail'
				});
			},
			goAdd() {  // 去添加
				this.$router.push({
					path: '/column/column/add'
				});
			}
		}
	};
</script>
<style scoped>
	.elbut{
		margin-right:20px;
	}
	.el-button+.el-button{
		margin-left: 5px;
	}
</style>