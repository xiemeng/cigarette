<template>
  <div id="app">
		<div v-wechat-title="$route.meta.title"></div>
      <div class="box"><router-view></router-view></div>
  </div>
</template>
<script>

export default { 
  name: "App",
  data() {
    return {
      transitionName: null
    };
  },
  watch: {
    $route(to, from) {
     this.transitionName = "animated fadeInLeft routTo";
    }
  },
  created() {
    // 数据缓存-取出
    // localStorage.getItem("storeData") &&
    //   this.$store.replaceState(
    //     Object.assign(
    //       this.$store.state,
    //       JSON.parse(localStorage.getItem("storeData"))
    //     )
    //   );
  },
  mounted() {
    // 数据缓存-存入
    // window.addEventListener("beforeunload", () => {
    //   localStorage.setItem("storeData", JSON.stringify(this.$store.state));
    // });
  }
};
</script>

<style>
	#app{border-top: 1px solid transparent;}
</style>
