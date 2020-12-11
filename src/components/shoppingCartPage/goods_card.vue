<template>
  <div class="shoppingCartPage_goodsCard">
    <div class="shoppingCart-table-input">
      <!-- TODO 子复选框，当写入v-model的时候，该文本框就已经有了value属性，不需要在引用的界面进行定义。? -->
      <!-- WARN 注意是item.isSelected，之后使用强制更新的时候，也是对item对象的属性进行操作。 -->
      <!-- 需要使用change，使用click的话，值还没有传过来就已经发送了，则获取不到 item 的 isSelected 属性。这里也不需要发送事件 -->
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
    get_count_Number: function (countNumber) {//在按键的时候更改数值
      this.count = countNumber;
      console.log(" this.count", this.count);

      console.log("商品名称", this.item.title);
      let List = JSON.parse(localStorage.shoppingCartData); //获取localStorage里的数据
      List.forEach((d) => {
        if (d.id == this.item.id) d.number = this.count;
      });

      localStorage.shoppingCartData=JSON.stringify(List)
    },
    // #endregion

    // #region 显示计数器
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