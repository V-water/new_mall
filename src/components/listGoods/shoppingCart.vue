<template>
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
          <inputNumber
            countstart="1"
            addcount="1"
            bottom_number="1"
            width="100"
            height="30"
            @getCountNumber1="get_count_Number"
            @getCountNumber2="get_count_Number"
            @getCountNumber3="get_count_Number"
          ></inputNumber>
        </span>
      </div>
      <div class="shoppingCart-buy">
        <van-goods-action>
          <van-goods-action-button @click="addgodds_to_shoppingCart()" type="warning" text="加入购物车" />
          <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
      </div>
    </div>
  </div>
  <!-- </van-popup> -->
</template>


<script>
import inputNumber from "./inputNumber.vue";
let shoppingCartMethods = {};
// #region 获取计数器组件的值
// 数量减少，数量增多，数量不变
shoppingCartMethods.get_count_Number = function (countNumber) {
  this.count = countNumber;
};
// #endregion

// #region 将商品添加到购物车函数
shoppingCartMethods.addgodds_to_shoppingCart = function () {
  // 读取localStorage已有的商品信息
  let storage = JSON.parse(localStorage.shoppingCartData);
  // console.log("storage", storage);

  let addNeeded = {
    //需要添加的商品的信息
    title: this.title,
    price: this.price,
    detail: this.detail,
    id: this.id, //通过listGoods.vue页面，点击添加按钮传过来的值。然后通过id来输出对应的商品信息
    // 通过listGoods界面的底部菜单组件获取商品图片传入localStorage
    url: this.url,
    number: this.count,
  };
  console.log("addNeeded", addNeeded);

  let ifSame = storage.some((item) => item.id == this.id);
  if (ifSame == true) {
    // 找到相同商品在数组里的索引值
    let index = storage.findIndex((item) => item.id == this.id);
    let sameGoods = storage[index];
    // 更改该商品的属性值
    let sameGoods_number = sameGoods.number * 1 + this.count * 1;
    sameGoods.number = sameGoods_number;
    storage.splice(index,1,sameGoods);//直接就会影响数组。不需要赋值
    console.log('storage',storage);
  } else {
    console.log("没有相同的商品");
    //先将localStorage里已有的数据，和需要新加的数据整合起来。push是添加在数组后。unshift是添加在数组前。
    storage.push(addNeeded);
  }

  let str = JSON.stringify(storage);
  localStorage.shoppingCartData = str;
  alert("添加商品成功");
};
// #endregion

// #region 底部购物车组件获取图片函数
shoppingCartMethods.getBottomImg = function () {
  return this.url;
};
// #endregion

shoppingCartMethods.handleChange = function (value) {
  console.log(value);
};

// #region 关闭底部购物车组件函数
shoppingCartMethods.closeBottomMenu = function () {
  //关闭底部菜单
  this.show_bottomMenu = false;
  this.$emit("update:show", false);
  //原生的update事件，更新该组件内部定义的show的值，由于使用了sync，因此外部的showBottomMenu值会show的值进行同步
};
// #endregion

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
    detail: {
      default: "暂无商品详情",
      type: [Number, String], //又支持Number，又支持String类型的，可以用数组括起来
    },
    url: {
      default:
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3946756184,1966392333&fm=26&gp=0.jpg",
    },
    id: null,
    show: null,
  },
  data() {
    return {
      count: null, //当前计数器的值
      num: 1, //计数器
      //   show: true,//底部弹窗
      show_bottomMenu: this.show, //底部弹窗，show是变化的，要监测show的变化并且将相应的值及时赋给show_bottomMenu
    };
  },
  watch: {
    show: function () {
      this.show_bottomMenu = this.show;
    },
  },
  methods: { ...shoppingCartMethods },
};
</script>

<style>
/* #region 加入购物车部分的样式*/
.shoppingCart-buy {
  height: 40px;
}
/* #endregion */

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

.bottom_menu_input_number {
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