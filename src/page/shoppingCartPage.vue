<template>
  <div class="shoppingCartPage_box">
    <div class="wrap_table" v-if="show_wrap_table">
      <table class="shoppingCartPage_table">
        <tr>
          <div class="shoppingCart_table_head">
            <div class="shoppingCart-table-input">
              <!-- TODO 父复选框 -->
              <input
                class="shoppingCart_checkbox"
                type="checkbox"
                v-model="isAllSelected"
                @change="selectAll(isAllSelected)"
              />
            </div>
            <div>
              <span class="iconfont icon-mall"></span>
              <a href class="shoppingCart_mabang">码帮商城</a>
              <span
                class="shoppingCart_table_edit"
                v-if="edit_text"
                @click="edit_text=false;complete_text=true;show_delete_button=true"
              >编辑</span>
              <span
                class="shoppingCart_table_edit"
                v-if="complete_text"
                @click="edit_text=true;complete_text=false;show_delete_button=false"
              >完成</span>
            </div>
          </div>
        </tr>
        <tbody id>
          <!-- TODO 引用子复选框 -->
          <tr is="goods_card" v-for="item in storageList" :key="item._id" :item="item"></tr>
        </tbody>
      </table>
    </div>
    <div class="check">
      <div>
        <input
          class="shoppingCart_checkbox"
          type="checkbox"
          v-model="isAllSelected"
          @change="selectAll(isAllSelected)"
        />
      </div>
      <div>全选</div>
      <div class="cost">
        <span>合计：￥{{priceAll}}</span>
        <br />
        <span style="color:gray">运费</span>
      </div>
      <div>
        <!-- 当需要判断的时候就使用route.push来实现跳转，可以设置跳转的条件 -->
        <a
          class="check_text"
          @click="swtich_page"
          :class="{cant_check:goods_number==0}"
        >结算({{goods_number}})</a>
      </div>
    </div>
    <!-- 删除栏，当点击编辑的时候就会显示 -->
    <div class="check" style="z-index:150" v-if="show_delete_button">
      <div>
        <input
          class="shoppingCart_checkbox"
          type="checkbox"
          v-model="isAllSelected"
          @change="selectAll(isAllSelected)"
        />
      </div>
      <div>全选</div>
      <div class="check_text" @click="delete_selected_goods()">删除</div>
    </div>
    <div v-if="go_to_shopping" class="go_to_shopping">
      <div>购物车快饿瘪了</div>
      <div>
        <a href="#/mall_main" class="go_to_shopping_button">去逛逛</a>
      </div>
    </div>
  </div>
</template>

<script>
let shoppingCartPageMethods = {};
// import axios from "axios";
import goods_card from "../components/shoppingCartPage/goods_card.vue";
import NP from "number-precision";
import util from "@/util/util.js";

// #region
shoppingCartPageMethods.swtich_page = function () {
  //结算的时候实现的跳转
  if (this.goods_number == 0) {
    console.log("没有商品，无法结算");
  } else {
    this.$router.push({ path: "/order" });
  }
};
// #endregion

// #region 获取localStorage里的商品信息
shoppingCartPageMethods.getStroageList = function () {
  this.storageList = util.getLocalStorageObj("shoppingCartData");
  console.log("获取localStorage里的商品信息storageList", this.storageList);
  if (this.storageList.length == 0) {
    (this.show_wrap_table = false), (this.go_to_shopping = true);
  } else {
    (this.show_wrap_table = true), (this.go_to_shopping = false);
  }
};
// #endregion

// #region 复选框的全选
shoppingCartPageMethods.selectAll = function () {
  this.storageList.forEach((item) => {
    this.$set(item, "isSelected", this.isAllSelected);
  });
};
// #endregion

// #region 删除所选商品
shoppingCartPageMethods.delete_selected_goods = function () {
  this.storageList.forEach((d, index) => {
    if (d.isSelected == true) {
      this.storageList.splice(index, 1); //删除所选商品
    }
  });
  if (this.storageList) {
    util.setLocalStorageObj("shoppingCartData", this.storageList);
  } //存储到localStorage里
};
// #endregion

export default {
  components: {
    goods_card,
  },
  data: function () {
    return {
      show_wrap_table: true,
      id: null,
      storageList: null,
      isAllSelected: false,
      edit_text: true,
      complete_text: false,
      show_delete_button: false,
      go_to_shopping: true,
    };
  },
  computed: {
    //当需要用到计算的时候，就使用computed计算属性
    // #region 总价计算
    priceAll: function () {
      let arrNeed = this.storageList.filter((d) => d.isSelected == true);
      util.setLocalStorageObj("arrNeed", arrNeed);

      let price = 0; //每重新遍历一次数组，都需要将之前的价格情空
      arrNeed.forEach((d) => {
        price += d.price * d.number; //每个商品的价格还要乘以每个商品的数量
      });
      let npPrice = NP.strip(price);
      util.setLocalStorageObj("price", npPrice);
      return npPrice;
    },
    // #endregion

    // #region 总数量计算
    goods_number: function () {
      //选中的商品的数量
      let arrNeed = this.storageList.filter((d) => d.isSelected == true);

      let number = 0; //每重新遍历一次数组，都需要将之前的数量情空
      arrNeed.forEach((d) => {
        number += d.number;
      });
      return NP.strip(number);
    },
    // #endregion
  },
  methods: { ...shoppingCartPageMethods },
  created: async function () {
    this.getStroageList();
  },
  watch: {
    // #region 通过监测 storageList 来判断子复选框是否产生了变化。
    // 因为storageList里存放item元素
    storageList: {
      handler() {
        let checkedAll = this.storageList.every(function (item) {
          //every 判断每个元素是否都符合条件。some，判断部分
          return item.isSelected == true; //需要返回return
        });
        // console.log("checkedAll", checkedAll);
        this.isAllSelected = checkedAll;
      },
      deep: true, //深度侦听。当对象或数组里面的成员的属性值发生变化的时候，也可以侦听到
    },
    // #endregion
  },
};
</script>

<style>
</style>