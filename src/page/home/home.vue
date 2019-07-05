<template>
 <div>
		<div class="w-100 h-100 p-15">
			<el-breadcrumb separator="/" separator-class="el-icon-arrow-right" class="p-15 b-b-f0">
				<el-breadcrumb-item>用户管理</el-breadcrumb-item>
			</el-breadcrumb>
			<p class="p-15">
				登录成功，当前时间：{{new Date()}}
			</p>
	</div>
 </div>
</template>

<script>
import top from '../components/top.vue'
import left from '../components/left.vue'
export default {
  name: "home",
  data() {
    return {};
  },
    components:{
  	top,
  	left
  },
  created() {
		
  },
  mounted() {},
  methods: {
  	fatherMethod(){
  		alert(111)
  	},
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
