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
						<el-input v-model="onDate" placeholder="请输入"></el-input>
					</li>
					<li class="flex">
						<em class="nowrap" style="line-height: 40px;">支持烟型：</em>
						<div>
							<span :style="{background:item.isChoose?'#fff':'#bbb'}" class="typeBtn" v-for="(item,index) in yanType" @click="choose(item,index)">{{item.name}}</span>
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
	import {columAdd,getOSSUploadUrl,columType} from '@/api/colum'
	export default {
		name: "columnAdd",
		components: {
			
		},
		data() {
			return {
				uploadUrl:'',// 上传图片链接
				fileKey:'',// 图片key
				downloadUrl:'',// 图片下载链接
				yanType:[],
				enter:{},
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
		created() {},
		mounted() {
			this.enter = JSON.parse(localStorage.getItem("enter"));
			this.init()
		},
		methods: {
			init(){
				const param = {
					  "pageIndex": 1,
					  "pageSize": 1000,
				}
				columType(param,this.enter.sessionId).then((res)=>{
					console.log(res)
					this.yanType = res.bussData;
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
				// this.imageKey = URL.createObjectURL(file.raw);
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
			submit(){  // 提交
				const param = {
					  "bombName": "kao",
					  "imageKey": "图片Key",
					  "model": "我是一条广告",
					  "onDate": "2019-10-11",
					  "typeIds": "string"
					}
				columAdd(param,this.enter.sessionId).then((res)=>{
					console.log(res)
				})
			}
		}
	};
</script>
<style lang="less">
	.columAdd{
		padding-bottom:50px;
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
	
</style>
