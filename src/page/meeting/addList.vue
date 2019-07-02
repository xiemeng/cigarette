<template>
	<div class="columAdd">
		<div class="w-100 h-100 p-15">
			<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
				<el-breadcrumb-item>角色管理》新增</el-breadcrumb-item>
			</el-breadcrumb>
			<div class="w-100 p-15">
				<ul class="wrap">
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">角色名称：</em>
						<el-input v-model="name" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">角色描述：</em>
						<el-input v-model="name" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">权限：</em>
						<div>
							<div><el-checkbox v-model="checked">所有权限</el-checkbox></div>
							<div><el-checkbox v-model="checked">用户管理</el-checkbox></div>
							<div><el-checkbox v-model="checked">烟型管理</el-checkbox></div>
							<div><el-checkbox v-model="checked">设备管理</el-checkbox></div>
							<div><el-checkbox v-model="checked">数据分析</el-checkbox></div>
						</div>
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
				userNum:1,//
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
			addUserNum(){
				this.userNum++;
			},
			reduceNum(){
				this.userNum--;
			}
		}
	};
</script>
<style lang="less" scoped>
	.el-input,.el-select{
		width: 200px;
	}
	.columAdd{
		padding-bottom:50px;
	}
	.wrap{
		max-width: 500px;
		margin-left: 30%;
		li{
			margin-top: 40px;
			em{
				margin-right: 30px;
				min-width: 5em;
			}
			.addNum{
				width: 50px;
				display: inline-block;
				border: 1px solid #bbb;
				padding: 6px 0;
				text-align: center;
				margin-left: 60px;
			}
			.userList{
				margin-bottom:18px;
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
		text-align: center;margin-top: 60px;
	}
	.headImg{
		border-radius: 50%;
	}
</style>
