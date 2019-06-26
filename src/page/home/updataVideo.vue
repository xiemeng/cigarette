<template>
	<div>
		<top></top>
		<left></left>
		<div class="main">
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<el-breadcrumb-item :to="{ path: '/home/video' }">视频配置</el-breadcrumb-item>
					<el-breadcrumb-item>新增/编辑视频</el-breadcrumb-item>
				</el-breadcrumb>

				<el-row :gutter="20" class="m-t-20">
					<el-col :span="10" :offset="2">

						<el-form ref="form" :model="form" label-width="100px" class="w-100 p-15">
							<el-form-item label="*视频缩略图：">
								<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
									<img v-if="imageUrl" :src="imageUrl" class="avatar b-f0">
									<i v-else class="el-icon-plus avatar-uploader-icon"></i>
								</el-upload>
							</el-form-item>
							<el-form-item label="描述：">
								<el-input type="textarea" v-model="form.desc"></el-input>
							</el-form-item>
							<el-form-item label="*视频：">
								<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList">
									<el-button size="small" type="primary">点击上传</el-button>
									<!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
								</el-upload>
							</el-form-item>
							<el-form-item label="*视频地址：">
								<el-input v-model="form.name"></el-input>
							</el-form-item>

							<el-form-item>
								<el-button type="primary">保存</el-button>
								<el-button>取消</el-button>
							</el-form-item>
						</el-form>

					</el-col>
				</el-row>

			</div>
		</div>
	</div>
</template>

<script>
	import top from '../components/top.vue'
	import left from '../components/left.vue'
	export default {
		name: "undataVideo",
		components: {
			top,
			left
		},
		data() {
			return {
				//表单数据
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				//上传缩略图
				imageUrl: '',
				//上传文件
				fileList: [{
					name: 'food.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}, {
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}]
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
			
			//上传缩略图
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if(!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if(!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			
			//上传文件
			 handleChange(file, fileList) {
		        this.fileList = fileList.slice(-3);
		      }
		}
	};
</script>
<style scoped>
	.avatar-uploader-icon {
		font-size: 28px;
		color: #999;
		width: 100px;
		height: 100px;
		line-height: 100px;
		text-align: center;
		border: 1px solid #999;
		border-radius: 3px;
	}
	
	.avatar {
		width: 100px;
		height: 100px;
		display: block;
	}
</style>