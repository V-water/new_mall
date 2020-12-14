<template>
  <div class="shoppingCartPage_goodsCard orderCard">
    <!-- 购物车页面的商品卡片 获取商品图片 -->
    <img class="shoppingCartPage_goodsCard_img" :src="item.url" />
    <div class="shoppingCartPage_goodsCard_information">
      <div>{{item.title}}</div>
      <div class="shoppingCartPage_goodsCard_detail" v-html="item.detail"></div>
      <div>
        <span class="shoppingCartPage_goodsCard_price">￥{{item.price}}</span>
        <span class="shoppingCartPage_goodsCard_number" style="border:none">x{{item.number}}</span>
      </div>
    </div>
    <!-- <div class="divider"></div> -->
  </div>
</template>

<script>
// let _ = window._;

export default {
  components: {
    // inputNumber,
  },
  data: function () {
    return {};
  },
  props: {
    item: null,
  },
};
</script>


<style>
</style>