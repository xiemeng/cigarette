<template>
	<div>
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<el-button size="mini" class="right" @click="exportExcel">导出数据</el-button>
					<el-breadcrumb-item>排行榜</el-breadcrumb-item>
				</el-breadcrumb>
				
				<div class="w-100 p-15 mainTop">
					是否在APP显示
					<el-switch
					@change="change"
					v-model="isShowRank"
					active-color="#13ce66"
					inactive-color="#ccc">
					</el-switch>
				</div>
				
				<el-table :data="tableData" class="w-100 p-15" @sort-change='sortChange'>
					<el-table-column label="排名" width="180">
						<template slot-scope="scope">
							{{scope.$index+1}}
						</template>
					</el-table-column>
					<el-table-column label="昵称" width="140">
						<template slot-scope="scope">
							{{ scope.row.nickname }}
						</template>
					</el-table-column>
					<el-table-column label="设备" width="140">
						<template slot-scope="scope">
							{{ scope.row.model }}
						</template>
					</el-table-column>
					<el-table-column prop="monthMouth" label="当月吸烟口数" width="140" sortable="custom">
						
					</el-table-column>
					<el-table-column prop="monthDays" label="当月活跃天数" width="140" sortable="custom">
						
					</el-table-column>
					<el-table-column label="设备激活日期" width="180">
						<template slot-scope="scope">
							{{ scope.row.startTime }}
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button class="elbut" size="mini" plain @click="godanDetail(scope.$index, scope.row)">详情</el-button>
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
	import {exportRankList,deviceOrder,configDetail,configUpdate} from '@/api/user';
	export default {
		name: "message",
		data() {
			return {
				total:0,  // 总数据条数
				totalsPage:0, // 总分页数
				data:{  // 分页 相关信息
					pageSize:10,
					currentPage:1,
				},
				enter:{},// 登录信息
				isShowRank:false,// 是否在APP显示
				id:'',
				tableData: [],
				"monthDaysASC": false,
				"monthDaysDESC": true, // 当月活跃天数，大
				"monthMouthASC": false,
				"monthMouthDESC": false,
			};
		},
		created() {},
		mounted() {
			this.enter = JSON.parse(localStorage.getItem("enter"));
			this.init()
			this.getList()
		},
		methods: {
			change(value){  // 开关状态改变
				console.log(value)
				let isShowRank = value?'y':'n';
				const params = {
					isShowRank:isShowRank,
					id:this.id
				}
				configUpdate(params,this.enter.sessionId).then((res)=>{
					console.log(res)
				})
			},
			sortChange ({column, prop, order} ) {
				if(!order)return
				if(prop === 'monthDays'){
					if(order === 'descending'){  // 下
						this.monthDaysASC = true;
						this.monthDaysDESC = false;
						this.monthMouthASC = false;
						this.monthMouthDESC = false;
					}else{
						this.monthDaysASC = false;
						this.monthDaysDESC = true;
						this.monthMouthASC = false;
						this.monthMouthDESC = false;
					}
				}
				if(prop === 'monthMouth'){
					if(order === 'descending'){
						this.monthDaysASC = false;
						this.monthDaysDESC = false;
						this.monthMouthASC = true;
						this.monthMouthDESC = false;
					}else{
						this.monthDaysASC = false;
						this.monthDaysDESC = false;
						this.monthMouthASC = false;
						this.monthMouthDESC = true;
					}
				}
				this.init();
				console.log(column, prop, order )
			},
			exportExcel(){  // 导出数据
				const param = {
				  "pageIndex": this.data.currentPage,
				  "pageSize": this.data.pageSize,
				  "monthDaysASC": true,
				  "monthDaysDESC": true,
				  "monthMouthASC": true,
				  "monthMouthDESC": true,
				}
				exportRankList(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					const filename = '排行榜列表.xlsx'
					this.fileDownload(res, filename)
				}).catch((error)=>{
					this.$message({
						showClose: true,
						message: error,
						type: 'error'
					})
				})
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
			},
			getList(){  // 获取开关状态接口
				configDetail(this.enter.sessionId).then((res)=>{
					console.log(res)
					this.id = res.bussData.id;
					this.isShowRank  = res.bussData.isShowRank == 'y'?true:false;
				})
			},
			init(){
				const param = {
					  "pageIndex": this.data.currentPage,
					  "pageSize": this.data.pageSize,
					  "monthDaysASC": this.monthDaysASC,
					  "monthDaysDESC": this.monthDaysDESC,
					  "monthMouthASC": this.monthMouthASC,
					  "monthMouthDESC": this.monthMouthDESC,
					}
				deviceOrder(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					this.tableData = res.bussData;
					this.total = res.count;
					this.totalsPage = res.pageCount;
				})
			},
			godanDetail(tips,row){
				this.$router.push({
					path: '/user/danweiList/detail',
					query:{weixinUserId:row.weixinUserId}
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
		}
	};
</script>
<style lang="less" scoped>
.mainTop{
  text-align: right;
}
</style>