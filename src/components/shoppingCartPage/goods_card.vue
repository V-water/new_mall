<template>
  <div class="shoppingCartPage_goodsCard">
    <div class="shoppingCart-table-input">
      <!-- 需要使用change，使用click的话，值还没有传过来就已经发送了，则获取不到 item 的 isSelected 属性。这里也不需要发送事件 -->
      <div>{{item.isSelected}}</div>
      <!-- 直接使用props里定义的isSelected，相应的item里没有属性 -->
      <input
        class="shoppingCart_checkbox"
        type="checkbox"
        v-model="item.isSelected"
        @change="$emit('getprice',item)"
      />
    </div>
    <!-- 购物车页面的商品卡片 获取商品图片 -->
    <img class="shoppingCartPage_goodsCard_img" :src="item.url" />
    <div class="shoppingCartPage_goodsCard_information">
      <div>{{item.title}}</div>
      <div class="shoppingCartPage_goodsCard_detail" v-html="item.detail"></div>
      <div>
        <span class="shoppingCartPage_goodsCard_price">￥{{item.price}}</span>
        <span
          class="shoppingCartPage_goodsCard_number"
          style="padding:0 10px"
          v-if="show_itemNumber"
          @click="change_number()"
        >x{{item.number}}</span>
        <!-- 计数器组件 -->
        <span class="shoppingCartPage_goodsCard_number" v-if="show_inputNumber">
          <!-- <div>{{item.number}}</div> -->
          <!-- 使用v-model对对象的实行进行赋值，当对象有该属性时，是更改其属性值，否则是添加该属性 -->
          <inputNumber v-model="item.number" width="100" height="30" minimum="1"></inputNumber>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
let _ = window._;
import inputNumber from "../listGoods/inputNumber.vue";

export default {
  components: {
    inputNumber,
  },
  data: function () {
    return {
      isSelected: null,
      show_itemNumber: true,
      show_inputNumber: false,
      count: null, //计数器的值
    };
  },
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

    // #region 获取计数器组件的值。更改相应商品的值
    // 数量减少，数量增多，数量不变
    get_count_Number: function (countNumber) {
      //在按键的时候更改数值
      this.count = countNumber;

      let List = JSON.parse(localStorage.shoppingCartData); //获取localStorage里的数据
      if (List == []) return;
      List.forEach((d) => {
        if (d.id == this.item.id) {
          // this.item.isSelected=true
          d.number = this.count; //更改当前商品的number值
        }
      });
      // localStorage.arrNeed=JSON.stringify(arr)
      console.log("点击计数器时的item", this.item);
      console.log("good_card.vue里按计数器时的List", List); //当前List里面没有isSelected属性
      localStorage.shoppingCartData = JSON.stringify(List);
    },
    // #endregion

    // TODO
    // #region 显示计数器。
    change_number: function () {
      this.show_itemNumber = false;
      this.show_inputNumber = true;
    },
    // #endregion
  },
};
</script>


<style>
</style>