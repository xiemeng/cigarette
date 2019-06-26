<template>
 <div>
	<top></top>
	<left></left>
	<div class="main">
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<el-breadcrumb-item :to="{ path: '/user/zhuanjiaX' }">专家列表</el-breadcrumb-item>
					<el-breadcrumb-item>专家详情</el-breadcrumb-item>
				</el-breadcrumb>
				专家详情
			</div>
		</div>
 </div>
</template>

<script>
import top from '../components/top.vue'
import left from '../components/left.vue'
export default {
  name: "zhuanjiaX",
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
