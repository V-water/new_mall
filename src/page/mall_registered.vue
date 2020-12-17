<template>
  <div>
    <van-nav-bar
      title="会员注册"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="login_box">
      <h1>用户注册</h1>
      <h2>为了你的账号安全，请使用手机号注册</h2>
      <van-form @submit="onSubmit">
        <van-field
          v-model.trim="dataAddForm.nickName"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model.trim="dataAddForm.phone"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model.trim="dataAddForm.passWord"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model.trim="dataAddForm.confirmPassWord"
          name="确认密码"
          label="确认密码"
          placeholder="确认密码"
          :rules="[{ required: true, message: '确认密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit" @click="addData">
            注册
          </van-button>
        </div>
      </van-form>
      <div class="box1">
        <div class="box2">
          <a href="#/mall_login" class="box3">用户登录</a>
          <a href="#" style="padding-left: 4px">忘记密码</a>
        </div>
      </div>
    </div>
    <div class="plase"></div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";

export default {
  data() {
    return {
      dataSearchForm: {},//登录数据查询
      dataAddForm: {}, //注册添加用户数据
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    //函数：{ajax注册新增用户数据函数}
    addData: async function () {
      let { data } = await axios({// eslint-disable-line no-unused-vars
        method: "post",
        url: "https://www.dmagic.cn/info/commonAdd",
        data: {
          _data: this.dataAddFormSubmit,
          _systemId: "sys_chenbowen",
          _dataType: "user",
        },
      });
      alert("注册成功")
    },
  },
  computed: {
    dataAddFormSubmit: function () {
      let { phone, passWord, nickName } = this.dataAddForm;
      return {
        phone,
        passWord,
        nickName,
      };
    },
  },
  created() {
    // let passWord = this.dataAddForm.passWord
    // let confirmPassWord = this.dataAddForm.confirmPassWord
    // console.log(`passWord:`,passWord)
    // console.log(`confirmPassWord:`,confirmPassWord)
    // if (passWord == confirmPassWord) {
    //   // alert("未登录，跳转登录页");
    //   // this.$router.push({ path: "/mall_login" }); //跳转到登录页
    // } else {
    //   // alert("已登录");
    //   // this.getLocalStroage();
    // }
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
