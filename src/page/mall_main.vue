<template>
  <div>
    <div class="bigg">
      <div class="box_head">码帮商城</div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item class="box_img">
          <img
            src="https://img.yzcdn.cn/upload_files/2018/12/11/Ft8u0o9RPHyxDwahv19iH8ixFWXM.jpg!large.jpg"
          />
        </van-swipe-item>
        <van-swipe-item class="box_img">
          <img
            src="https://img.yzcdn.cn/upload_files/2018/12/11/FsfFgmOHGm6WZsnloJo22RImEJ6p.jpg!large.jpg"
          />
        </van-swipe-item>
        <van-swipe-item class="box_img">
          <img
            src="https://img.yzcdn.cn/upload_files/2018/12/11/FvAWQmPIRX4Qr6baCOfvf1rTOHBj.jpg!large.jpg"
          />
        </van-swipe-item>
      </van-swipe>
      <div class="block">
        <div style="background: rgb(242, 242, 242)">
            <mall_goods_card
              v-for="item in listData"
              :item="item"
              :key="item.id"
            ></mall_goods_card>
          <a href="#" class="lookAll">点击查看全部商品</a>
        </div>
      </div>
      <div class="plase"></div>
    </div>
  </div>
</template>

<script>
let vueMethods = {};
//函数：{ajax获取数据列表函数}
vueMethods.getList = async function () {
  let { data } = await axios({
    method: "post",
    url: "https://www.dmagic.cn/info/getCommonList",
    data: {
      findJson: this.findJson, //拼接查询参数
      pageIndex: 1,
      pageSize: 10,
      _systemId: "sys_chenbowen",
      _dataType: this.dataType,
    },
  });
  let { list } = data;
  this.listData = list; //用来输出列表的数组
};

import axios from "axios";
import mall_goods_card from "../components/mall_goods_card.vue";
export default {
  components: {
    //子组件的注册
    mall_goods_card,
  },
  data: function () {
    return {
      listData: [], //数据列表
      dataType: "goods",
    };
  },
  methods: vueMethods, //***将vueMethods对象展开到此处
  created: function () {
    this.getList(); //调用：{ajax获取数据列表函数}
  },
};
</script>

<style scoped>
.bigg {
  background: #f8f8f8;
  height: 1175px;
  width: 100%;
}
.box_head {
  height: 90px;
  text-align: center;
  line-height: 90px;
  font-weight: 700;
  font-size: 40px;
  background-color: #fff;
  color: #000;
}

.box_img {
  width: 100vw;
  height: 135px;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 135px;
  text-align: center;
  background-color: #39a9ed;
}

.my-swipe img {
  width: 100%;
  height: 100%;
  /* 通过CSS3的object-fit调整图片的适应盒子规则 */
  object-fit: cover;
}

.block {
  display: flex;
  width: 380px;
  margin: 0 auto;
  background: #f8f8f8;
}

.plase {
  height: 45px;
}
.lookAll {
  display: block;
  width: 380px;
  height: 50px;
  background-color: #fff;
  clear: both;
  text-align: center;
  line-height: 50px;
  text-decoration: underline;
  margin-left: 0;
  color: #333333;
}
</style>