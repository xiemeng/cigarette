<template>
	<div class="columAdd">
		<div class="w-100 h-100 p-15">
			<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
				<el-breadcrumb-item>角色管理》{{tips == 'add'?'新增':'编辑'}}</el-breadcrumb-item>
			</el-breadcrumb>
			<div class="w-100 p-15">
				<ul class="wrap">
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">角色名称：</em>
						<el-input v-model="roleName" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">角色描述：</em>
						<el-input v-model="roleDesc" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">权限：</em>
						<div>
							<div v-for="(item,index) in menuList">
								<el-checkbox v-model="menuIds[index]">{{item.menuName}}</el-checkbox>
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
	import {meetuserInsert,meetuserUpdate,meetuserDetail,menuList} from '@/api/meeting'
	export default {
		name: "columnAdd",
		components: {
			
		},
		data() {
			return {
				tips:'',// 
				roleName:'',  //角色名称
				roleDesc:'',// 角色描述
				menuList:[],// 菜单栏
				menuIds:[
					false,false,false,false,false
				],// 角色权限
				menuIdsTrue:[],// 角色全限
			};
		},
		created() {
			this.enter = JSON.parse(localStorage.getItem("enter"));
			this.tips = this.$router.currentRoute.query.tips;
			if(!this.tips)this.init()
			this.getList()
		},
		mounted() {
			
		},
		methods: {
			init(){
				const param = {
					 "id": this.$router.currentRoute.query.id,
					}
				meetuserDetail(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					this.roleName = res.bussData.roleName;
					this.roleDesc = res.bussData.roleDesc;
					// this.menuIdsTrue = res.bussData.menuIds;
					res.bussData.menuIds.forEach((item)=>{
						this.menuIds[item-1] = true;
					})
					console.log(this.menuIdsTrue)
				})
				
			},
			getList(){
				menuList(this.enter.sessionId).then((res)=>{
					console.log(res)
					this.menuList = res.bussData;
				})
			},
			submit(){  // 提交
				if(!this.roleName){
					this.$message({
					  message: '请输入角色名',
					  type: 'warning'
					});
					return
				}
				if(!this.roleDesc){
					this.$message({
					  message: '请输入角色描述',
					  type: 'warning'
					});
					return
				}
				for(let i = 0;i<this.menuIds.length;i++){
					if(this.menuIds[i]){
						this.menuIdsTrue.push(i+1)
						// this.menuIdsTrue[i] = i+1
					}
				}
				if(this.menuIdsTrue.length<=0){
					this.$message({
					  message: '请选择角色权限',
					  type: 'warning'
					});
					return
				}
				// this.menuIdsTrue.length = 5
				console.log(this.menuIdsTrue)
				console.log(this.menuIds)
				if(this.tips){  // 新增
					this.addName()
				}else{
					this.upDateName()
				}
				
			},
			addName(){  // 新增
				
				const param = {
					  "menuIds": this.menuIdsTrue,
					  "roleDesc":this.roleDesc,
					  "roleName": this.roleName
					}
				meetuserInsert(param,this.enter.sessionId).then((res)=>{
					if(res.code)return;
					console.log(res);
					this.$message({
					  message: '添加成功',
					  type: 'success'
					});
					this.$router.push({path:'/meeting/meetingAdd'})
				})
			},
			upDateName(){  // 编辑
				const param = {
					  "id": this.$router.currentRoute.query.id,
					  "menuIds": this.menuIdsTrue,
					  "roleDesc":this.roleDesc,
					  "roleName": this.roleName
					}
				meetuserUpdate(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					if(res.code)return;
					this.$message({
					  message: '修改成功',
					  type: 'success'
					});
					this.$router.push({path:'/meeting/meetingAdd'})
				})
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
	.headImg{
		border-radius: 50%;
	}
</style>
