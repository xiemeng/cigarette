<template>
	<header class="blue c-white fix top-0 left-0 w-100 z-99" style="height: 56px;">
		<div class="left p-t-15 p-l-30">冰棍科技</div>
		<div class="right p-t-15 p-r-30">
			 <el-dropdown @command="handleCommand">
		      <span class="el-dropdown-link c-white">
		        <i class="el-icon-user-solid"></i>{{loginName}}<i class="el-icon-arrow-down el-icon--right"></i>
		      </span>
		      <el-dropdown-menu slot="dropdown">
		        <el-dropdown-item icon="el-icon-switch-button" command="a">注销账号</el-dropdown-item>
		      </el-dropdown-menu>
		    </el-dropdown>
		</div>
	</header>
</template>

<script>
export default {
  name: "top",
  data() {
    return {};
  },
  created() {},
  mounted() {},
	computed:{
		loginName(){
			const enter = JSON.parse(localStorage.getItem("enter"));
			return enter.userName;
		}
	},
  methods: {
  	  handleCommand(command) {
        if(command == 'a'){
					localStorage.removeItem("enter");
        	this.toLink('/')
        }
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
