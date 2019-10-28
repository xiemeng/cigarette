<template>
	<div class="columAdd">
		<div class="w-100 h-100 p-15">
			<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
				<el-breadcrumb-item>设备管理》{{tips == 'add'?'新增':'编辑'}}</el-breadcrumb-item>
			</el-breadcrumb>
			<div class="w-100 p-15">
				<ul class="wrap">
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">设备型号：</em>
						<el-input v-model="model" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">烟弹类型：</em>
						<el-select v-model="bombName" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">上市日期：</em>
						<el-date-picker
						  v-model="onDate"
						  type="date"
						  placeholder="选择日期">
						</el-date-picker>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">支持烟型：</em>
						<div>
							<span :style="{background:item.isChoose?'#90ee90':'#fff'}" class="typeBtn" v-for="(item,index) in yanType" @click="choose(item,index)">{{item.name}}</span>
						</div>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">默认烟型：</em>
						<div>
							<span :style="{background:item.isDefault?'#1e98ea':'#fff'}" class="typeBtn" v-for="(item,index) in yanType" @click="choose2(item,index)">{{item.name}}</span>
						</div>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">设备照片：</em>
						<el-upload
							action
						  class="avatar-uploader"
						  :http-request="rewriteUpload"
						  :show-file-list="false"
						  :on-success="handleAvatarSuccess"
						  :before-upload="beforeAvatarUpload">
						  <img v-if="imageKey" :src="imageKey" class="avatar">
						  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">商城链接：</em>
						<el-input v-model="imageLink" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">支持功能：</em>
						<el-switch
						  v-model="facility"
						  inactive-text="设备防丢">
						</el-switch>
						<el-switch
						  v-model="choice"
						  inactive-text="口味选择">
						</el-switch>
						<el-switch
						  v-model="facilityShow"
						  inactive-text="设备显示">
						</el-switch>
						<el-switch
						  v-model="eyeToEye"
						  inactive-text="心有灵犀">
						</el-switch>
						<el-switch
						  v-model="recording"
						  inactive-text="录音">
						</el-switch>
						<el-switch
						  v-model="childLock"
						  inactive-text="儿童锁">
						</el-switch>
						<el-switch
						  v-model="recreation"
						  inactive-text="娱乐">
						</el-switch>
					</li>
				</ul>
				<div class="footer">
					<el-button plain @click="concle">取消</el-button>
					<el-button plain @click="submit">确定</el-button>
				</div>
				
			</div>
		</div>
	</div>
</template>
 
<script>
	import service from '@/request/http.js'
	import {columAdd,getOSSUploadUrl,columType,columUpdate,columDetail} from '@/api/colum'
	export default {
		name: "columnAdd",
		components: {
			
		},
		data() {
			return {
				childLock:false,
				choice:false,
				facility:false,
				recording:false,
				recreation:false,
				eyeToEye:false,
				facilityShow:false,
				uploadUrl:'',// 上传图片链接
				fileKey:'',// 图片key
				downloadUrl:'',// 图片下载链接
				yanType:[],
				tips:'',//
				enter:{},
				imageLink:'',// 商城链接
				imageKey: '',  // 图片
				typeIds:'',  // 支持的烟型 用,号隔开
				model:'',// 设备型号
				onDate:'',// 上市日期
				bombName:'',// 烟弹类型
				options: [{
						value: 'kao',
						label: '烤烟型'
					},
					{
						value: 'you',
						label: '油烟型'
					},
				]
			};
		},
		created() {
			this.tips = this.$router.currentRoute.query.tips
		},
		mounted() {
			this.enter = JSON.parse(localStorage.getItem("enter"));
			this.init()
		},
		methods: {
			init(){
				const param = {
					  "pageIndex": 1,
					  "pageSize": 1000,
					  "isVisible":'y'
				}
				columType(param,this.enter.sessionId).then((res)=>{
					
					this.yanType = res.bussData;
					if(!this.tips){
						const param2 = {
							  id:this.$router.currentRoute.query.id
							}
						columDetail(param2,this.enter.sessionId).then((res)=>{
							console.log(res)
							
							this.bombName = res.bussData.bombName;
							this.fileKey = res.bussData.imageKey;
							this.imageKey = res.bussData.imageUrl;
							this.model = res.bussData.model;
							this.onDate = res.bussData.onDate;
							this.typeIds = res.bussData.typeIds;
							if(this.yanType.length>0 && this.typeIds){
								let typeIds = this.typeIds.split(',');
								this.yanType.forEach((item)=>{
									typeIds.forEach((item2)=>{
										if(item.id == item2){
											item.isChoose = 1;
										}
									})
								})
							}
							
						})
					}
					console.log(this.yanType)
				})
				
				
			},
			choose(item,index){  // 选择烟型
				if(this.yanType[index].isChoose){
					delete this.yanType[index].isChoose
				}else{
					this.yanType[index].isChoose = 1;
				}
				this.$forceUpdate()
			},
			choose2 (item,index) {
				this.yanType.forEach((item,index2) => {
					if(index2 == index){
						this.yanType[index2].isDefault = true
					}else{
						this.yanType[index2].isDefault = false
					}
				})
				this.$forceUpdate()
			},
			rewriteUpload(content) {  // 自定义请求头
				console.log(content)
			  service.put(this.uploadUrl, content.file, {
			    headers: {
			      'Content-Type': content.file.type,
			    }
			  }).then(() => {
			    this.imageKey = this.downloadUrl; //显示图片
			  })
			},
			handleAvatarSuccess(res, file) {
				console.log(res,file)
			},
			//上传前,一些装备工作
			beforeAvatarUpload(file) {
			  console.log(file)
			  const isLt2M = file.size / 1024 / 1024 < 2;
			  if (!isLt2M) {
			    this.$message.error('上传头像图片大小不能超过 2MB!');
			    return false;
			  }
			  
			  return new Promise((resolve, reject) => {
			    console.log(file.name.split('.')[1],file.type);
				getOSSUploadUrl(file.name.split('.')[1],file.type).then((res)=>{
					console.log(res)
					this.uploadUrl = res.bussData.uploadUrl
					this.fileKey = res.bussData.fileKey
					this.downloadUrl = res.bussData.downloadUrl
					resolve(res)
				})
			  })
			},
			concle () {
				this.$router.go(-1)
			},
			submit(){  // 提交
				if(!this.model){
					this.$message({
					  message: '请输入设备型号',
					  type: 'warning'
					});
					return
				}
				if(!this.bombName ){
					this.$message({
					  message: '请选择烟弹类型',
					  type: 'warning'
					});
					return
				}
				if(!this.onDate){
					this.$message({
					  message: '请选择上市日期',
					  type: 'warning'
					});
					return
				}
				if(!this.imageLink){
					this.$message({
					  message: '请选择填写商城链接',
					  type: 'warning'
					});
					return
				}
				let arr = this.yanType.filter((item)=>{
					return item.isChoose
				})
				let arr2 = this.yanType.filter((item)=>{
					return item.isDefault
				})
				console.log(arr,arr2)
				if(arr){
					arr = arr.map((item)=>{
						return item.id
					})
					this.typeIds = arr.join(',')
				}
				if(arr2 && arr2.length<=0){
					this.$message({
					  message: '请选择一个默认烟型',
					  type: 'warning'
					});
					return
				}
				console.log(this.typeIds)
				if(!this.typeIds){
					this.$message({
					  message: '请选择支持烟型',
					  type: 'warning'
					});
					return
				}
				if(!this.fileKey){
					this.$message({
					  message: '请上传图片',
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
			addName(){  // 新增
				const param = {
					  "bombName": this.bombName,
					  "imageKey": this.fileKey,
					  "model": this.model,
					  "onDate": this.onDate,
					  "typeIds": this.typeIds,
					  childLock:this.childLock,
					  imageLink:this.imageLink,
					  choice:this.choice,
					  facility:this.facility,
					  recording:this.recording,
					  recreation:this.recreation,
					  eyeToEye:this.eyeToEye,
					  facilityShow:this.facilityShow,
					}
				columAdd(param,this.enter.sessionId).then((res)=>{
					if(!res)return
					this.$router.push({path:'/column/column'})
					console.log(res)
				})
			},
			upDateName(){  // 编辑
				const param = {
					"id": this.$router.currentRoute.query.id,
					"bombName": this.bombName,
					"imageKey": this.fileKey,
					"model": this.model,
					"onDate": this.onDate,
					"typeIds": this.typeIds,
					imageLink:this.imageLink,
					childLock:this.childLock,
					choice:this.choice,
					facility:this.facility,
					recording:this.recording,
					recreation:this.recreation,
					eyeToEye:this.eyeToEye,
					facilityShow:this.facilityShow,
				}
				columUpdate(param,this.enter.sessionId).then((res)=>{
					console.log(res.bussData.uploadUrl)
					this.$message({
					  message: '设备更改成功',
					  type: 'success'
					});
					this.$router.push({path:'/column/column'})
				})
			}
		}
	};
</script>
<style lang="less">
	.columAdd{
		padding-bottom:50px;
		.wrap{
				// max-width: 500px;
				li{
					margin-top: 40px;
					em{
						margin-right: 30px;
					}
					.el-switch{
						margin-right: 20px;margin-top: 10px;
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
			// 图片样式
			.avatar-uploader .el-upload {
				border: 1px dashed #999;
				border-radius: 6px;
				cursor: pointer;
				position: relative;
				overflow: hidden;
			  }
		.avatar-uploader .el-upload:hover {
		  border-color: #409EFF;
		}
		.avatar-uploader-icon {
		  font-size: 28px;
		  color: #8c939d;
		  width: 178px;
		  height: 178px;
		  line-height: 178px;
		  text-align: center;
		}
		.avatar {
		  width: 178px;
		  height: 178px;
		  display: block;
		}
	}
	.el-input{
		width: 220px;
	}
</style>
