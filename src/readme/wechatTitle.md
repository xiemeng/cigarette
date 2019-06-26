<!-- 依赖说明 -->



<!-- vue-wechat-title安装 -->
npm install vue-wechat-title --save

<!-- 参数配置 -->
meta: {value: 'name'}

<!-- 自定义title -->
<router-view v-wechat-title='$route.meta.title'></router-view>

<!-- 自定义ico -->
<div v-wechat-title="$route.meta.title" img-set="/static/logo.png"></div>