<template>
	<div>
		<div class="w-100 h-100 p-15">
			<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
				<el-button size="mini" class="right" @click="toLink('columnAdd')">导出数据</el-button>
				<el-breadcrumb-item>时间表</el-breadcrumb-item>
			</el-breadcrumb>

			<div class="w-100 p-15 mainTop">
				是否在APP显示
				<el-switch v-model="isApp" active-color="#13ce66" inactive-color="#ccc">
				</el-switch>
			</div>
			<div class="w-100 p-15 mainMiddle">
				<div class="flex w-100 list"><em class="nowrap" style="line-height: 40px;">年份：</em>
					<el-select v-model="sex" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="flex w-100">
					<em class="nowrap" style="line-height: 40px;">周：</em>
					<el-date-picker 
						id="getWeek"
						@change="change"
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
	// 引入 ECharts 主模块
	var echarts = require('echarts/lib/echarts');
	// 引入柱状图
	require('echarts/lib/chart/line');
	// 引入提示框和标题组件
	require('echarts/lib/component/tooltip');
	require('echarts/lib/component/title');
	export default {
		name: "message",
		data() {
			return {
				value1: '',
				weekNum:' ',// 第几周
				isApp: false, // 是否在APP显示
				sex: 3, // 性别
				options: [{
						value: 3,
						label: '2018'
					}, {
						value: 1,
						label: '2017'
					},
					{
						value: 2,
						label: '2013'
					},
				]

			};
		},
		created() {},
		mounted() {
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
			toLink(i) {
				this.$router.push({
					path: i
				});
			},
			godanDetail() {
				this.toLink('/user/danweiList/detail')
			},
			change(value){  // 改变时间
				this.$nextTick(()=>{
					let str = document.querySelector("#getWeek").value.split(' ');
					let weekNum = str[1];
					this.weekNum = Number(weekNum)+3;
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
		.other{
			margin: 0 20px;
		}
		em{
			min-width: 4em;
		}
	}
</style>
