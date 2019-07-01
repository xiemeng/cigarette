import Vue from 'vue'
import Router from 'vue-router'
import CssClear from '@/page/toll/cssClear'
import notFound from '@/page/default/404'
import Layout from '@/page/components/index'
Vue.use(Router)

import login from '@/page/login/login'

export default new Router({
  // mode:'history',
  routes: [
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
    
    // 首页管理==============================
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
      name: 'home',
      component: Layout,
      meta: {
        title: '用户管理',
        index: 0
      },
      children: [
        {
          path: '/',
          name: 'Form',
          component: () => import('@/page/home/home'),
          meta: { title: '用户管理', icon: 'form' }
        }
      ]
    },
    {
      path: '/home/banner',
      name: 'banner',
      component: Layout,
      meta: {
        title: '用户管理',
        index: 1
      },
      children: [
        {
          path: '/',
          name: 'Form',
          component: () => import('@/page/home/banner'),
          meta: { title: '用户管理', icon: 'form' }
        }
      ]
    },
		{
		  path: '/home/userDetail',
		  name: 'userDetail',
		  component: Layout,
		  meta: {
		    title: '用户管理',
		    index: 1
		  },
		  children: [
		    {
		      path: '/',
		      name: 'Form',
		      component: () => import('@/page/home/userDetail'),
		      meta: { title: '用户详情', icon: 'form' }
		    }
		  ]
		},
     // s设备管理==============================
    
    {
      path: '/column/column',
      name: 'column',
      component: Layout,
      meta: {
        title: '设备管理',
        index: 1
      },
      children: [
        {
          path: '/',
          name: 'Form',
          component: () => import('@/page/column/column'),
          meta: { title: '设备管理', icon: 'form' }
        },
				{
				  path: 'add',
				  name: 'Form',
				  component: () => import('@/page/column/add'),
				  meta: { title: '设备管理', icon: 'form' }
				},
				{
				  path: 'detail',
				  name: 'Form',
				  component: () => import('@/page/column/detail'),
				  meta: { title: '设备管理', icon: 'form' }
				}
      ]
    },
    
     // 烟型管理==============================
    
    
    {
      path: '/message/message',
      name: 'message',
      component: Layout,
      meta: {
        title: '烟型管理',
        index: 1
      },
      children: [
        {
          path: '/',
          name: 'Form',
          component: () => import('@/page/message/message'),
          meta: { title: '烟型管理', icon: 'form' }
        }
      ]
    },
    
     // 数据分析==============================
    {
      path: '/user/shenheList',
      name: 'shenheList',
      component: Layout,
      meta: {
        title: '热力图',
        index: 1
      },
      children: [
        {
          path: '/',
          name: 'Form',
          component: () => import('@/page/user/shenheList'),
          meta: { title: '热力图', icon: 'form' }
        }
      ]
    },
    {
      path: '/user/danweiList',
      name: 'danweiList',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'Form',
          component: () => import('@/page/user/danweiList'),
          meta: { title: '排行榜', icon: 'form' }
        }
      ]
    },
    {
      path: '/user/zhuanjiashenheList',
      name: 'zhuanjiashenheList',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'Form',
          component: () => import('@/page/user/zhuanjiashenheList'),
          meta: { title: '时间表', icon: 'form' }
        }
      ]
    },
    
     //  管理员设置==============================
    {
      path: '/meeting/meetingList',
      name: 'meetingList',
      component: Layout,
      meta: {
        title: '用户管理',
        index: 1
      },
      children: [
        {
          path: '/',
          name: 'Form',
          component: () => import('@/page/meeting/meetingList'),
          meta: { title: '用户管理', icon: 'form' }
        },
        {
          path: 'addUser',
          name: 'Form',
          component: () => import('@/page/meeting/addUser'),
          meta: { title: '用户管理', icon: 'form' }
        }
      ]
    },
    {
      path: '/meeting/meetingAdd',
      name: 'meetingAdd',
      component: Layout,
      meta: {
        title: '角色管理',
        index: 1
      },
      children: [
        {
          path: '/',
          name: 'Form',
          component: () => import('@/page/meeting/meetingAdd'),
          meta: { title: '角色管理', icon: 'form' }
        },
        {
          path: 'addUser',
          name: 'Form',
          component: () => import('@/page/meeting/addUser'),
          meta: { title: '角色管理', icon: 'form' }
        }
      ]
    }
  ]
})
