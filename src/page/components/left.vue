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
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/banner">用户管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>设备管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/column/column">设备管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-comment"></i>
          <span>烟型管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/message/message">烟型管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>数据分析</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/user/shenheList">热力图</el-menu-item>
          <el-menu-item index="/user/danweiList">排行榜</el-menu-item>
          <el-menu-item index="/user/zhuanjiashenheList">时间表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span>管理员设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/meeting/meetingList">用户管理</el-menu-item>
					<el-menu-item index="/meeting/meetingAdd">角色管理</el-menu-item>
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
			 console.log(i)
      this.$router.push({
        path: i
      });
    },
  
      toNav(key){
				console.log(key)
      	switch(key){
      		
      		//首页管理==============================
      		case '/home/banner':
      		this.$router.push({
		        path: '/home/banner'
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
		        path: '/column/column'
		      });
      		break;
      		
      		//烟型管理==============================
      		case '/message/message':
      		this.$router.push({
		        path: '/message/message'
		      });
      		break;

      		//用户管理==============================
      		
      		case '/user/shenheList':
      		this.$router.push({
		        path: '/user/shenheList'
		      });
      		break;
      		case '/user/danweiList':
      		this.$router.push({
		        path: '/user/danweiList'
		      });
      		break;
      		case '/user/zhuanjiaList':
      		this.$router.push({
		        path: '/user/zhuanjiaList'
		      });
      		break;
      		case '/user/zhuanjiashenheList':
      		this.$router.push({
		        path: '/user/zhuanjiashenheList'
		      });
      		break;
      		case '/user/userList':
      		this.$router.push({
		        path: '/user/userList'
		      });
      		break;
      		
      		
      		//管理员设置==============================
      		case '/meeting/meetingList':
      		this.$router.push({
		        path: '/meeting/meetingList'
          });
          break;
          case '/meeting/meetingAdd':
      		this.$router.push({
		        path: '/meeting/meetingAdd'
		      });
      		break;
      		
      		
      	}
      }
  }
};
</script>
<style scoped>
	
</style>
