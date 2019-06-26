//=============公共数据=============

const state = {
  // 路由动画
  transitionName:null,
  //loading
  loadingShow:false
}

const getters = {}

const actions = {}

const mutations = {
  setTransitionNamer(state, value) {
    state.transitionName = value;
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
