<template>
  <div>
    <div class="bigg">
      <div class="box_head">码帮商城</div>
      <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img
              src="https://img.yzcdn.cn/upload_files/2018/12/11/Ft8u0o9RPHyxDwahv19iH8ixFWXM.jpg!large.jpg"
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="https://img.yzcdn.cn/upload_files/2018/12/11/FsfFgmOHGm6WZsnloJo22RImEJ6p.jpg!large.jpg"
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="https://img.yzcdn.cn/upload_files/2018/12/11/FvAWQmPIRX4Qr6baCOfvf1rTOHBj.jpg!large.jpg"
            />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="block">
        <div class="box_1">
          <mall_goods_card_2
            v-for="item in listData"
            :item="item"
            :key="item.id"
            @show-bottom-menu="showbottom_menu"
          ></mall_goods_card_2>
          <a href="#" class="lookAll">点击查看全部商品</a>
        </div>
      </div>
      <div class="plase"></div>
    </div>
    <!-- 引用底部菜单组件 -->
    <div class="mall_goods_bottomMenu">
      <shoppingCart
        :show.sync="showBottomMenu"
        :title="show_item.title"
        :price="show_item.priceSell"
        :id="show_item._id"
        :detail="show_item._detail"
        :number="show_item.number"
        :url="getbottomimage()"
      ></shoppingCart>
    </div>
  </div>
</template>

<script>
import shoppingCart from "@/components/listGoods/shoppingCart.vue";

let vueMethods = {};
let _ = window._;
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

// 下面两个方法在listGoods.vue里有重用
// #region 显示底部菜单
vueMethods.showbottom_menu = function (item) {
  this.showBottomMenu = true;
  this.show_item = item; //需要加入购物车的商品
};
// #endregion

// #region 获取底部菜单商品图片
vueMethods.getbottomimage = function () {
  // console.log("getbottomimage的show_item", this.show_item);
  let url = _.get(
    this.show_item,
    `album[0].url`,
    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3946756184,1966392333&fm=26&gp=0.jpg"
  );
  return url;
};
// #endregion

import axios from "axios";
import mall_goods_card_2 from "../components/mall_goods_card_2.vue";
export default {
  components: {
    //子组件的注册
    mall_goods_card_2,
    shoppingCart,
  },
  data: function () {
    return {
      listData: [], //数据列表
      dataType: "goods",
      showBottomMenu: false, //底部菜单的显示隐藏
      show_item: {}, //当前需要加入购物车的item
    };
  },
  methods: vueMethods, //***将vueMethods对象展开到此处
  created: function () {
    this.getList(); //调用：{ajax获取数据列表函数}
  },
};
</script>

<style scoped>
/* #region 首页的加入购物车样式 */
.mall_goods_bottomMenu {
  border: 1px black solid;
  position: fixed;
  height: 200px;
  width: 100%;
  z-index: 100;
}
/* #endregion */

.bigg {
  background: #f8f8f8;
  height: 1175px;
  width: 360px;
  margin: 0 auto;
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

.my-swipe .van-swipe-item {
  height: 128px;
  color: #fff;
  font-size: 20px;
  line-height: 128px;
  text-align: center;
}

.my-swipe img {
  width: 360px;
  height: 128px;
  /* 通过CSS3的object-fit调整图片的适应盒子规则 */
  object-fit: cover;
}

.block {
  display: flex;
  width: 360px;
  margin: 0 auto;
  background: #f8f8f8;
}
.box_1 {
  background: rgb(242, 242, 242);
}

@media screen and (min-width: 360px) {
  .bigg {
    background: #f8f8f8;
    /* height: 1175px; */
    width: 640px;
    margin: 0 auto;
  }
  .box_head {
    height: 160px;
    line-height: 160px;
    font-weight: 700;
    font-size: 71.1px;
  }
  .my-swipe .van-swipe-item {
    height: 250px;
    line-height: 250px;
  }
  .my-swipe img {
    width: 640px;
    height: 250px;
  }
  .block {
    display: flex;
    width: 640px;
    margin: 0 auto;
    background: #f8f8f8;
  }
  .box_1 {
    background: rgb(242, 242, 242);
    width: 640px;
  }
  .lookAll {
    width: 640px;
  }
}

/* @media screen and (max-width: 640px) {
  .block {
    display: flex;
    width: 380px;
    margin: 0 auto;
    background: #f8f8f8;
  }
} */

.plase {
  height: 45px;
}
.lookAll {
  display: block;
  width: 360px;
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
