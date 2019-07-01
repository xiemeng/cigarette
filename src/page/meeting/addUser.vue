<template>
	<div class="columAdd">
		<div class="w-100 h-100 p-15">
			<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
				<el-breadcrumb-item>用户管理》新增</el-breadcrumb-item>
			</el-breadcrumb>
			<div class="w-100 p-15">
				<ul class="wrap">
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">头像：</em>
						<img class="headImg" src="../../assets/imgs/rightimg.png" />
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">账号：</em>
						<el-input v-model="name" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">用户名：</em>
						<el-input v-model="name" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">修改密码：</em>
						<el-input v-model="name" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">重复密码：</em>
						<el-input v-model="name" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">角色：</em>
						<div>
							<div v-for="(item,index) in userNum" class="userList">
							    <el-select v-model="sex" placeholder="请选择">
									<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
								<span v-if="index == 0" class="addNum" @click="addUserNum">+</span>
								<span v-if="index != 0" class="addNum" @click="reduceNum">-</span>
							</div>
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
