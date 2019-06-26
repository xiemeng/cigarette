<template>
 <div class="template">
   <!-- 设置标题 -->
   <router-view v-wechat-title='$route.meta.title'></router-view>
   <!-- 路由跳转 -->
   <router-link to="{name:'index'}}">&&<router-link to='/index'>
   <!-- 路由传参 -->
   <router-link :to="{name:'index',params:{id:'xxx',name:'xxx'}}">
   <router-link :to="{path:'./index',query:{id:'xxx',name:'xxx'}}">

 </div>
</template>

<script>
import Title from '@/component/title'
import {getUser} from './../request/api.js'
export default {
  name: 'template',
  components:{Title},
  data () {return {message: 'cycle'}},
  computed:{  fullName: function () {return this.firstName + ' ' + this.lastName}  },
   watch: {
    obj: {
      handler(newName, oldName) {
         console.log('obj.a changed');
      },
      immediate: true
    }
    },
  beforeCreate: function() {
      console.group('------beforeCreate创建前状态------');
      console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
      console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
      console.log("%c%s", "color:red","message: " + this.message) 
    },
  created: function() {
      console.group('------created创建完毕状态------');
      console.log("%c%s", "color:red","el     : " + this.$el); //undefined
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
  beforeMount: function() {
      console.group('------beforeMount挂载前状态------');
      console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
    },
  mounted: function() {
      console.group('------mounted 挂载结束状态------');
      console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
      console.log(this.$el);    
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化 
    },
  beforeUpdate: function () {
      console.group('beforeUpdate 更新前状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);   
      console.log("%c%s", "color:red","data   : " + this.$data); 
      console.log("%c%s", "color:red","message: " + this.message); 
    },
  updated: function () {
      console.group('updated 更新完成状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el); 
      console.log("%c%s", "color:red","data   : " + this.$data); 
      console.log("%c%s", "color:red","message: " + this.message); 
    },
  beforeDestroy: function () {
      console.group('beforeDestroy 销毁前状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);    
      console.log("%c%s", "color:red","data   : " + this.$data); 
      console.log("%c%s", "color:red","message: " + this.message); 
    },
  destroyed: function () {
      console.group('destroyed 销毁完成状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);  
      console.log("%c%s", "color:red","data   : " + this.$data); 
      console.log("%c%s", "color:red","message: " + this.message)
    },
    methods:{

    /* 数据提交 */
        this.$store.commit("Public/getUser", 1)

    /* 路由跳转 */
        this.$router.push({path:'/home')}&&this.$router.push({name:'name')}
        this.$router.go(-1) && this.$router.back();

    /* 路由传参 */
        this.$router.push({name:'xxx',params:{aa:xx, bb: xx}}); 
        this.$router.push({path:'xxx',query:{aa:xx, bb: xx}}); 

    /* 路由取值 */
        this.$route.query.xx && this.$route.params.xx
        




    }
}
</script>
<style scoped>
</style>
