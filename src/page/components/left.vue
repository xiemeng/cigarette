<template>
	<div class="c-white fix top-0 left-0 h-100 z-9 over-y-scorll scorll" style="width: 200px;background: #324157;">
		<div class="w-100 over-x-hide" style="margin-top: 70px;">
			<el-menu
      :default-active='url'
      class="el-menu-vertical-demo"
      style="border: 0;"
      @select="toNav"
      background-color="#324157"
      text-color="#fff"
      active-text-color="#409EFF">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/banner">轮播图管理</el-menu-item>
          <el-menu-item index="/home/video">视频配置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>栏目管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/column/column">三级栏目列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-comment"></i>
          <span>留言管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/message/message">留言列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/user/shenheList">审核列表</el-menu-item>
          <el-menu-item index="/user/danweiList">单位列表</el-menu-item>
          <el-menu-item index="/user/zhuanjiashenheList">专家审核列表</el-menu-item>
          <el-menu-item index="/user/zhuanjiaList">专家列表</el-menu-item>
          <el-menu-item index="/user/userList">普通用户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span>会议管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/meeting/meetingList">会议列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
		
		<el-submenu index="6">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/content/contentList">内容列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-s-management"></i>
          <span>组织架构</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/organ/organList">组织架构</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/role/numberList">账号列表</el-menu-item>
          <el-menu-item index="/role/roleList">角色账号</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      

    </el-menu>
			
			
		</div>
	</div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
    	url:''
    };
  },
  created() {
  	
  },
  mounted() {
  	let href = window.location.href;
  	this.url = href.split('/#')[1];
  },
  methods: {
  	 toLink(i) {
      this.$router.push({
        path: i
      });
    },
  
      toNav(key){
      	switch(key){
      		
      		//首页管理==============================
      		case '/home/banner':
      		this.$router.push({
		        path: '../home/banner'
		      });
      		break;
      		
      		case '/home/video':
      		this.$router.push({
		        path: '../home/video'
		      });
      		break;
      		
      		//栏目管理==============================
      		case '/column/column':
      		this.$router.push({
		        path: '../column/column'
		      });
      		break;
      		
      		//留言管理==============================
      		case '/message/message':
      		this.$router.push({
		        path: '../message/message'
		      });
      		break;

      		//用户管理==============================
      		
      		case '/user/shenheList':
      		this.$router.push({
		        path: '../user/shenheList'
		      });
      		break;
      		case '/user/danweiList':
      		this.$router.push({
		        path: '../user/danweiList'
		      });
      		break;
      		case '/user/zhuanjiaList':
      		this.$router.push({
		        path: '../user/zhuanjiaList'
		      });
      		break;
      		case '/user/zhuanjiashenheList':
      		this.$router.push({
		        path: '../user/zhuanjiashenheList'
		      });
      		break;
      		case '/user/userList':
      		this.$router.push({
		        path: '../user/userList'
		      });
      		break;
      		
      		
      		//会议管理==============================
      		case '/meeting/meetingList':
      		this.$router.push({
		        path: '../meeting/meetingList'
		      });
      		break;
      		
      		//内容管理==============================
      		case '/content/contentList':
      		this.$router.push({
		        path: '../content/contentList'
		      });
      		break;
      		
      		//组织架构==============================
      		case '/organ/organList':
      		this.$router.push({
		        path: '../organ/organList'
		      });
      		break;
      		
      		//权限管理==============================
      		case '/role/roleList':
      		this.$router.push({
		        path: '../role/roleList'
		      });
      		break;
      		case '/role/numberList':
      		this.$router.push({
		        path: '../role/numberList'
		      });
      		break;
      		
      		
      	}
      }
  }
};
</script>
<style scoped>
	
</style>
