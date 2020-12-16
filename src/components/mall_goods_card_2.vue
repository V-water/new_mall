<template>
  <div>
    <div class="box_1">
      <div class="goods_img">
        <a href="#">
          <img class="box_commodity" :src="getImg()" />
        </a>
      </div>
      <div class="goods_title">{{ item.title }}</div>
      <div class="box_2">￥{{ item.priceSell }}</div>
      <div
        class="iconfont icon-gouwuche box_car"
        @click="$emit('show-bottom-menu', item)"
      ></div>
    </div>
  </div>
</template>

<script>
let _ = window._;
export default {
  props: ["item"],
  data: function () {
    return {};
  },
  methods: {
    //函数：获取商品图片的函数
    getImg: function () {
      let imgFirst = "./img/zhanwei.png";
      //第一张图片的地址(占位图)，因为在public站点里，所以可直接本地引用
      console.log(imgFirst);

      //获取第一个商品图片地址，如果没有就可以第三个参数位置进行添加设置
      imgFirst = _.get(this.item, `album[0].url`, imgFirst);
      return imgFirst;
    },
  }, //***将vueMethods对象展开到此处
};
</script>

<style scoped>
.box_1 {
  height: 245px;
  width: 165px;
  background: #fff;
  margin: 5px 7px;
  float: left;
}
.goods_img {
  width: 165px;
  height: 135.5px;
  position: relative;
}
.box_commodity {
  width: 165px;
  height: 135.5px;
  background-size: 135.5px 165px;
  background-repeat: no-repeat;
  /* margin: 0 4px; */
  position: absolute;
  top: 0;
  left: 0;
}
.goods_title {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.box_2 {
  width: 125px;
}
.box_2,
.box_car {
  color: #ff5e5c;
  float: left;
  margin: 20px 0 10px 0;
}
.box_car {
  font-size: 25px;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
/* @media screen and (max-width: 360px) {
  .box_1 {
    height: 245px;
    width: 165px;
  }
  .goods_img {
    width: 157.5px;
    height: 135.5px;
  }
  .box_commodity {
    width: 157.5px;
    height: 135.5px;
    background-size: 135.5px 157.5px;
  }
  .goods_title {
    height: 40px;
    line-height: 40px;
  }
  .box_2 {
    width: 125px;
  }
  .box_car {
    font-size: 25px;
    width: 40px;
    height: 40px;
  }
} */
/* 浏览器窗口宽度大于等于360px时 */
@media screen and (min-width: 360px) {
  .box_1 {
    /* height: 462px;
    width: 305px; */
    height: 436px;
    width: 293.4px;
    margin: 8.8px 12.4px;
  }
  .goods_img {
    /* width: 305px;
    height: 315px; */
    width: 293.4px;
    height: 240.9px;
  }
  .box_commodity {
    width: 293.4px;
    height: 240.9px;
    background-size: 240.9px 293.4px;
  }
  .goods_title {
    font-size: 28.4px;
    height: 71px;
    line-height: 71px;
    padding-left: 17.77px;
  }
  .box_2 {
    width: 222.2px;
    font-size: 28.4px;
  }
  .box_2,
  .box_car {
    float: left;
    margin: 35.55px 0 17.77px 0;
  }
  .box_car {
    font-size: 44px;
    width: 71px;
    height: 71px;
    cursor: pointer;
  }
}
</style>
