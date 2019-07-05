<template>
	<div>
		<div class="w-100 h-100 p-15">
			<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
				<el-button size="mini" class="right" type="primary" @click="toLink('columnAdd')">导出数据</el-button>
				<el-breadcrumb-item>用户管理》详情</el-breadcrumb-item>
			</el-breadcrumb>
			<div class="w-100 p-15 user-detail-wrap">
				<ul>
					<li class="list">
						<span>微信ID</span><span>{{allDate.openId}}</span>
					</li>
					<li class="list">
						<span>微信名</span><span>{{allDate.weixinUsername}}</span>
					</li>
					<li class="list">
						<span>性别/年龄</span><span>{{allDate.sex ==1?'男':'女'+'/'+allDate.age}}</span>
					</li>
					<li class="list">
						<span>联系方式</span><span>{{allDate.mobile}}</span>
					</li>
					<li class="list">
						<span>设备数</span><span>{{allDate.deviceNum}}</span>
					</li>
					<li class="list">
						<span>烟弹类型</span><span>内容</span>
					</li>
					<li class="list">
						<span>口数</span><span>{{disposeDate(allDate.deviceHistories)}}</span>
					</li>
					<li class="list">
						<span>使用日期</span>
						<Calendar
						  :markDateMore=markDate
						></Calendar>
					</li>
				</ul>
				<ul>
					<li class="list">
						<span>头像</span>
						<img :src="allDate.headimgurl" @error="errorImg"/>
					</li>
					<li class="list">
						<span>设备激活日期</span><span>{{allDate.startTime }}</span>
					</li>
					<li class="list">
						<span>最后一次使用设备</span><span>{{allDate.lastUseTime }}</span>
					</li>
					<li class="list">
						<span>当月活跃天数</span><span>{{allDate.monthActivieDay}}天</span>
					</li>
					<li class="list">
						<span>当月吸烟支数</span><span>{{allDate.monthUseNum }}支</span>
					</li>
					<li class="list">
						<span>当月吸烟口数</span><span>{{allDate.monthMouthNum}}口</span>
					</li>
				</ul>
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
	const error = require('@/assets/imgs/rightImg.png')
	import Calendar from 'vue-calendar-component';
	import {bannerDetail} from "@/api/banner";
	export default {
		name: "userDetail",
		components: {
			Calendar
		},
		data() {
			return {
				enter:{},
				allDate:{},// 总数据
				markDate:[
					{date:'2019/6/1',className:"red"}, // 红：表示当天使用了
					{date:'2019/6/13',className:"yellow"}, // 黄：当天未使用
				],
				date:'',// 日期
			};
		},
		created() {},
		mounted() {
			this.enter = JSON.parse(localStorage.getItem("enter"));
			this.init();
		},
		methods: {
			toLink(){  // 到处数据
			},
			init(){
				console.log(this.$router.currentRoute.query.id)
				const param = {
					id:this.$router.currentRoute.query.id
				}
				bannerDetail(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					this.allDate = res.bussData
				})
			},
			errorImg($event){  // 图片错误加载的默认图
				event.srcElement.src = error
			},
			disposeDate(date){  // 处理数据
				console.log(date)
				if(!date)return
				let value = date.map((item)=>{
					return item.model+'-'+item.allMouth+'口'
				})
				
				return value.join('  ');
			}
		}
	};
</script>
<style lang="less" scoped>
	.user-detail-wrap{
		display: flex;
		ul{
			flex: 1;
		}
	}
	.list{
		padding-bottom: 32px;
		span:nth-child(1){
			vertical-align: top;
			font-size: 14px;
			padding-right: 30px;
			width: 150px;
			display: inline-block;
		}
		span:nth-child(2){
			color:#757575;
		}
	}
	
</style>
