<template>
  <div>
    <div class="order_table">
      <div class="order_head have_margin">
        <div class="order_user">
          <span class="iconfont icon-dizhi_huaban"></span> 收货人：
          <span class="deliver_methods_text">></span>
        </div>
        <div class="order_address">收货地址：</div>
      </div>
      <div class="order_line"></div>
      <div class="order_mabang have_margin">
        <span class="iconfont icon-mall"></span>
        <a href class="shoppingCart_mabang">码帮商城</a>
      </div>
      <div>
        <goodsCard v-for="item in storageList" :key="item._id" :item="item"></goodsCard>
      </div>
      <div class="deliver_methods have_margin">
        <span>配送方式</span>
        <span class="deliver_methods_text">同城配送 免运费 ></span>
      </div>
      <div class="divider"></div>
      <div class="have_margin">
        <div>买家留言</div>
        <textarea class="order_input" placeholder="建议留言前先与商家沟通"></textarea>
      </div>
      <div class="divider2"></div>
      <div class="order_wholePrice">
        <div class="have_margin">
          商品金额：
          <span class="deliver_methods_text">￥{{wholePrice}}</span>
        </div>
        <div class="have_margin">
          运费：
          <span class="deliver_methods_text">+￥{{freight}}</span>
        </div>
        <div class="divider"></div>
        <div class="deliver_methods_text order_price">合计:￥{{all_cost}}</div>
      </div>
      <div class="submit_order">
        <div class="submit_order_right">
          <span>合计: <span class="order_price">￥{{all_cost}}</span> </span>
          <span class="submit_order_text">提交订单</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import goodsCard from "../components/order/orderCard.vue";
import util from "@/util/util.js";

export default {
  components: { goodsCard },
  data: function () {
    return {
      storageList: null,
      freight: 0,
    };
  },
  methods: {
    getstorageList() {
      //得到localStorage里选中的商品
      let list = util.getLocalStorageObj("arrNeed");
      console.log("提交订单list", list);
      this.storageList = list;
      console.log(" this.storageList", this.storageList);
    },
  },
  created: function () {
    this.getstorageList();
  },
  computed: {
    wholePrice: function () {
      let price = JSON.parse(localStorage.price);
      let strPrice = price * 1;
      console.log("price", price);
      console.log("strPrice", strPrice);
      return strPrice;
    },
    all_cost: function () {
      let cost = this.freight * 1 + this.wholePrice * 1;
      return cost;
    },
  },
};
</script>

<style>
</style>