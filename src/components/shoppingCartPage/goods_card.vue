<template>
  <div class="shoppingCartPage_goodsCard">
    <div class="shoppingCart-table-input">
      <input class="shoppingCart_checkbox" type="checkbox" />
    </div>
    <img
      class="shoppingCartPage_goodsCard_img"
      :src="getimg()"
    />
    <div class="shoppingCartPage_goodsCard_information">
      <div>{{item.title}}</div>
      <div class="shoppingCartPage_goodsCard_detail">商品详情{{item.detail}}</div>
      <div>
        <span class="shoppingCartPage_goodsCard_price">￥{{item.price}}</span>
        <span class="shoppingCartPage_goodsCard_number">数量x1</span>
      </div>
    </div>
  </div>
</template>

<script>
let _ = window._;
export default {
  props: {
    item: null,
  },
  methods: {
    getimg: function () {
      let url = _.get(
        this.item,
        `album[0].url`,
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3946756184,1966392333&fm=26&gp=0.jpg"
      );
      return url;
    },
  },
};
</script>


<style>
/* #region 购物车页面的商品卡片 */
.shoppingCartPage_goodsCard {
  display: flex;
  border: 1px black solid;
  height: 100px;
  width: 500px;
}

.shoppingCart-table-input {
  /* border: 1px black solid; */
  padding: 0 5px;
  display: flex;
  align-items: center;
}

.shoppingCartPage_goodsCard_img {
  width: 100px;
  height: 100%;
}

.shoppingCartPage_goodsCard_information {
  /* border: 1px red solid; */
  padding: 5px 10px;
  flex: 1;
}

.shoppingCartPage_goodsCard_detail {
  margin-top: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #666;
}

.shoppingCartPage_goodsCard_price {
  font-size: 14px;
  color: #f44;
  height: 20px;
  line-height: 20px;
}

.shoppingCartPage_goodsCard_number {
  font-size: 14px;
  color: #666;
  height: 20px;
  line-height: 20px;
  position: absolute;
  right: 20px;
}
/* #endregion */
</style>