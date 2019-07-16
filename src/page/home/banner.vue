<template>
	<div>
		<div class="w-100 h-100 p-15">
			<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
				<el-button class="right" size="mini" plain @click="exportExcel">导出数据</el-button>
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
						<el-button @click="search">查询</el-button>
					</el-col>
				</el-row>
			</div>

			<el-table 
				:data="tableData" stripe  
				:default-sort = "{prop: 'startTime', order: 'descending'}" 
				class="w-100 p-15">
				<el-table-column label="头像">
					<template slot-scope="scope">
						<img :src="scope.row.headimgurl" @error="errorImg" />
					</template>
				</el-table-column>
				<el-table-column label="微信名">
					<template slot-scope="scope">
						{{ scope.row.nickname }}
					</template>
				</el-table-column>
				<el-table-column label="年龄">
					<template slot-scope="scope">
						{{ scope.row.age }}
					</template>
				</el-table-column>
				<el-table-column label="性别">
					<template slot-scope="scope">
						{{ scope.row.sex ==1?'男':'女' }}
					</template>
				</el-table-column>
				<el-table-column label="设备激活日期" sortable>
					<template slot-scope="scope">
						{{ scope.row.startTime+'('+scope.row.intervalDays+'天)'}}
					</template>
				</el-table-column>
				<el-table-column label="设备数">
					<template slot-scope="scope">
						{{ scope.row.deviceNum  }}
					</template>
				</el-table-column>
				<el-table-column label="设备型号">
					<template slot-scope="scope">
						{{ disposeDate(scope.row.deviceHistories) }}
					</template>
				</el-table-column>
				<el-table-column label="最后一次使用设备" sortable>
					<template slot-scope="scope">
						{{ scope.row.lastUseTime+'('+scope.row.city+')' }}
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
	var error1 = require('@/assets/imgs/people.png')
	import {bannerPage,bannerDetail,exportBannerExcel} from "@/api/banner";
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
			this.init();
			
		},
		methods: {
			init(){
				const param = {
					  "pageIndex": this.data.currentPage,
					  "pageSize": this.data.pageSize,
					}
				if(this.weixinName){
					param.nicknameLike = this.weixinName
				}
				if(this.sex){
					param.sex = this.sex;
				}
				bannerPage(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					this.tableData = res.bussData;
					this.total = res.count;
					this.totalsPage = res.pageCount;
				})
			},
			search(){  // 搜索
				this.init()
			},
			exportExcel(){  // 导出数据
				const param = {
					  "pageIndex": this.data.currentPage,
					  "pageSize": this.data.pageSize,
					}
				if(this.weixinName){
					param.nicknameLike = this.weixinName
				}
				if(this.sex){
					param.sex = this.sex;
				}
				exportBannerExcel(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					const filename = '微信用户列表.xlsx'
					this.fileDownload(res, filename)
				}).catch((error)=>{
					this.$message({
						showClose: true,
						message: error,
						type: 'error'
					})
				})
			},
			errorImg($event){  // 图片错误加载的默认图
				event.srcElement.src = error1
			},
			toLink(i) {
				this.$router.push({
					path: i
				});
			},
			handleEdit(index,row) {  // 详情
				this.$router.push({
					path: '/home/userDetail',
					query:{weixinUserId:row.id}
				});
			},
			handleSizeChange(val) {
				this.data.pageSize = val
				this.init()
			},
			handleCurrentChange(val) {
				this.data.currentPage = val
				this.init()
			},
			disposeDate(date){  // 处理数据
				let value = date.map((item)=>{
					return item.model
				})
				return value.join(' ');
			},
			fileDownload(data, fileName) {
	            const blob = new Blob([data], {
	                type: 'application/octet-stream'
	            })
	           
	            const filename = fileName || 'filename.xlsx'
	            if (typeof window.navigator.msSaveBlob !== 'undefined') {
	                window.navigator.msSaveBlob(blob, filename)
	            } else {
	                var blobURL = window.URL.createObjectURL(blob)
	                var tempLink = document.createElement('a')
	                tempLink.style.display = 'none'
	                tempLink.href = blobURL
	                tempLink.setAttribute('download', filename)
	                if (typeof tempLink.download === 'undefined') {
	                tempLink.setAttribute('target', '_blank')
	                }
	                
	                document.body.appendChild(tempLink)
	                tempLink.click()
	                document.body.removeChild(tempLink)
	                window.URL.revokeObjectURL(blobURL)
	            }
	        }
		}
	};
</script>
<style scoped>
	img{
		width: 70px;height: 70px;
	}
</style>
