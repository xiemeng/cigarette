<template>
	<div>
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<el-button size="mini" class="right" @click="toLink('columnAdd')">导出数据</el-button>
					<el-breadcrumb-item>时间表</el-breadcrumb-item>
				</el-breadcrumb>
				
				<div class="w-100 p-15 mainTop">
					是否在APP显示
					<el-switch
					v-model="isApp"
					active-color="#13ce66"
					inactive-color="#ccc">
					</el-switch>
				</div>
				<div class="w-100 p-15">
					<div class="flex w-100"><em class="nowrap" style="line-height: 40px;">年份：</em>
						<el-select v-model="sex" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
	export default {
		name: "message",
		data() {
			return {
				isApp:false,// 是否在APP显示
				sex: 3, // 性别
				options: [
					{
						value: 3,
						label: '2018'
					},{
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
		mounted() {},
		methods: {
			toLink(i) {
				this.$router.push({
					path: i
				});
			},
			godanDetail(){
				this.toLink('/user/danweiList/detail') 
			}
		}
	};
</script>
<style lang="less" scoped>
.mainTop{
  text-align: right;
}
</style>