<template>
  <div class>
    <!-- {{listGood}} -->
    <!-- <div class>{{listData}}</div> -->
    <div class="allGoods_menu">
      <aside>
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item
            v-for="category in listData"
            :key="category._id"
            :title="category.title"
          />
        </van-sidebar>
      </aside>

      <article class="listpage">
        <div class="listpage_title">{{categoryTitle}}</div>
        <goodsCard v-for="item in filterGood" :item="item" :key="item.id" @addgoods="addGoods"></goodsCard>
      </article>
    </div>
    <shoppingCart :title="show_item.title" :price="show_item.priceSell" :url="getbottomimage()"></shoppingCart>
  </div>
</template>

<script>
let _ = window._;
let $ = window.$;
import axios from "axios";
import goodsCard from "@/component/listArea/goodsCard.vue";
import shoppingCart from "@/component/listArea/shoppingCart.vue";
// Q
let $bottom_menu = $("#bottom_menu");
console.log("$bottom_menu", $bottom_menu);
$bottom_menu.css("display", "none");

export default {
  name: "listGoods",
  data: function () {
    return {
      categoryTitle: null, //商品分类名称
      listData: [], //用于输出商品分类的数组
      activeKey: 0,
      listGood: [], //原商品数组
      filterGood: [], //过滤后的商品数组
      categoryId: null, //商品分类的id
      show_item: { title: "小米", priceSell: "123" }, //当前需要加入购物车的item
    };
  },
  components: {
    // area1,
    goodsCard,
    shoppingCart,
  },
  computed:{
    findJson:function(){
      // let findJson1={}; 
      return 123
    }
  },
  methods: {
    //tab切换后的回调函数
    onChange(index) {
      // debugger;
      //vant组件提供的功能
      // console.log(`listData[index]._id:`, this.listData[index]._id);
      this.categoryId = this.listData[index]._id;
      this.categoryTitle = this.listData[index].title; //获取商品分类类目名称
      // this.getGoods();
      this.filter(this.categoryId); //引用商品过滤函数
      // this.getGoods();
    },

    // #region ajax获取商品列表函数
    getGoods: async function () {
      let response = await axios({
        method: "post",
        url: "https://www.dmagic.cn/info/getCommonList",
        data: {
          // 一开始的时候不要输入非固定值的
          findJson: {},
          pageIndex: 1,
          pageSize: 20,
          _systemId: "sys_chenbowen",
          _dataType: "goods",
        },
      });
      let { data } = response;
      let { list } = data;
      this.listGood = list;
      // console.log("商品列表listGood", this.listGood);//需要注意this的指向问题
    },
    //#endregion

    // #region ajax获取商品分类列表函数
    getCategory: async function () {
      let response = await axios({
        method: "post",
        url: "https://www.dmagic.cn/info/getCommonList",
        data: {
          // 一开始的时候不要输入非固定值的
          findJson: {},
          pageIndex: 1,
          pageSize: 20,
          _systemId: "sys_chenbowen",
          _dataType: "goods_category",
        },
      });
      let { data } = response;
      let { list } = data;
      this.listData = list;
      console.log("商品分类列表listData", this.listData);
    },
    // #endregion

    // #region 过滤商品函数
    filter: function (categoryId) {
      console.log("filterGoods函数categoryId", categoryId);
      console.log("filterGoods函数的this.listGood", this.listGood); // Q 一开始的时候是空的

      this.filterGood = this.listGood.filter((item) => {
        console.log("filter函数categoryId", categoryId);
        return item.category == categoryId;
      }); //返回商品类目和id值相同的商品
      console.log("filterGoods函数filterGood", this.filterGood);
      // console.log("this.listGood", this.listGood);
    },
    // #endregion

    // #region 添加商品
    addGoods: function (item) {
      this.show_item = item;
      // console.log("item", item);
      // console.log("this.show_item", this.show_item);
    },
    // #endregion

    // #region 获取底部菜单商品图片
    getbottomimage: function () {
      // let $bottom_menu = $("#bottom_menu");
      // $bottom_menu.style.display = block;
      $bottom_menu.css("display", "block");
      // console.log("getbottomimage的show_item", this.show_item);
      let url = _.get(
        this.show_item,
        `album[0].url`,
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3946756184,1966392333&fm=26&gp=0.jpg"
      );
      return url;
    },
    // #endregion
  },
  async created() {
    await this.getGoods();
    await this.getCategory();
    this.onChange(0); //获取最开始的商品分类类目名称

    // this.onChange(0);
    // this.filter(this.categoryId);
  },
};
</script>

<style>
.allGoods_menu {
  border: 1px black solid;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  width: 640px;
  display: flex;
}

/* #region 左侧菜单样式 */
.van-sidebar {
  width: 135px;
}

.van-sidebar-item {
  padding-left: 10px;
}

.van-sidebar-item__text {
  padding-left: 12px;
  line-height: 80px;
  font-weight: bold;
}

.van-sidebar-item {
  padding: 0;
  margin: 0;
}

.van-sidebar-item--select::before {
  height: 100%;
  width: 2px;
}
.van-sidebar-item--select {
  color: #666;
}
/* #endregion */
</style>
