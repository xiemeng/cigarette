import Vue from 'vue'
import Router from 'vue-router'
import CssClear from '@/page/toll/cssClear'
import notFound from '@/page/default/404'
import Layout from '@/page/components/index'
Vue.use(Router)

import login from '@/page/login/login'
const enter = JSON.parse(localStorage.getItem("enter"));
const banner1 = {
      path: '/home/banner',
      // name: 'banner',
      component: Layout,
      meta: {
        title: '用户管理',
        index: 1
      },
      children: [
        {
          path: '/',
          name: 'homeNanner',
          component: () => import('@/page/home/banner'),
          meta: { title: '用户管理', icon: 'form' }
        }
      ]
    }
const banner2 = {
		  path: '/home/userDetail',
		  // name: 'userDetail',
		  component: Layout,
		  meta: {
		    title: '用户管理',
		    index: 1
		  },
		  children: [
		    {
		      path: '/',
		      name: 'userDetail',
		      component: () => import('@/page/home/userDetail'),
		      meta: { title: '用户详情', icon: 'form' }
		    }
		  ]
		}
const column = {
      path: '/column/column',
      // name: 'column',
      component: Layout,
      meta: {
        title: '设备管理',
        index: 1
      },
      children: [
        {
          path: '/',
          name: 'columnIndex',
          component: () => import('@/page/column/column'),
          meta: { title: '设备管理', icon: 'form' }
        },
				{
				  path: 'add',
				  name: 'columnAdd',
				  component: () => import('@/page/column/add'),
				  meta: { title: '设备管理', icon: 'form' }
				},
				{
				  path: 'detail',
				  name: 'columnDetail',
				  component: () => import('@/page/column/detail'),
				  meta: { title: '设备管理', icon: 'form' }
				}
      ]
    }
const message = {
      path: '/message/message',
      // name: 'message',
      component: Layout,
      meta: {
        title: '烟型管理',
        index: 1
      },
      children: [
        {
          path: '/',
          name: 'messageIndex',
          component: () => import('@/page/message/message'),
          meta: { title: '烟型管理', icon: 'form' }
        }
      ]
    }
const user = {
      path: '/user/shenheList',
      // name: 'shenheList',
      component: Layout,
      meta: {
        title: '热力图',
        index: 1
      },
      children: [
        {
          path: '/',
          name: 'userList',
          component: () => import('@/page/user/shenheList'),
          meta: { title: '热力图', icon: 'form' }
        }
      ]
    }
const user2 = {
      path: '/user/danweiList',
      // name: 'danweiList',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'danweiList',
          component: () => import('@/page/user/danweiList'),
          meta: { title: '排行榜', icon: 'form' }
        },
				{
				  path: 'detail',
				  name: 'danDetail',
				  component: () => import('@/page/user/detail'),
				  meta: { title: '排行榜', icon: 'form' }
				}
      ]
    }
const user3 = {
      path: '/user/zhuanjiashenheList',
      // name: 'zhuanjiashenheList',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'zhuanjiashenheList',
          component: () => import('@/page/user/zhuanjiashenheList'),
          meta: { title: '时间表', icon: 'form' }
        }
      ]
    }
const meeting = {
      path: '/meeting/meetingList',
      // name: 'meetingList',
      component: Layout,
      meta: {
        title: '用户管理',
        index: 1
      },
      children: [
        {
          path: '/',
          name: 'meetingList',
          component: () => import('@/page/meeting/meetingList'),
          meta: { title: '用户管理', icon: 'form' }
        },
        {
          path: 'addUser',
          name: 'meetingAddUser',
          component: () => import('@/page/meeting/addUser'),
          meta: { title: '用户管理', icon: 'form' }
        }
      ]
    }
const meeting2 = {
      path: '/meeting/meetingAdd',
      // name: 'meetingAdd',
      component: Layout,
      meta: {
        title: '角色管理',
        index: 1
      },
      children: [
        {
          path: '/',
          name: 'meetingAdd',
          component: () => import('@/page/meeting/meetingAdd'),
          meta: { title: '角色管理', icon: 'form' }
        },
        {
          path: 'addList',
          name: 'meetingAdd2',
          component: () => import('@/page/meeting/addList'),
          meta: { title: '角色管理', icon: 'form' }
        }
      ]
    }
const roterList = [
    // 缺省==============================
    {
      path: '*',
      name: 'notFound',
      component: notFound,
      meta: {
        title: '404',
        index: 5,
        animation: 'rotateIn'
      }
    },
    {
      path: '/toll/cssClear',
      name: 'CssClear',
      component: CssClear,
      meta: {
        title: 'css工具',
        index: 1
      }
    },
    // 登录注册==============================
    {
      path: '/',
      name: 'login',
      component: login,
      meta: {
        title: '登录',
        index: 0
      }
    },
    {
      path: '/home/home',
      // name: 'home',
      component: Layout,
      meta: {
        title: '用户管理',
        index: 0
      },
      children: [
        {
          path: '/',
          name: 'homeIndex',
          component: () => import('@/page/home/home'),
          meta: { title: '用户管理', icon: 'form' }
        }
      ]
    },
		 // 首页管理==============================	
     // s设备管理==============================
     // 烟型管理==============================  
     // 数据分析==============================
     //  管理员设置============================== 
  ]
console.log(enter.menus);
for(let i = 0;i<enter.menus.length;i++){
	switch(enter.menus[i].menuName) {
     case '用户管理':
        roterList.push(banner1)
				roterList.push(banner2)
        break;
     case '用户管理2':
        console.log('执行了这里')
        break;
     default:
        console.log('执行了这里')
	} 
}
export default new Router({
  routes: roterList
})

