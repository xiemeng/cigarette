// 导入vue.js
import Vue from 'vue'
// 导入组件APP
import App from './app'

// 导入路由插件vue-router
import router from './router'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 移动端自适应方案flexible.js+px2rem-loader
// import 'lib-flexible'
import 'animate.css'
import './assets/css/pc.css'
import './assets/css/style.css'

// 组件title
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)


// 全局数据仓库
import store from './store/index'

// 全局cookie
// import {getCookie,setCookie,removeCookie} from './cookie/index'
// Vue.prototype.$getCookie = getCookie
// Vue.prototype.$setCookie= setCookie
// Vue.prototype.$removeCookie= removeCookie

import axios from 'axios'
Vue.prototype.$axios = axios


Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
