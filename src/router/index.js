import Vue from 'vue'
import Router from 'vue-router'
import CssClear from '@/page/toll/cssClear'
import notFound from '@/page/default/404'
Vue.use(Router)

//首页管理
import home from '@/page/home/home'
import banner from '@/page/home/banner'
import video from '@/page/home/video'
import updataImg from '@/page/home/updataImg'
import updataVideo from '@/page/home/updataVideo'

//栏目管理
import column from '@/page/column/column'
import columnAdd from '@/page/column/columnAdd'

//留言管理
import message from '@/page/message/message'


//用户管理
import shenheList from '@/page/user/shenheList'
import danweiList from '@/page/user/danweiList'
import danweiX from '@/page/user/danweiX'
import zhuanjiaList from '@/page/user/zhuanjiaList'
import zhuanjiaX from '@/page/user/zhuanjiaX'
import zhuanjiashenheList from '@/page/user/zhuanjiashenheList'
import userList from '@/page/user/userList'

//会议管理
import meetingList from '@/page/meeting/meetingList'
import meetingAdd from '@/page/meeting/meetingAdd'


//内容管理
import contentList from '@/page/content/contentList'
import contentAdd from '@/page/content/contentAdd'


//组织架构
import organList from '@/page/organ/organList'
import organAdd from '@/page/organ/organAdd'


//权限管理
import roleList from '@/page/role/roleList'
import roleAdd from '@/page/role/roleAdd'
import numberList from '@/page/role/numberList'
import numberAdd from '@/page/role/numberAdd'



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
      component: home,
      meta: {
        title: '首页',
        index: 0
      }
    },
    {
      path: '/home/banner',
      name: 'banner',
      component: banner,
      meta: {
        title: '轮播图管理',
        index: 1
      }
    },
    {
      path: '/home/video',
      name: 'video',
      component: video,
      meta: {
        title: '视频配置',
        index: 1
      }
    },
    {
      path: '/home/updataImg',
      name: 'updataImg',
      component: updataImg,
      meta: {
        title: '上传图片',
        index: 1
      }
    },
    {
      path: '/home/updataVideo',
      name: 'updataVideo',
      component: updataVideo,
      meta: {
        title: '上传视频',
        index: 1
      }
    },
    
    
     // 栏目管理==============================
    
    {
      path: '/column/column',
      name: 'column',
      component: column,
      meta: {
        title: '栏目管理-三级栏目列表',
        index: 1
      }
    },
    {
      path: '/column/columnAdd',
      name: 'columnAdd',
      component: columnAdd,
      meta: {
        title: '三级栏目列表 - 新增/编辑',
        index: 1
      }
    },
    
     // 留言管理==============================
    
    
    {
      path: '/message/message',
      name: 'message',
      component: message,
      meta: {
        title: '留言列表',
        index: 1
      }
    },
    
     // 用户管理==============================
    {
      path: '/user/shenheList',
      name: 'shenheList',
      component: shenheList,
      meta: {
        title: '审核列表',
        index: 1
      }
    },
    {
      path: '/user/danweiList',
      name: 'danweiList',
      component: danweiList,
      meta: {
        title: '单位列表',
        index: 1
      }
    },
    {
      path: '/user/danweiX',
      name: 'danweiX',
      component: danweiX,
      meta: {
        title: '单位详情',
        index: 1
      }
    },
    {
      path: '/user/zhuanjiaList',
      name: 'zhuanjiaList',
      component: zhuanjiaList,
      meta: {
        title: '专家列表',
        index: 1
      }
    },
    {
      path: '/user/zhuanjiaX',
      name: 'zhuanjiaX',
      component: zhuanjiaX,
      meta: {
        title: '专家详情',
        index: 1
      }
    },
    {
      path: '/user/zhuanjiashenheList',
      name: 'zhuanjiashenheList',
      component: zhuanjiashenheList,
      meta: {
        title: '专家审核列表',
        index: 1
      }
    },
    {
      path: '/user/userList',
      name: 'userList',
      component: userList,
      meta: {
        title: '普通用户列表',
        index: 1
      }
    },
    
     // 会议管理==============================
    {
      path: '/meeting/meetingList',
      name: 'meetingList',
      component: meetingList,
      meta: {
        title: '会议列表',
        index: 1
      }
    },
    {
      path: '/meeting/meetingAdd',
      name: 'meetingAdd',
      component: meetingAdd,
      meta: {
        title: '新增会议',
        index: 1
      }
    },
    
     // 内容管理==============================
     {
      path: '/content/contentList',
      name: 'contentList',
      component: contentList,
      meta: {
        title: '内容列表',
        index: 1
      }
    },
    {
      path: '/content/contentAdd',
      name: 'contentAdd',
      component: contentAdd,
      meta: {
        title: '新增内容',
        index: 1
      }
    },
     
      // 组织架构==============================
     {
      path: '/organ/organList',
      name: 'organList',
      component: organList,
      meta: {
        title: '关于协会 - 组织架构',
        index: 1
      }
    },
    {
      path: '/organ/organAdd',
      name: 'organAdd',
      component: organAdd,
      meta: {
        title: '新增信息',
        index: 1
      }
    },
     
      // 权限管理==============================
    {
      path: '/role/roleList',
      name: 'roleList',
      component: roleList,
      meta: {
        title: '角色列表',
        index: 1
      }
    },
    {
      path: '/role/roleAdd',
      name: 'roleAdd',
      component: roleAdd,
      meta: {
        title: '新增角色',
        index: 1
      }
    },
    {
      path: '/role/numberList',
      name: 'numberList',
      component: numberList,
      meta: {
        title: '账号列表',
        index: 1
      }
    },
    {
      path: '/role/numberAdd',
      name: 'numberAdd',
      component: numberAdd,
      meta: {
        title: '新增账号',
        index: 1
      }
    }
    
     




  ]
})
