import Vue from 'vue'
import Router from 'vue-router'
import CssClear from '@/page/toll/cssClear'
import notFound from '@/page/default/404'
import Layout from '@/page/components/index'
Vue.use(Router)

//用户管理
import home from '@/page/home/home'
import banner from '@/page/home/banner'

//设备管理
import column from '@/page/column/column'

//留言管理
import message from '@/page/message/message'


//用户管理
import shenheList from '@/page/user/shenheList'
import danweiList from '@/page/user/danweiList'
import zhuanjiashenheList from '@/page/user/zhuanjiashenheList'

//会议管理
import meetingList from '@/page/meeting/meetingList'
import meetingAdd from '@/page/meeting/meetingAdd'




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
      }
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
          meta: { title: 'Form', icon: 'form' }
        }
      ]
    },
     // s设备管理==============================
    
    {
      path: '/column/column',
      name: 'column',
      component: Layout,
      meta: {
        title: '栏目管理-三级栏目列表',
        index: 1
      },
      children: [
        {
          path: '/',
          name: 'Form',
          component: () => import('@/page/column/column'),
          meta: { title: 'Form', icon: 'form' }
        }
      ]
    },
    
     // 烟型管理==============================
    
    
    {
      path: '/message/message',
      name: 'message',
      component: Layout,
      meta: {
        title: '留言列表',
        index: 1
      },
      children: [
        {
          path: '/',
          name: 'Form',
          component: () => import('@/page/message/message'),
          meta: { title: 'Form', icon: 'form' }
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
          meta: { title: 'Form', icon: 'form' }
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
          component: () => import('@/page/user/danweiList')
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
          component: () => import('@/page/user/zhuanjiashenheList')
        }
      ]
    },
    
     // ==============================
    {
      path: '/meeting/meetingList',
      name: 'meetingList',
      component: Layout,
      meta: {
        title: '内容管理',
        index: 1
      },
      children: [
        {
          path: '/',
          name: 'Form',
          component: () => import('@/page/meeting/meetingList')
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
          component: () => import('@/page/meeting/meetingAdd')
        }
      ]
    }
  ]
})
