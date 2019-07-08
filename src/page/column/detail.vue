<template>
	<div>
		<div class="w-100 h-100 p-15">
			<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
				<el-button size="mini" class="right" @click="toLink('columnAdd')">导出数据</el-button>
				<el-breadcrumb-item>设备管理》详情</el-breadcrumb-item>
			</el-breadcrumb>
			<div class="w-100 p-15 user-detail-wrap">
				<ul>
					<li class="list">
						<span>设备型号</span><span>{{allDate.model}}</span>
					</li>
					<li class="list">
						<span>烟弹类型</span><span>{{allDate.bombName == 'kao'?'烤烟型':'烟油型'}}</span>
					</li>
					<li class="list">
						<span>上市日期</span><span>{{allDate.onDate}}</span>
					</li>
					<li class="list">
						<span>当月使用该型号/全部激活比</span><span>{{ getNums(allDate.monthPeopleNum,allDate.allPeopleNum) }}%</span>
					</li>
					<li class="list">
						<span>当月吸烟支数</span><span>{{allDate.monthUseNum}}</span>
					</li>
					<li class="list">
						<span>该型号当月平均每支口数</span><span>{{ getNums(allDate.monthMouthNum,allDate.monthUseNum) }}</span>
					</li>
					<li class="list">
						<span>该型号总共吸烟支数</span><span>{{allDate.allMouthNum}}</span>
					</li>
					<li class="list">
						<span>该型号总平均每支口数</span><span>{{ getNums(allDate.allMouthNum,allDate.allUseNum) }}</span>
					</li>
				</ul>
				<ul>
					<li class="list">
						<span>支持烟型</span><span>{{ disposeDate(allDate.ecTypes) }}</span>
					</li>
					<li class="list">
						<span>设备照片</span>
						<img :src="allDate.imageUrl" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
 
<script>
	import {columDetail} from '@/api/colum'
	export default {
		name: "columnDetail",
		components: {
			
		},
		data() {
			return {
				enter:{},
				allDate:{},// 总数据
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
					  id:this.$router.currentRoute.query.id
					}
				columDetail(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					this.allDate = res.bussData
				})
			},
			getNums(val1,val2){  // 计算，处理数据
				if(val1 == 0 || val2 == 0){
					return 0;
				}
				let num = (val1/val2).toFixed(2);
				return num;
			},
			disposeDate(date){  // 处理数据
				if(!date)return
				let value = date.map((item)=>{
					return item.name
				})
				return value.join(' ');
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
			width: 250px;
			display: inline-block;
		}
		span:nth-child(2){
			color:#757575;
		}
		img{
			width: 222px;height: 133px;
		}
	}
	
</style>
