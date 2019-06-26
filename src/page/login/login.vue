<template>
	<div class="b-dedede auto r-3 white rel" style="width: 347px;height:345px;margin-top: 10%;">
		<div class="abs w-100 blue c-white loginafter" style="height: 45px;line-height: 45px; top: 30px;left: -15px; text-indent: 15px;">深圳市真空协会后台管理</div>
		<div class="p-lr-30" style="padding-top: 100px;">
			<el-input class="m-t-15" placeholder="请输入账号" v-model="username" clearable></el-input>
			<el-input class="m-t-15" placeholder="请输入账号" v-model="password" show-password></el-input>
			<el-button class="m-t-30 w-100" type="primary" @click="submit">登录</el-button>
		</div>
	</div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
    	username:'',
    	password:''
    };
  },
  created() {},
  mounted() {},
  methods: {
    toLink(i) {
      this.$router.push({
        path:i
      });
    },
    submit(){
    	if(!this.username || !this.password){
    		 this.$message({
	          message: '账号或密码不能为空！',
	          type: 'warning'
	        });
	        return
    	}
    	if(this.username != "admin" || this.password != "123456"){
    		 this.$message({
	          message: '账户明或密码有误！',
	          type: 'error'
	        });
	        return
    	}
    	this.toLink('../home/home')
    	 this.$message({
          message: '登录成功！',
          type: 'success'
        });
    }
  }
};
</script>
<style scoped>
.loginafter::after{content: "";position: absolute; left: 0; top: 100%; width: 0;height: 0;border-top: 16px solid #6a7a99;border-left: 16px solid transparent;}
</style>
