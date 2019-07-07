<template>
	<div>
		<div class="w-100 h-100 p-15">
			<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
				<el-button size="mini" class="right" @click="exportExcel">导出数据</el-button>
				<el-breadcrumb-item>时间表</el-breadcrumb-item>
			</el-breadcrumb>

			<div class="w-100 p-15 mainTop">
				是否在APP显示
				<el-switch @change="change" v-model="isShowTime" active-color="#13ce66" inactive-color="#ccc">
				</el-switch>
			</div>
			<div class="w-100 p-15 mainMiddle">
				<div class="flex w-100 list"><em class="nowrap" style="line-height: 40px;">年份：</em>
					<span class="el-input1">{{years}}</span>
					<!-- <el-input disabled  placeholder="年份" v-model="years"></el-input> -->
				</div>
				<div class="flex w-100">
					<em class="nowrap" style="line-height: 40px;">年周：</em>
					<el-date-picker 
						id="getWeek"
						@change="change2"
						v-model="value1" type="week" format="第 WW 周" placeholder="选择周">
					</el-date-picker>
					<span class="other" style="line-height: 40px;">至</span>
					<span style="line-height: 40px;">第{{weekNum}}周</span>
				</div>
				
			</div>
			<div id="main"></div>
		</div>
	</div>
</template>

<script>
	import {configDetail,configUpdate,getMouthNumByWeeks,exportWeekList} from '@/api/user';
	// 引入 ECharts 主模块
	var echarts = require('echarts/lib/echarts');
	// 引入柱状图
	require('echarts/lib/chart/line');
	
	export default {
		name: "message",
		data() {
			return {
				beginTime:'2019-04',  // 开始时间
				endTime:'2019-01', // 结束时间
				years:new Date().getFullYear(),// 年份
				isShowTime:false,// 是否在APP显示
				dataList:[],// 列表
				id:'',
				value1: '',
				weekNum:' ',// 第几周
				sex: 3, // 性别
				options: []

			};
		},
		created() {},
		mounted() {
			this.enter = JSON.parse(localStorage.getItem("enter"));
			this.init()
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('main'));
			// 绘制图表
			myChart.setOption({
				tooltip: {},
				xAxis: {
					name: '时间',
					data: ['第一周', '第二周', '第三周', '第四周']
				},
				yAxis: {
					name: '口数',
				},
				series: [{
					name: '销量',
					type: 'line',
					data: [5, 20, 36, 10]
				}]
			});
		},
		methods: {
			change(value){  // 开关状态改变
				console.log(value)
				let isShowTime = value?'y':'n';
				const params = {
					isShowTime:isShowTime,
					id:this.id
				}
				configUpdate(params,this.enter.sessionId).then((res)=>{
					console.log(res)
				})
			},
			init(){
				const params = {
					"begin": this.beginTime,
					"end": this.endTime
				}
				getMouthNumByWeeks(params,this.enter.sessionId).then((res)=>{
					console.log(res)
				})
				configDetail(this.enter.sessionId).then((res)=>{
					console.log(res)
					this.id = res.bussData.id;
					this.isShowTime  = res.bussData.isShowTime == 'y'?true:false;
				})
			},
			exportExcel(){  // 导出数据
				const params = {
					"begin":this.beginTime,
					"end": this.endTime
				}
				exportWeekList(params,this.enter.sessionId).then((res)=>{
					console.log(res)
					const filename = '时间表.xlsx'
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
			godanDetail() {
				this.toLink('/user/danweiList/detail')
			},
			change2(value){  // 改变时间
				this.years = this.value1.getFullYear();
				this.$nextTick(()=>{
					let str = document.querySelector("#getWeek").value.split(' ');
					let weekNum = str[1];
					this.weekNum = Number(weekNum)+3;
					console.log(weekNum)
				})
				
			}
		}
	};
</script>
<style lang="less" scoped>
	.mainTop {
		text-align: right;
	}
	#main{
		width: 630px;height: 480px;
	}
	.mainMiddle{
		.list{
			margin-bottom: 20px;
		}
		.el-input1{
			width: 220px;
			height: 40px;
			line-height: 40px;
			border-radius: 5px;
			padding-left: 10px;
			border: 1px solid #ccc;
		}
		.other{
			margin: 0 20px;
		}
		em{
			min-width: 4em;
		}
	}
</style>
