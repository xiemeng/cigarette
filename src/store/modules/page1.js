//=============公共数据=============

const state = {
		fromName:null,
		fromPhone:null,
		fromSelect:null,
		fromTextart:null,
		
		fromCarNum1:null,
		fromCarNum2:null,
		fromCarNum3:null,
}

const getters = {}

const actions = {}

const mutations = {
  setfromName(state, value) {
    state.fromName = value;
    },
		setfromPhone(state, value) {
		  state.fromPhone = value;
		  },
			setfromSelect(state,value){
				state.fromSelect = value;
			},
			setfromTextart(state,value){
				state.fromTextart = value;
			},
			
			
			setfromCarNum1(state,value){
				state.fromCarNum1 = value;
			},
			setfromCarNum2(state,value){
				state.fromCarNum2 = value;
			},
			setfromCarNum3(state,value){
				state.fromCarNum3 = value;
			}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
