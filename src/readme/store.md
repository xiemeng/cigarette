<!-- 提交状态 -->

this.$store.commit("Public/getUser", 1);

<!-- 获取状态 -->

this.$store.state

<!-- 更新状态 -->

const state = {
aaa: "jxy",
}

const getters = {}

const actions = {}

const mutations = {
getUser(state, value) {
state.aaa = value;
}
}
