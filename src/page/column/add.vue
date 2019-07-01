<template>
	<div class="columAdd">
		<div class="w-100 h-100 p-15">
			<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
				<el-breadcrumb-item>设备管理》新增</el-breadcrumb-item>
			</el-breadcrumb>
			<div class="w-100 p-15">
				<ul class="wrap">
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">设备型号：</em>
						<el-input v-model="name" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">烟弹类型：</em>
						<el-select v-model="name" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">上市日期：</em>
						<el-input v-model="name" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">支持烟型：</em>
						<div>
							<span class="typeBtn" v-for="item in 30">万宝路</span>
						</div>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">设备照片：</em>
						<img src="../../assets/imgs/rightimg.png" />
					</li>
				</ul>
				<div class="footer">
					<el-button plain>确定</el-button>
				</div>
				
			</div>
		</div>
	</div>
</template>
 
<script>
	export default {
		name: "columnAdd",
		components: {
			
		},
		data() {
			return {
				name:'',
				options: [{
						value: 1,
						label: '男'
					},
					{
						value: 2,
						label: '女'
					},
				]
			};
		},
		created() {},
		mounted() {},
		methods: {
			
		}
	};
</script>
<style lang="less" scoped>
	.columAdd{
		padding-bottom:50px;
	}
	.wrap{
		max-width: 500px;
		li{
			margin-top: 40px;
			em{
				margin-right: 30px;
			}
		}
	}
	.typeBtn{
		background: #bbb;
		display: inline-block;
		padding: 5px 15px;
		margin-bottom: 10px;
		margin-right: 10px;
		border: 1px solid #bbb;
	}
	.footer{
		text-align: center;
	}
</style>
