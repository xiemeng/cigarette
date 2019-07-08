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
      <el-submenu :index="String(index+1)" v-for="(item,index) in routerList" :key="index">
        <template slot="title">
          <i :class="item.menuIcon"></i>
          <span>{{item.menuName}}</span>
        </template>
        <el-menu-item-group v-for="(item2,index) in item.chilrenMenu" :key="index">
          <el-menu-item :index="item2.href">{{item2.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <!-- <el-submenu index="2">
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
      </el-submenu> -->
    </el-menu>
			
			
		</div>
	</div>
</template>

<script>
const enter = JSON.parse(localStorage.getItem("enter"));
export default {
  name: "top",
  data() {
    return {
    	url:'',
			routerList:enter.menus
    };
  },
  created() {
  	this.routerList.forEach((item)=>{
  			switch(item.menuName) {
  			 case '用户管理':
						item.menuIcon = 'el-icon-s-home'
  			    item.chilrenMenu = [
  						{name:'用户管理',href:'/home/banner'}
  					]
  			    break;
  			 case '设备管理':
						item.menuIcon = 'el-icon-menu'
  			    item.chilrenMenu = [
  			    	{name:'设备管理',href:'/column/column'}
  			    ]
  			    break;
				case '烟型管理':
						item.menuIcon = 'el-icon-s-comment'
				   item.chilrenMenu = [
				   	{name:'烟型管理',href:'/message/message'}
				   ]
				   break;
				case '数据分析':
						item.menuIcon = 'el-icon-s-custom'
				   item.chilrenMenu = [
				   	{name:'热力图',href:'/user/shenheList'},
						{name:'排行榜',href:'/user/danweiList'},
						{name:'时间表',href:'/user/zhuanjiashenheList'}
				   ]
				   break;
				case '管理员设置':
						item.menuIcon = 'el-icon-s-order'
				   item.chilrenMenu = [
				   	{name:'用户管理',href:'/meeting/meetingList'},
						{name:'角色管理',href:'/meeting/meetingAdd'}
				   ]
				   break;
  			 default:
  			    console.log('执行了这里')
  			} 
  	})
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
					 console.log(key)
					this.$router.push({
						path: key
					});
      }
  }
};
</script>
<style scoped>
	
</style>
