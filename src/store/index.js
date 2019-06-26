import Vue from 'vue'
import Vuex from 'vuex'
import Public from './modules/public'
import Login from './modules/login'
import Page1 from './modules/page1'
Vue.use(Vuex);
const state = {}
const actions = {}
const mutations = {}
const store = new Vuex.Store({
  modules: {
    Public,
    Login,
		Page1
  },
  state,
  actions,
  mutations
})
export default store;
