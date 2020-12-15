<template>
  <div>
    <div class="login_box">
      <h1>用户登录</h1>
      <h2>为了你的账号安全，请使用手机号登录</h2>
      <van-form @submit="onSubmit">
        <van-field
          v-model.trim="dataSearchForm.phone"
          name="用户名"
          label="用户名"
          placeholder="手机号、邮箱"
          :rules="[{ required: true, message: '请填写手机号或邮箱' }]"
        />
        <van-field
          v-model.trim="dataSearchForm.passWord"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit" @click="filterData">
            登录
          </van-button>
        </div>
      </van-form>
      <div class="box1">
        <div class="box2">
          <a href="#/mall_registered" class="box3">免费注册</a>
          <a href="#" style="padding-left: 4px">忘记密码</a>
        </div>
      </div>
    </div>
    <div class="foot_box">
      登录即代表同意
      <a href="#">《用户使用协议》</a>
    </div>
    <div class="plase"></div>
  </div>
</template>

<script>
import axios from "axios";
// import util from "@/util/util.js";

export default {
  data() {
    return {
      // username: "",
      // password: "",
      dataSearchForm: {},
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    //函数：{ajax获取登录状态函数}
    getList: async function () {
      let { data } = await axios({
        method: "post",
        url: "https://www.dmagic.cn/info/getCommonList",
        data: {
          findJson: this.findJson, //拼接查询参数
          pageIndex: 1,
          pageSize: 10,
          _systemId: "sys_chenbowen",
          _dataType: "user",
        },
      });

      let { list } = data;
      console.log(`list`, list);
      if (list.length > 0) {
        // findJson.phone == phone;
        alert("登录成功");
        localStorage.isLogin = 1;
        console.log(`this.dataSearchForm:`, this.dataSearchForm);
        this.$router.push({ path: "/mall_user" }); //编程式的导航：使用对象和path配合
        let info = {
          phone: this.dataSearchForm.phone,
          passWord: this.dataSearchForm.passWord,
        };
        let strInfo = JSON.stringify(info); //JSON对象转换成JSON字符串
        console.log(`strInfo:`, strInfo);
        localStorage.userInfo = strInfo;
      } else {
        alert("请输入正确的手机号或密码");
      }
      this.listData = list; //用来输出列表的数组
    },

    filterData: function () {
      this.getList(); //调用：{ajax获取登录状态函数}
    },
  },
  computed: {
    findJson: function () {
      let { dataSearchForm } = this;
      let findJson = { ...dataSearchForm };
      console.log(`dataSearchForm.phone`, dataSearchForm.phone);
      return findJson;
    },
  },
  created() {
    // alert(localStorage.isLogin);
    if (localStorage.isLogin != 1) {
      // alert("未登录");
    } else {
      //判断登录状态，如果已登录，则跳转到会员中心页
      // alert("已登录");
      this.$router.push({ path: "/mall_user" }); //跳转到登录页
    }
  },
};
</script>

<style scoped>
.login_box {
  width: 100%;
  padding: 40px;
}
.login_box h1 {
  padding: 20px 20px 20px 5px;
  font-size: 28px;
  font-weight: 400;
}
.login_box h2 {
  margin: 20px 20px 20px 5px;
  padding-left: 5px;
  color: #999;
  font-size: 16px;
  font-weight: 400;
}
.box1 {
  width: 100%;
  padding-top: 15px;
  position: relative;
}
.box2 {
  font-size: 14px;
  color: rgb(102, 102, 102);
  text-decoration: none;
  position: absolute;
  right: 0;
}
.box3 {
  border-right: 1px rgb(102, 102, 102) solid;
  padding: 0 4px;
}
.foot_box {
  text-align: center;
  font-size: 12px;
}
.plase {
  height: 60px;
}
</style>
