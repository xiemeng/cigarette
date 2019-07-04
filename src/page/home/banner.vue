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
							<el-input placeholder="请输入" v-model="weixinName"></el-input>
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
						<img :src="scope.row.avatorUrl " />
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
	import {bannerPage} from "@/api/banner";
	export default {
		name: "column",
		data() {
			return {
				total:0,  // 总数据条数
				totalsPage:0, // 总分页数
				data:{  // 分页 相关信息
					pageSize:10,
					currentPage:1,
				},
				enter:{},// 登录信息
				weixinName:'',// 微信名字
				sex: 0, // 性别
				options: [
					{
						value: 0,
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
				tableData: [], // 列表数据
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
				const param = {
					  "nicknameLike": this.weixinName,
					  "sex":this.sex,
					  "pageIndex": this.data.currentPage,
					  "pageSize": this.data.pageSize,
					}
				bannerPage(param,this.enter.sessionId).then((res)=>{
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
			handleEdit(index,row) {  // 详情
				this.$router.push({
					path: '/home/userDetail'
				});
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
