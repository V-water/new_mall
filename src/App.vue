<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 路由视图 -->
    <router-view class="router_view"></router-view>

    <!-- 底部菜单 -->
    <div class="menu_bottom">
      <div class="menu_1">
        <router-link to="/mall_main">
          <div class="iconfont icon-shouye" style="font-size: 20px"></div>
          <div>首页</div>
        </router-link>
      </div>
      <div class="menu_1">
        <router-link to="/listGoods">
          <div class="iconfont icon-shangpin" style="font-size: 20px"></div>
          <div>所有商品</div>
        </router-link>
      </div>
      <div class="menu_1">
        <router-link to="/shoppingCartPage">
          <div class="iconfont icon-gouwuche" style="font-size: 20px"></div>
          <div>购物车</div>
        </router-link>
      </div>
      <div class="menu_1">
        <router-link to="">
          <div
            class="iconfont icon-80gerenzhongxin"
            style="font-size: 20px"
          ></div>
          <div>个人中心</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import mall_main from "./components/mall_main";
// let arr=[{_id:"5fcc9b2ba870243f0cdd9c1d",title:"phone"},{_id:"5fc668c14e8a7425a4b25d92",title:"computer"}]
// let strarr=JSON.stringify(arr)
// localStorage.shoppingCartData=strarr


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
  /* color: gray; */
}

.menu_1 .router-link-exact-active {
  color: #e61717;
  /* font-weight: bold; */
}
</style>
