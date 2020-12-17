<template>
  <div class="listGoods_background">
    <van-nav-bar
      title="所有商品"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="allGoods_menu">
      <aside class="allGoods_menu_aside">
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
    <!-- TODO listGoods页面引用商品卡片goodsCard组件，自定义事件 -->
        <goodsCard
          v-for="item in listgoods"
          :item="item"
          :key="item.id"
          @show-bottom-menu="showbottom_menu"
        ></goodsCard>
      </article>
    </div>
    <!-- TODO listGoods页面引用底部菜单shoppingCart组件 -->
    <!-- 设置show_item的number属性，就算这时没有该属性，也会对对象的属性进行添加 -->
    <shoppingCart
      :show.sync="showBottomMenu"
      :title="show_item.title"
      :price="show_item.priceSell"
      :id="show_item._id"
      :detail="show_item._detail"
      :number="show_item.number"
      :url="getbottomimage()"
    ></shoppingCart>
  </div>
</template>

<script>
let _ = window._;
import axios from "axios";
import goodsCard from "@/components/listGoods/goodsCard.vue";
import shoppingCart from "@/components/listGoods/shoppingCart.vue";
// import collectshare from "@/components/goodsDetail/collect-share.vue";
import { Toast } from "vant";

export default {
  name: "listGoods",
  data: function () {
    return {
      showBottomMenu: false, //底部菜单的显示隐藏
      categoryTitle: null, //商品分类名称
      listData: [], //用于输出商品分类的数组
      activeKey: 0,
      listgoods: [], //原商品数组
      // filterGood: [], //过滤后的商品数组
      categoryId: null, //商品分类的id
      show_item: { title: "小米", priceSell: "123" }, //当前需要加入购物车的item
    };
  },
  components: {
    // area1,
    goodsCard,
    shoppingCart,
    // collectshare,
  },
  computed: {
    findJson: function () {
      let findJson1 = { category: this.categoryId };
      return findJson1;
    },
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    // #region 左侧菜单的切换tab切换后的回调函数
    onChange(index) {
      // debugger;
      //vant组件提供的功能
      // console.log(`listData[index]._id:`, this.listData[index]._id);
      this.categoryId = this.listData[index]._id;
      this.categoryTitle = this.listData[index].title; //获取商品分类类目名称
      this.getGoods(); //每次的categoryId变化的时候，都需要重新再请求一次获取商品列表
    },
    // #endregion

    // #region ajax获取商品列表函数
    getGoods: async function () {
      let response = await axios({
        method: "post",
        url: "https://www.dmagic.cn/info/getCommonList",
        data: {
          // 一开始的时候不要输入非固定值的
          findJson: this.findJson,
          pageIndex: 1,
          pageSize: 20,
          _systemId: "sys_chenbowen",
          _dataType: "goods",
        },
      });
      let { data } = response;
      let { list } = data;
      this.listgoods = list;
      // console.log("商品列表listGood", this.listgoods);//需要注意this的指向问题
    },
    //#endregion

    // #region ajax获取商品分类列表函数
    getCategory: async function () {
      let response = await axios({
        method: "post",
        url: "https://www.dmagic.cn/info/getCommonList",
        data: {
          // 一开始的时候不要输入非固定值的
          // findJson: {},
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
    
    // filter: function (categoryId) {
    //   console.log("filterGoods函数categoryId", categoryId);
    //   console.log("filterGoods函数的this.listgoods", this.listgoods); 

    //   this.filterGood = this.listgoods.filter((item) => {
    //     console.log("filter函数categoryId", categoryId);
    //     return item.category == categoryId;
    //   }); //返回商品类目和id值相同的商品
    //   console.log("filterGoods函数filterGood", this.filterGood);
    //   // console.log("this.listgoods", this.listgoods);
    // },
    // #endregion

    // #region 显示底部菜单
    showbottom_menu: function (item) {
      this.showBottomMenu = true;
      this.show_item = item; //需要加入购物车的商品
    },
    // #endregion

    // #region 获取底部菜单商品图片
    getbottomimage: function () {
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
    //使用过滤商品函数方法的函数执行顺序
    // await this.getGoods();
    // await this.getCategory();
    // this.onChange(0); //获取最开始的商品分类类目名称

    //第一步获取商品分类列表，然后获取当前所在分类的id值，根据其id值再去输出相应的商品列表
    await this.getCategory();
    await this.onChange(0); //获取最开始的商品分类类目名称
    this.getGoods();

    // this.onChange(0);
    // this.filter(this.categoryId);
  },
};
</script>

<style>
</style>
