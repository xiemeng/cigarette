<template>
	<div class="columAdd">
		<div class="w-100 h-100 p-15">
			<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
				<el-breadcrumb-item>用户管理》{{tips == 'add'?'新增':'编辑'}}</el-breadcrumb-item>
			</el-breadcrumb>
			<div class="w-100 p-15">
				<ul class="wrap">
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">头像：</em>
						
						<div class="updateImg">
							点击更改
							<img v-if="images" class="headImg" :src="images" />
							<input type="file" @change="onFileChange"/>
						</div>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">账号：</em>
						<el-input v-model="loginName" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">用户名：</em>
						<el-input v-model="userName" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">设置密码：</em>
						<el-input type="password" v-model="password" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">重复密码：</em>
						<el-input type="password" v-model="password2" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">角色：</em>
						<div>
							<div v-for="(item,index) in userNum" class="userList">
							    <el-select v-model="roleId " placeholder="请选择">
							    	<el-option v-for="item in options" :key="item.id" :label="item.roleName" :value="item.id">
							    	</el-option>
							    </el-select>
								<!-- <span v-if="index == 0" class="addNum" @click="addUserNum">+</span>
								<span v-if="index != 0" class="addNum" @click="reduceNum">-</span> -->
							</div>
						</div>
                        
					</li>
				</ul>
				<div class="footer">
					<el-button plain @click="submit">确定</el-button>
				</div>
				
			</div>
		</div>
	</div>
</template>
 
<script>
	import service from '@/request/http.js'
	import {meetAdd,meetList,meetUpdate,meetDetail} from '@/api/meeting'
	import {getOSSUploadUrl} from '@/api/colum'
	export default {
		name: "columnAdd",
		components: {
			
		},
		data() {
			return {
				userName:'',// 用户名
				loginName:'',// 账户
				password2:'',// 密码2
				password:'',// 密码
				images:'',// 图片
				avatorKey:'',// 图片标识，后台返回
				tips:'',// 
				name:'',
				userNum:1,// 存在几个角色
				roleId:'',// 角色id
				options: []
			};
		},
		created() {
			this.tips = this.$router.currentRoute.query.tips
		},
		mounted() {
			this.enter = JSON.parse(localStorage.getItem("enter"));
			this.getList()
		},
		methods: {
			addUserNum(){
				if(this.userNum>=this.options.length){
					this.$message({
					  message: '角色已达上限',
					  type: 'warning'
					});
				}else{
					this.userNum++;
				}
				
			},
			addName(){  // 新增
				const param = {
					 "avatorKey": this.avatorKey,
					  "loginName": this.loginName,
					  "password": this.password,
					  "roleId": this.roleId,
					  "userName":this.userName
				}
				meetAdd(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					this.$message({
					  message: '用户新增成功',
					  type: 'success'
					});
					this.$router.push({path:'/meeting/meetingList'})
				})
			},
			upDateName(){  // 编辑
				const param = {
					"id": this.$router.currentRoute.query.id,
					"avatorKey": this.avatorKey,
					"loginName": this.loginName,
					"password": this.password,
					"roleId": this.roleId,
					"userName": this.userName
				}
				meetUpdate(param,this.enter.sessionId).then((res)=>{
					console.log(res.bussData.uploadUrl)
					this.$message({
					  message: '用户更改成功',
					  type: 'success'
					});
					this.$router.push({path:'/meeting/meetingList'})
				})
			},
			onFileChange (e) {
			  var files = e.target.files || e.dataTransfer.files;
			  if (!files.length) return
			  this.createImage(files[0]);
			},
			createImage (file) {
			  getOSSUploadUrl(file.name.split('.')[1],file.type).then((res)=>{
			  	console.log(res)
			  	this.avatorKey = res.bussData.fileKey;
			  	service.put(res.bussData.uploadUrl, file, {
			  	  headers: {
			  	    'Content-Type': file.type,
			  	  }
			  	}).then(() => {
			  	  this.images = res.bussData.downloadUrl; //显示图片
			  	})
			  })
			},
			reduceNum(){
				this.userNum--;
			},
			submit(){  // 提交
				if(!this.avatorKey){
					this.$message({
					  message: '请上传图片',
					  type: 'warning'
					});
					return
				}
				if(!this.loginName){
					this.$message({
					  message: '请填写账户',
					  type: 'warning'
					});
					return
				}
				if(!this.userName){
					this.$message({
					  message: '请填写用户名',
					  type: 'warning'
					});
					return
				}
				if(!this.password){
					this.$message({
					  message: '请设置密码',
					  type: 'warning'
					});
					return
				}
				if(!this.password2){
					this.$message({
					  message: '请再次设置密码',
					  type: 'warning'
					});
					return
				}
				if(!this.roleId){
					this.$message({
					  message: '请设置角色',
					  type: 'warning'
					});
					return
				}
				if(this.password != this.password2){
					this.$message({
					  message: '2次密码设置不同',
					  type: 'warning'
					});
					return
				}
				if(this.tips){  // 新增
					this.addName()
				}else{
					this.upDateName()
				}
			},
			getList(){  // 获取角色列表
				meetList(this.enter.sessionId).then((res)=>{
					console.log(res)
					this.options = res.bussData;
				})
				if(!this.tips){
					const params = {
						id:this.$router.currentRoute.query.id,
					}
					meetDetail(params,this.enter.sessionId).then((res)=>{
						console.log(res)
						this.avatorKey = res.bussData.avatorKey;
						this.images = res.bussData.avatorUrl;
						this.loginName = res.bussData.loginName;
						// this.password = res.bussData.password;
						this.roleId = res.bussData.roleId;
						this.userName = res.bussData.userName;
					})
				}
				
			},
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
	
	.updateImg{
		display: inline-block;
		position: relative;
		border-radius: 50%;
		border: 1px solid #ccc;
		width: 100px;height: 100px;
		text-align: center;line-height: 100px;
		input{
			position: absolute;
			left: 0;top: 0;
			width: 100%;
			height: 100%;
			opacity: 0;
		}
		.headImg{
			border-radius: 50%;
			position: absolute;
			left: 0;top: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>
