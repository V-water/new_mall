<template>
  <div class="customer_box">
    <!-- ## v-model ## -->
    <van-field class="text1" v-model="name" label="姓名" colon="colon" required="required" />
    <van-field class="text1" v-model.number="tel" label="电话" colon="colon" required="required" />
    <van-field v-model="area" label="地区" colon="colon" />
    <van-field v-model="address" label="详细地址" colon="colon" required="required" />
    <!-- <van-area title="标题" :area-list="areaList" value="110101" /> -->
    <div class="customer_buttton_box"><button class="customer_save_button" @click="register_account">保存并使用</button></div>
    <div class="customer_buttton_box"><button class="customer_delete_button">删除收货地址</button></div>
  </div>
</template>

<script>
import util from "@/util/util.js"
export default {
  props: {},
  data: function () {
    return {
      colon: true,//文本后面添加冒号
      required: true,//前面有星号
      name: null,
      tel: null,
      area:null,
      address:null,
    };
  },
  methods:{
      register_account:function(){
          util.getLocalStorageObj("userInfo")
      }
  }
};
</script>

<style>
</style>