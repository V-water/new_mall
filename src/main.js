// import Vue from 'vue'
import App from './App.vue'


import VueRouter from 'vue-router'
let Vue=window.Vue
Vue.use(VueRouter)
import mall_main from "./page/mall_main.vue";

//创建 router 实例，然后传`router`配置
const router = new VueRouter({
  routes: [
    { path: '/', component: mall_main },
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,//注入路由
}).$mount('#app')
