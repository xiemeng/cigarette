
//登录注册模块数据

const state = {
	direction: '', //登录信息
}
  
const getters = {
	direction: state => state.direction,
}
  
const actions = {}
  
const mutations = {
	updateDirectionStatus (state, payload) {  //页面切换效果
		console.log(state)
		state.direction = payload.direction
	}
}
  
export default {
    state,
    getters,
    actions,
    mutations
  }