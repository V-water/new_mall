<template>
  <div>
    <table class="shoppingCartPage_table" border="1">
      <tr>
        <div class="shoppingCart_table_head">
          <div class="shoppingCart-table-input">
            <input class="shoppingCart_checkbox" type="checkbox" />
          </div>
          <div>
            <span class="iconfont icon-mall"></span>
            <a href class="shoppingCart_mabang">码帮商城</a>
            <span class="shoppingCart_table_edit">编辑</span>
          </div>
        </div>
      </tr>
      <tbody id>
        <tr is="goods_card" v-for="item in storageList" :key="item._id" :item="item"></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import axios from "axios";
import goods_card from "../components/shoppingCartPage/goods_card.vue";

export default {
  components: {
    goods_card,
  },
  data: function () {
    return {
      id: null,
      storageList: null,
      // storageList_Id: null,
    };
  },
  methods: {
    // #region 获取localStorage里的商品信息
    getStroageList: function () {
      let shopping_CartData = localStorage.shoppingCartData;
      if (shopping_CartData==[]) {//判断localStorage里面是否存在数据
          console.log("localStorage里面不存在数据")
        // this.storageList = JSON.parse(localStorage.shoppingCartData);
      }else{
        this.storageList = JSON.parse(localStorage.shoppingCartData);
      }
    //   this.storageList = JSON.parse(localStorage.shoppingCartData);
      console.log("this.storageList###", this.storageList);

      //   通过map得到各个商品的id
      //   this.storageList_Id = this.storageList.map((item) => item._id);
      //   console.log("this.storageList_Id", this.storageList_Id);
    },
    // #endregion

    // // #region 判断localStorage里面是否有数据
    // check_localStorage: function () {},
    // // #endregion
  },
  created: async function () {
    this.getStroageList();
  },
};
</script>

<style>
.shoppingCartPage_table {
  border-collapse: collapse;
  margin-bottom: 50px;
}

.shoppingCart-table {
  border: 1px black solid;
  width: 100%;
  border-collapse: collapse;
  /* margin: 10px; */
}

.shoppingCart-table-head {
  border: 1px red solid;
  width: 100%;
  line-height: 40px;
  border-bottom: 1px gray solid;
}

.shoppingCart-table-input {
  border: 1px black solid;
  width: 15px;
  padding: 0 5px;
}

/* .shoppingCart-checkbox{
            display: inline-block;
            width: 5px;
            height: 5px;
            border-radius: 50%;
        } */

.shoppingCart-table-title {
  float: left;
}

.shoppingCart-table-edit {
  position: absolute;
  /* margin-left: 90%; */
  right: 10px;
  font-weight: normal;
  color: rgb(67, 67, 206);
  cursor: pointer;
}

.shoppingCart-table tr {
  border: 1px black solid;
  /* width: 100px; */
  height: 30px;
}

.shoppingCart-table .th {
  border: 1px black solid;
  height: 100%;
  /* width: 30px; */
}

.shoppingCart-table .iconfont {
  padding-left: 5px;
  /* width: 30px; */
  color: gray;
}
</style>