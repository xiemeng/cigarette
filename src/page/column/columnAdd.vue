<template>
	<div>
		<top></top>
		<left></left>
		<div class="main">
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<el-breadcrumb-item :to="{ path: '/column/column' }">三级栏目列表</el-breadcrumb-item>
					<el-breadcrumb-item>新增栏目</el-breadcrumb-item>
				</el-breadcrumb>
				
				<el-radio-group v-model="tabPosition" class="p-15">
			    <el-radio-button label="top">中文</el-radio-button>
			    <el-radio-button label="right">英文</el-radio-button>
			  </el-radio-group>

				<el-row :gutter="20" class="m-t-20">
					<el-col :span="10" :offset="2">

						<el-form ref="form" :model="form" label-width="120px" class="w-100 p-15">
							<el-form-item label="*三级栏目名称：">
								<el-input v-model="form.name"></el-input>
							</el-form-item>
							<el-form-item label="*所属一级栏目：">
								 <el-select v-model="form.options" placeholder="请选择">
								    <el-option
								      v-for="item in options"
								      :key="item.value"
								      :label="item.label"
								      :value="item.value">
								    </el-option>
								  </el-select>
							</el-form-item>
							<el-form-item label="*所属二级栏目：">
								 <el-select v-model="form.options" placeholder="请选择">
								    <el-option
								      v-for="item in options"
								      :key="item.value"
								      :label="item.label"
								      :value="item.value">
								    </el-option>
								  </el-select>
							</el-form-item>
							
							<el-form-item label="*上架状态：">
								 <el-select v-model="form.options" placeholder="请选择">
								    <el-option
								      v-for="item in options"
								      :key="item.value"
								      :label="item.label"
								      :value="item.value">
								    </el-option>
								  </el-select>
							</el-form-item>
							
							<el-form-item label="*栏目类型：">
								 <el-select v-model="form.options" placeholder="请选择">
								    <el-option
								      v-for="item in options"
								      :key="item.value"
								      :label="item.label"
								      :value="item.value">
								    </el-option>
								  </el-select>
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
		name: "columnAdd",
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
					options:'',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				tabPosition: 'top',
				
				options: [{
		          value: '选项1',
		          label: '黄金糕'
		        }, {
		          value: '选项2',
		          label: '双皮奶'
		        }, {
		          value: '选项3',
		          label: '蚵仔煎'
		        }, {
		          value: '选项4',
		          label: '龙须面'
		        }, {
		          value: '选项5',
		          label: '北京烤鸭'
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
			}
			
			
		}
	};
</script>
<style scoped>
</style>