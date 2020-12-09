<template>
  <div class="goods_card">
    <aside class="goods_card_aside">
    <a :href="`#/goodsDetail?id=${item._id}`">
      <img class="goods_card_aside_img" :src="getimg()" /></a>
    </aside>
    <article class="goods_card_article" >
      <div class="goods_card_article_title">{{item.title}}</div>
      <div class="goods_card_article_detail" v-html="item._detail"></div>
      <div class="goods_card_article_priceSell">
        <span class="goods_card_article_priceSell_price">￥{{item.priceSell}}</span>
        <!-- TODO listGoods界面的商品卡片goodsCard组件传来当前item信息 -->
        <span class="iconfont icon-tianjia" @click="$emit('show-bottom-menu',item)"></span>
      </div>
    </article>
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

</style>