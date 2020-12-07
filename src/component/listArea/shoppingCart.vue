<template>
  <!-- <van-popup
  v-model="show"
  closeable
  close-icon="close"
  :get-container="getContainer"
  position="bottom"
  :style="{ height: '30%' }"
  >-->
  <!-- 通过v-if来控制组件的显示和隐藏 -->
  <div>
    <div class="bottom_menu_hidebox" v-if="show_bottomMenu"></div>
    <div class="bottom_menu" v-if="show_bottomMenu">
      <!-- <div>show：{{show}}</div> -->
      <!-- <div>show_bottomMenu：{{show_bottomMenu}}</div> -->
      <div class="bottom_goodCard">
        <img class="bottom_goodCard_img" :src="getBottomImg()" alt />
        <article class="bottom_goodCard_box">
          <div class="bottom_menu_text1">
            {{title}}
            <span class="iconfont icon-guanbi" @click="closeBottomMenu()"></span>
          </div>
          <div class="bottom_menu_text" style="color:red">￥{{price}}</div>
        </article>
      </div>
      <div class="divider"></div>
      <div>
        <div class="bottom_menu_text2">净含量：</div>
        <div class="bottom_menu_text2">重量：</div>
      </div>
      <div class="divider"></div>
      <div>
        <span class="bottom_menu_text2">购买数量:</span>
        <span class="bottom_menu_input_number">
            <inputNumber countstart="1" addcount="1" bottom_number="1" width="100" height="30"></inputNumber>
          <!-- <el-input-number
            size="mini"
            v-model="num"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>-->
        </span>
      </div>
      <div>
        <van-goods-action>
          <van-goods-action-button type="warning" text="加入购物车" />
          <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
      </div>
    </div>
  </div>
  <!-- </van-popup> -->
</template>


<script>
import inputNumber from "./inputNumber.vue";
export default {
  components: {
    inputNumber,
  },
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
    show: null,
  },
  data() {
    return {
      //   title1: this.title,
      //   price1: this.price,
      num: 1, //计数器
      //   show: true,//底部弹窗
      //   TODO
      show_bottomMenu: this.show, //底部弹窗，show是变化的，要监测show的变化并且将相应的值及时赋给show_bottomMenu
    };
  },
  watch: {
    show: function () {
      this.show_bottomMenu = this.show;
    },
  },
  methods: {
    getBottomImg() {
      return this.url;
    },
    handleChange(value) {
      console.log(value);
    },
    //  getContainer() {//底部弹窗组件的显示
    //   return document.querySelector('.icon-tianjia');
    // },
    closeBottomMenu: function () {
      //关闭底部菜单
      this.show_bottomMenu = false;
      this.$emit("update:show", false);
      //原生的update事件，更新该组件内部定义的show的值，由于使用了sync，因此外部的showBottomMenu值会show的值进行同步
    },
  },
};
</script>

<style>
/* 遮罩部分 */
.bottom_menu_hidebox {
  position: fixed;
  /* display: none; */
  /* 需要设置left和top */
  /* left 属性规定元素的左边缘。该属性定义了定位元素左外边距边界与其包含块左边界之间的偏移。 */
  left: 0;
  top: 0%;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgba(204, 204, 204, 0.6);
}

.bottom_menu {
  /* display: none; */
  z-index: 100;
  position: fixed;
  bottom: 0;
  /* border: 1px black solid; */
  background-color: #fff;
  width: 100%;
}

.bottom_menu_text1 {
  color: #606266;
  font-size: 14px;
  margin: 10px;
}

.bottom_menu_text2 {
  color: #606266;
  font-size: 14px;
  margin: 20px 10px;
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

.bottom_menu_input_number{
    display: inline-block;
}

.icon-guanbi {
  float: right;
  font-size: 22px;
  cursor: pointer;
}

/* #region 加入购物车 和 立即购买 样式 */
.van-goods-action {
  margin-top: 10px;
  position: relative;
  height: 40px;
}
.van-goods-action-button {
  border-radius: 0;
  margin: 0%;
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