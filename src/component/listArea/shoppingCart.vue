<template>
  <div class="bottom_menu" id="bottom_menu">
    <div class="bottom_goodCard">
      <img class="bottom_goodCard_img" :src="getBottomImg()" alt />
      <article class="bottom_goodCard_box">
        <div class="bottom_menu_text">{{title}}</div>
        <div class="bottom_menu_text" style="color:red">￥{{price}}</div>
      </article>
    </div>
    <div class="divider"></div>
    <div>
      <div class="bottom_menu_text">净含量：</div>
      <div class="bottom_menu_text">重量：</div>
    </div>
    <div class="divider"></div>
    <div>
      <span class="bottom_menu_text">购买数量:</span>
      <span class="bottom_menu_input_number">
        <el-input-number
          size="mini"
          v-model="num"
          @change="handleChange"
          :min="1"
          :max="10"
          label="描述文字"
        ></el-input-number>
      </span>
    </div>
    <div style="  border: 1px black solid;">
      <van-goods-action>
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>


<script>
let $ = window.$;
let $bottom_menu = $("#bottom_menu");
console.log("$bottom_menu", $bottom_menu);
$bottom_menu.css("display", "none");
// import { Toast } from "vant";
export default {
  props: {
    title: {
      default: "暂无商品名称",
      type: String,
    },
    price: {
      default: "暂无商品价格",
      type: [Number, String], //又支持Number，又支持String类型的，可以用数组括起来
    },
    url: {
      default:
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3946756184,1966392333&fm=26&gp=0.jpg",
    },
  },
  data() {
    return {
      //   title1: this.title,
      //   price1: this.price,
      num: 1, //计数器
    };
  },
  methods: {
    getBottomImg() {
      return this.url;
    },
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style>
.bottom_menu {
  display: none;
  z-index: 100;
  position: fixed;
  bottom: 0;
  border: 1px black solid;
  background-color: #fff;
  width: 100%;
}

.bottom_menu_text {
  color: #606266;
  font-size: 14px;
  margin: 10px;
}

.bottom_goodCard {
  /* border: 1px black solid; */
  display: flex;
}

.bottom_goodCard_img {
  /* border: 1px black solid; */
  display: inline-block;    
  width: 98px;
  height: 80px;
}

.bottom_goodCard_box {
  flex: 1;
  /* border: 1px black solid; */
}

/* #region */
.van-goods-action {
  position: relative;
}
.van-goods-action-button {
  border-radius: 0;
}
/* #endregion */

/* #region 分割线*/
.divider {
  width: 100%;
  height: 1px;
  background-color: #ebedf0;
  margin: 5px 0;
}
/* #endregion */
</style>