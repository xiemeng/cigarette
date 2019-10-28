<template>
	<div>
		<div class="w-100 h-100 p-15">
			<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
				<el-button size="mini" class="right" type="primary" @click="exportExcel">导出数据</el-button>
				<el-breadcrumb-item>用户管理》详情</el-breadcrumb-item>
			</el-breadcrumb>
			<div class="w-100 p-15 user-detail-wrap">
				<ul>
					<li class="list">
						<span>用户ID</span><span>{{allDate.id}}</span>
					</li>
					<li class="list">
						<span>微信名</span><span>{{allDate.nickname}}</span>
					</li>
					<li class="list">
						<span>性别/年龄</span><span>{{allDate.sex ==1?'男':'女'}}{{'/'+allDate.age}}</span>
					</li>
					<li class="list">
						<span>联系方式</span><span>{{allDate.mobile}}</span>
					</li>
					<li class="list">
						<span>设备数</span><span>{{allDate.deviceNum}}</span><span>{{disposeDate2(allDate.deviceHistories)}}</span>
					</li>
					<li class="list">
						<span>烟弹类型</span><span>{{getType(allDate.deviceHistories)}}</span>
					</li>
					<li class="list">
						<span>口数</span><pre>{{disposeDate(allDate.deviceHistories)}}</pre>
					</li>
					
				</ul>
				<ul class="right">
					<li class="list">
						<span>头像</span>
						<img :src="allDate.headimgurl" @error="errorImg"/>
					</li>
					<li class="list">
						<span>设备激活日期</span><span>{{ allDate.startTime+'('+allDate.intervalDays+'天)'}}</span>
					</li>
					<li class="list">
						<span>最后一次使用设备</span><span>{{allDate.lastUseTime }}</span>
					</li>
					<li class="list">
						<span>当月活跃天数</span><span>{{allDate.monthActivieDay}}天</span>
					</li>
					<li class="list">
						<span>当月吸烟设备数</span><span>{{allDate.deviceNum }}</span>
					</li>
					<li class="list">
						<span>当月吸烟口数</span><span>{{allDate.monthMouthNum}}口</span>
					</li>
				</ul>
			</div>
			<div class="p-15 last clear">
				<span class="date">使用日期</span>
				<div class="left clear">
					<div v-for="(item,index) in deviceHistories2" class="chilren" @click.catch="chooseDate(index)">
						<span>设备{{index+1}}：{{item.model + ' ' + item.uuid}}</span>
						<Calendar
						  v-on:changeMonth="changeDate"
						  :markDateMore="item.markDate"
						></Calendar>
					</div>
				</div>
				
				
			</div>
		</div>
	</div>
</template>
 <!-- v-on:isToday="clickToday"
  :markDate=arr // arr=['2018/4/1','2018/4/3'] 标记4月1日和4月3日 简单标记
  :markDateMore=arr // 多种不同的标记
  第一个标记和第二个标记不能同时使用
  :agoDayHide='1514937600' //某个日期以前的不允许点击  时间戳10位
  :futureDayHide='1525104000' //某个日期以后的不允许点击  时间戳10位
  :sundayStart="true" //默认是周一开始 当是true的时候 是周日开始 -->
<script>
	var error3 = require('@/assets/imgs/people.png');
	import {formatDate} from '@/assets/js/common';
	import Calendar from 'vue-calendar-component';
	import {deviceDetail,exportDetail,getMouthNumByPage} from "@/api/user";
	export default {
		name: "userDetail",
		components: {
			Calendar
		},
		data() {
			return {
				startTime:'',// 开始时间 2019-01-02
				endTime:'',// 结束时间
				enter:{},
				allDate:{},// 总数据
				deviceHistories2:[],// 设备数组
				markDate:[
					// {date:'2019/7/1',className:"red"}, // 红：表示当天使用了
					// {date:'2019/7/13',className:"yellow"}, // 黄：当天未使用
				],
				date:'',// 日期
				index:0,// 日期下标
			};
		},
		created() {
			var date=new Date;
			this.startTime = formatDate(date).start;
			this.endTime = formatDate(date).end;
			console.log(formatDate(date))
			
		},
		mounted() {
			this.enter = JSON.parse(localStorage.getItem("enter"));
			this.init();
		},
		methods: {
			exportExcel(){  // 导出数据
				const param = {
					id:this.$router.currentRoute.query.weixinUserId
				}
				exportDetail(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					const filename = '微信用户详情.xlsx'
					this.fileDownload(res, filename)
				}).catch((error)=>{
					this.$message({
						showClose: true,
						message: error,
						type: 'error'
					})
				})
			},
			changeDate(date) {
				setTimeout(() => {
					let arr = date.split('/')
					if(arr[1]<10){
						arr[1] = '0' + arr[1]
					}
					console.log(arr)
					let data = '-30'
					if(arr[1] == '02'){
						data = '-28'
					}
					arr.length = 2;
					let str = arr.join('-')
					let startTime = str+'-01'
					let endTime = str+data
					console.log(formatDate(date),date)
					const param2 = {
						"deviceId": this.allDate.deviceHistories[this.index].id,
						"gmtCreatedGE": startTime,  // 开始时间
						"gmtCreatedLE": endTime,  // 结束时间
						"weixinUserId": this.allDate.deviceHistories[this.index].weixinUserId
					}
					let markDate = [];
					
					getMouthNumByPage(param2,this.enter.sessionId).then((res)=>{
						if(res && res.bussData.length>0){
							for(let i = 0;i<res.bussData.length;i++){
								markDate.push({
									date:res.bussData[i].gmtCreated.split(' ')[0],
									className:"red"
								})
								
							}
							this.$set(this.allDate.deviceHistories[this.index], 'markDate',markDate)
						}
					})
					console.log(str);
				})
			},
			chooseDate (index) {
				this.index = index
				 console.log(index); //跳到了本月
			},
			init(){
				const param = {
					id:this.$router.currentRoute.query.weixinUserId
				}
				deviceDetail(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					this.allDate = res.bussData;
					this.allDate.deviceHistories.forEach((item,index)=>{
						var formatDate = new Date().valueOf()
						const param2 = {
							"deviceId": item.id,
							"gmtCreatedGE": this.startTime,  // 开始时间
							"gmtCreatedLE": this.endTime,  // 结束时间
							"weixinUserId": item.weixinUserId
						}
						let markDate = [];
						getMouthNumByPage(param2,this.enter.sessionId).then((res)=>{
							if(res && res.bussData.length>0){
								for(let i = 0;i<res.bussData.length;i++){
									markDate.push({
										date:res.bussData[i].gmtCreated.split(' ')[0],
										className:"red"
									})
									
								}
								this.$set(this.allDate.deviceHistories[index], 'markDate',markDate)
							}
						})
					})
					console.log(this.allDate.deviceHistories)
					this.deviceHistories2 = this.allDate.deviceHistories
					
				})
			},
			errorImg($event){  // 图片错误加载的默认图
				event.srcElement.src = error3
			},
			getType(date){
				if(!date)return
				let obj = {}
				let value = date.filter((item)=>{
					if(!obj[item.cigarette.bombName]){
						obj[item.cigarette.bombName] = 1
						return item.cigarette.bombName
					}
					return false
				}).map((item) => {
					return item.cigarette.bombName == 'kao'?'烤烟型':'油烟型'
				})
				return value.join('  ');
			},
			disposeDate(date){  // 处理数据
				if(!date)return
				let obj = {}
				let value = date.filter((item)=>{
					obj[item.model] = item.allMouth
					return true
					// if(!obj[item.model] && obj[item.model] != 0){  // 
					// 	obj[item.model] = item.allMouth
					// 	return true
					// }else{
					// 	obj[item.model] += item.allMouth
					// }
					// return false
				})
				let value2 = value.map((item) => {
					for(let key in obj){
						if(item.model == key){
							return item.model+ ' ' + item.uuid +' - '+item.allMouth+'口'
						}
					}
				})
				let str = ''
				if(value2 && value2.length>0){
					value2.map(item => {
						str += `${item}\n`
					})
					
				}
				return str;
			},
			disposeDate2(date){
				if(!date)return
				let obj = {}
				let value = date.filter((item)=>{
					if(!obj[item.model]){
						obj[item.model] = 1
						return item.model
					}
					return false
				}).map((item) => {
					return item.model
				})
				return value.join('  ');
			},
			disposeDate3(date){
				
				if(!date)return
				let obj = {}
				let value = date.filter((item)=>{
					if(!obj[item.model]){
						obj[item.model] = 1
						return item.model
					}
					return false
				})
				console.log(value)
				return value
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
<style lang="less" scoped>
	.user-detail-wrap{
		display: flex;
		padding-bottom: 0;
		ul{
			flex: 1;
		}
	}
	.list{
		padding-bottom: 32px;
		pre{
			display: inline-block;
		}
		span:nth-child(1){
			vertical-align: top;
			font-size: 14px;
			padding-right: 30px;
			width: 110px;
			display: inline-block;
		}
		span:nth-child(2){
			color:#757575;
		}
		span:nth-child(3){
			color:#757575;
			display: block;
			margin-left: 110px;
		}
	}
	.right .list{
		span:nth-child(1){
			width: 150px;
		}
	}
	.last{
		padding-top: 0;
		.date{
			vertical-align: top;
			font-size: 14px;
			width: 110px;
			float: left;
			padding-right: 30px;
		}
		.wh_container{
			margin: 0;
			margin-top: 20px;
		}
		.left{
			float: left;
			margin-left: 100px;
			position: relative;
			top: -22px;
		}
		.chilren{
			min-height: 390px;
			float: left;
			margin-right: 20px;
			margin-bottom: 20px;
		}
	}
	.clear:after { content:''; display:block; clear:both; }
	.clear { zoom:1; }
</style>
