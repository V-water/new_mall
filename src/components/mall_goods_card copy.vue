<template>
  <div>
    <div class="box_1">
      <div class="goods_img">
        <a href="#">
          <img class="box_commodity" :src="getImg()" />
        </a>
      </div>
      <div class="goods_title">{{ item.title }}</div>
      <div class="box_2" style="">￥{{ item.priceSell }}</div>
      <div class="iconfont icon-gouwuche box_car"></div>
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
@media screen and (max-width: 640px) {
  .box_1 {
    height: 250px;
    width: 165px;
    background: #fff;
    margin: 5px 7px;
    float: left;
  }
  .goods_img {
    width: 157.5px;
    height: 164.5px;
    position: relative;
  }
  .box_commodity {
    width: 157.5px;
    height: 157.5px;
    background-size: 157.5px 157.5px;
    background-repeat: no-repeat;
    margin: 0 4px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .goods_title {
    font-size: 20px;
    height: 70px;
    line-height: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .box_2 {
    width: 235px;
    font-size: 20px;
  }
  .box_2,
  .box_car {
    color: #ff5e5c;
    float: left;
    margin: 20px 0;
  }
  .box_car {
    font-size: 43px;
    width: 70px;
    height: 70px;
  }
}
.box_1 {
  height: 462px;
  width: 305px;
  background: #fff;
  margin: 5px 7.5px;
  float: left;
}
.goods_img {
  width: 305px;
  height: 315px;
  position: relative;
}
.box_commodity {
  width: 305px;
  height: 305px;
  background-size: 305px 305px;
  background-repeat: no-repeat;
  margin: 0 4px;
  position: absolute;
  top: 0;
  left: 0;
}
.goods_title {
  font-size: 20px;
  height: 70px;
  line-height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.box_2 {
  width: 235px;
  font-size: 20px;
}
.box_2,
.box_car {
  color: #ff5e5c;
  float: left;
  margin: 20px 0;
}
.box_car {
  font-size: 43px;
  width: 70px;
  height: 70px;
}
</style>