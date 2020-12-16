<template>
  <div>
    <div class="login_box">
      <div class="box_head">
        <div class="box_userImg">
          <img src="/img/head.png" />
        </div>
        <div class="box_userName">
          <h1>会员用户</h1>
          <h2>{{ user_data.phone }}</h2>
        </div>
      </div>
      <div class="box_menu">
        <div>全部订单</div>
        <div>设置</div>
        <button style="margin-top: 5px" @click="logout">退出登录</button>
      </div>
    </div>
    <div class="plase"></div>
  </div>
</template>

<script>
// import axios from "axios";
import util from "@/util/util.js";

export default {
  props: [],
  data() {
    return {
      user_data: {},
    };
  },
  methods: {
    getLocalStroage: function () {
      this.user_data = util.getLocalStorageObj("userInfo");
      // console.log(`item.phone:`, item.phone);
    },
    logout: async function () {
      //清空localStorage.isLogin 和localStorage.userInfo
      delete localStorage.isLogin;
      delete localStorage.userInfo;
      //  await util.timeout(500)
      this.$router.push({ path: "/mall_login" }); //跳转到登录页
    },
  },
  computed: {},
  created() {
    if (localStorage.isLogin != 1) {
      //判断登录状态，如果未登录，则跳转到登录页
      // alert("未登录，跳转登录页");
      this.$router.push({ path: "/mall_login" }); //跳转到登录页
    } else {
      // alert("已登录");
      this.getLocalStroage();
    }
  },
};
</script>

<style scoped>
.login_box {
  width: 360px;
  padding: 40px 0;
  margin: 0 auto;
}
.box_head {
  display: flex;
  padding: 10px 10px 10px 5px;
}
.box_userImg {
  width: 60px;
  height: 60px;
  border-radius: 10%;
  border: 4px solid #ddd;
  display: inline-block;
}
.box_userImg img {
  width: 100%;
  height: 100%;
  border-radius: 10%;
  display: inline-block;
}
.box_head h1 {
  font-size: 28px;
  font-weight: 400;
}
.box_menu div {
  margin-top: 5px;
}
.box_menu button {
  margin-top: 5px;
}
@media screen and (min-width: 360px) {
  .login_box {
    width: 640px;
    padding: 71.1px 0;
    margin: 0 auto;
  }
  .box_head {
    display: flex;
    padding: 17.77px 17.77px 17.77px 8.88px;
  }
  .box_userImg {
    width: 106.66px;
    height: 106.66px;
    border-radius: 10%;
    border: 7.11px solid #ddd;
    display: inline-block;
  }
  .box_head h1 {
    font-size: 49.77px;
    font-weight: 400;
  }
  .box_head h2 {
    font-size: 42.66px;
  }
  .box_menu div {
    font-size: 28.44px;
    margin-top: 8.88px;
  }
  .box_menu button {
    font-size: 28.44px;
    margin-top: 8.88px;
  }
}

.plase {
  height: 60px;
}
</style>
