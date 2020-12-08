<template>
  <div class="goodsDetail_background">
    <div class="goodsDetail">
      <div>
        <img class="goodsDetail_img" :src="getimg()" alt />
      </div>
      <div class="goodsDetail-detail">{{listgoods.title}}</div>
      <div>收藏/分享</div>
      <div class="goodsDetail-price">￥{{listgoods.priceSell}}</div>
      <div>
        <span class="goodsDetial_text1">运费：</span>
        <span class="goodsDetial_text2">免运费</span>
      </div>
      <!-- <div>
        <span class="goodsDetial_text1">净含量：</span>
        <span class="goodsDetial_text2">6个装</span>
      </div> -->
      <div>
        <span class="goodsDetial_text1">系列：</span>
        <span class="goodsDetial_text2">{{listgoods.category}}</span>
      </div>
      <div>
        <span class="goodsDetial_text1">支付：</span>
        <img
          data-v-5d8f3bae
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1636096978,3638354018&fm=26&gp=0.jpg"
          style="width:23px"
        />
        <img
          data-v-5d8f3bae
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2909532389,2928218185&fm=26&gp=0.jpg"
          style="margin-right: 5px;"
          width="18px"
        />
      </div>
    </div>
    <!-- #region  -->
    <h3 class="goodsDetail_goodsdetial">商品详情</h3>
    <div class="goodsDetail">
      <div v-html="listgoods._detail"></div>
      <h3 class="goodsDetail_deliver">【写字楼配送服务】</h3>
      <div class="goodsDetail_serve">
        <span style="color: red;">配送时间：工作日9:00-11:30，13:30-17:00时段内配送!</span>
        <br />
        <span style="font-weight: bold;">配送范围:</span>深圳市南山区/蛇口写字楼片区免运费
        <br />售后服务:
        <br />我们承诺，坏件包赔。
        <br />关于售后，在运输过程中，难免存在磕碰，如商品损坏，我们一律按照损耗数量赔偿 ，请在签收24小时内将“商品+快递底单，单号必须清晰可见，二者缺一不予理赔”并反馈给客服为您处理。
        超过24小时来找我们的，不赔偿哦!
      </div>
    </div>
    <!-- #endregion  -->
  </div>
</template>

<script>
let _=window._
import axios from "axios";
export default {
  data: function () {
    return {
      id: null,
      listgoods: [],
    };
  },
  computed: {
    findJson: function () {
      let findjson1 = { _id: this.id };
      return findjson1;
    },
  },
  methods: {
    geturl: function () {
      // let example = window.location.herf;
      let url = document.URL;
      // console.log(url);
      let arr1 = url.split("?"); //分割每组参数，保存到数组
      let arr2 = arr1[1];
      let arr3 = arr2.split("=");
      this.id = arr3[1];
      console.log("this.id", this.id);
    },

    // #region 获取商品
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
      console.log("获取商品的list", list);
      // let { title, priceSell, _detail } = list[0];
      // console.log("title", title);

      this.listgoods = list[0];
      //  { title, priceSell, _detail };
      console.log("this.listgoods.title", this.listgoods.title);
    },
    // #endregion

    // #region 获取商品图片
    getimg: function () {
      let url = _.get(
        this.listgoods,
        `album[0].url`,
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3946756184,1966392333&fm=26&gp=0.jpg"
      );
      return url;
    },
    // #endregion
  },
  created: async function () {
    await this.geturl();
    this.getGoods();
  },
};
</script>

<style>
.goodsDetail_background {
  width: 100%;
  height: 100vw;
  background-color: rgb(242, 242, 242);
}

.goodsDetail {
  /* border: 1px black solid; */
  background-color: #fff;
  width: 510px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}

.goodsDetail_img {
  /* border: 1px black solid; */
  height: 350px;
  width: 100%;
}

.goodsDetail-detail {
  font-size: 16px;
  /* line-height: ; */
  font-weight: 700;
}

.goodsDetail_deliver {
  color: red;
  font-weight: bold;
  padding: 15px 0px;
}

.goodsDetail_serve {
  font-size: 14px;
  line-height: 35px;
  color: gray;
  /* border: 1px red solid; */
}

.goodsDetail-price {
  font-size: 20px;
  color: red;
  /* margin-bottom: 5px; */
  clear: both;
  /* margin-top: -30px; */
}

.goodsDetial_text1 {
  float: left;
  color: gray;
  font-size: 13px;
  width: 70px;
}

.goodsDetail_goodsdetial {
  background-color: rgb(242, 242, 242);
  font-weight: bold;
  /* line-height: 40px; */
  width: 510px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}
</style>