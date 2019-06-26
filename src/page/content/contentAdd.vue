<template>
 <div>
	<top></top>
	<left></left>
	<div class="main">
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<el-breadcrumb-item :to="{ path: '/content/contentList' }">审核列表</el-breadcrumb-item>
					<el-breadcrumb-item>新增内容</el-breadcrumb-item>
				</el-breadcrumb>
				内容新增
			</div>
		</div>
 </div>
</template>

<script>
import top from '../components/top.vue'
import left from '../components/left.vue'
export default {
  name: "contentAdd",
  components:{
  	top,
  	left
  },
  data() {
    return {};
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
