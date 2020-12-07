<template>
  <div class="goods_card">
    <aside class="goods_card_aside">
      <img class="goods_card_aside_img" :src="getimg()" />
    </aside>
    <article class="goods_card_article">
      <div class="goods_card_article_title">{{item.title}}</div>
      <div class="goods_card_article_detail" v-html="item._detail"></div>
      <div class="goods_card_article_priceSell">
        <span class="goods_card_article_priceSell_price">￥{{item.priceSell}}</span>
        <span class="iconfont icon-tianjia"  @click="$emit('addgoods',item)"></span>
      </div>
    </article>
  </div>
</template>

<script>
let _ = window._;
// import axios from "axios"
export default {
  props: {
    item: null,
    // listGood:[],
  },
  methods: {
    getimg: function () {
      let url = _.get(
        this.item,
        `album[0].url`,
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3946756184,1966392333&fm=26&gp=0.jpg"
      );
      // console.log("this.item", this.item);
      // console.log("url", url);
      return url;
    },
  },
};
</script>

<style>
.goods_card {
  display: flex;
  width: 486px;
  height: 120px;
  border: 1px red solid;
}

.goods_card_aside,
.goods_card_aside_img {
  border: 1px black solid;
  width: 145px;
  height: 100%;
}

.goods_card_artical {
  width: 292px;
  border: 1px black solid;
}

.goods_card_article_title {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 10px;
}

.goods_card_article_detail {
  max-height: 40px;
  font-size: 12px;
  color: #999;
  padding: 5px 10px;
}

.goods_card_article_priceSell {
  border: 1px black solid;
  width: 150px;
  color: red;
  padding: 0 0 0 10px;
  height: 30px;
}

.goods_card_article_priceSell_price {
  border: 1px black solid;
  display: inline-block;
  width: 110px;
  height: 100%;
}

.icon-tianjia {
  font-size: 24px;
  height: 100%;
  border: 1px black solid;
  display: inline-block;
  cursor: pointer;
}
</style>