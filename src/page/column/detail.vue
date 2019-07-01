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
						<span>设备型号</span><span>内容</span>
					</li>
					<li class="list">
						<span>烟弹类型</span><span>内容</span>
					</li>
					<li class="list">
						<span>上市日期</span><span>内容</span>
					</li>
					<li class="list">
						<span>当月使用该型号/全部激活比</span><span>内容</span>
					</li>
					<li class="list">
						<span>当月吸烟支数</span><span>内容</span>
					</li>
					<li class="list">
						<span>该型号当月平均每支口数</span><span>内容</span>
					</li>
					<li class="list">
						<span>该型号总共吸烟支数</span><span>内容</span>
					</li>
					<li class="list">
						<span>该型号总平均每支口数</span><span>内容</span>
					</li>
				</ul>
				<ul>
					<li class="list">
						<span>支持烟型</span><span>内容</span>
					</li>
					<li class="list">
						<span>设备照片</span>
						<img src="../../assets/imgs/rightimg.png" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
 
<script>
	export default {
		name: "columnDetail",
		components: {
			
		},
		data() {
			return {
				
			};
		},
		created() {},
		mounted() {},
		methods: {
			
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
	}
	
</style>
