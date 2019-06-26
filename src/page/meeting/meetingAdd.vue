<template>
 <div>
	<top></top>
	<left></left>
	<div class="main">
			<div class="w-100 h-100 p-15">
				<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
					<el-breadcrumb-item :to="{ path: '/meeting/meetingList' }">会议列表</el-breadcrumb-item>
					<el-breadcrumb-item>会议详情</el-breadcrumb-item>
				</el-breadcrumb>
				新增会议
			</div>
		</div>
 </div>
</template>

<script>
import top from '../components/top.vue'
import left from '../components/left.vue'
export default {
  name: "meetingAdd",
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
