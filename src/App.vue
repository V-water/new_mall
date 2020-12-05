<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- 底部菜单 -->
    <div class="menu_bottom">
      <div class="menu_1">
        <div
          class="iconfont icon-shouye"
          style="font-size: 20px; color: rgb(228, 49, 48)"
        ></div>
        <router-link to="/">首页</router-link>
      </div>
      <div class="menu_1">
        <div
          class="iconfont icon-shangpin"
          style="font-size: 20px; color: gray"
        ></div>
        <div style="color: gray">所有商品</div>
      </div>
      <div class="menu_1">
        <div
          class="iconfont icon-gouwuche"
          style="font-size: 20px; color: gray"
        ></div>
        <div style="color: gray">购物车</div>
      </div>
      <div class="menu_1">
        <div
          class="iconfont icon-80gerenzhongxin"
          style="font-size: 20px; color: gray"
        ></div>
        <div style="color: gray">个人中心</div>
      </div>
    </div>

    <!-- 路由视图 -->
    <router-view class="router_view"></router-view>
  </div>
</template>

<script>
// import mall_main from "./components/mall_main";

export default {
  name: "App",
  components: {
    // mall_main,
  },
};
</script>

<style>
/* 底部菜单 */
.menu_bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 44.797px;
  z-index: 5;
  display: flex;
  background-color: #ffffff;
}

.menu_1 {
  flex: 1;
  text-align: center;
  font-size: 12px;
}

.head .router-link-exact-active {
  color: #e61717;
  font-weight: bold;
}
</style>
