<template>
  <div>
    <div class="bigg">
      <div class="box_head">码帮商城</div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item class="box_img">
          <img src="img/banner_1.jpg" />
        </van-swipe-item>
        <van-swipe-item class="box_img">
          <img src="img/banner_2.jpg" />
        </van-swipe-item>
      </van-swipe>
      <div class="block">
        <div style="background: rgb(242, 242, 242)">
          <div class="box_1">
            <div class="goods_img">
              <a href="#">
                <img
                  class="box_commodity"
                  src="https://img.yzcdn.cn/upload_files/2015/05/13/Fi9mk4S1ve59315BRMx0wXpPgCsA.jpg!middle.jpg"
                />
                <div class="img_logo">
                  <img src="img/logo.png" width="32px" height="32px" />
                </div>
              </a>
            </div>
            <div class="goods_title">新疆库尔勒香梨，3个仅售9.9元！</div>
            <div class="box_2" style="width: 135px">￥9.9</div>
            <div class="iconfont icon-gouwuche box_car"></div>
          </div>
          <div class="box_1">
            <div class="goods_img">
              <a href="#">
                <img
                  class="box_commodity"
                  src="https://img.yzcdn.cn/upload_files/2016/03/16/FvXCq8Ye4m5XIoCyOI4w7SvwLqqe.jpg!middle.jpg"
                />
                <div class="img_logo">
                  <img src="img/logo.png" width="32px" height="32px" />
                </div>
              </a>
            </div>
            <div class="goods_title">
              【商务大切盘，6-8人份！】6种时令水果，企业下午茶、会议茶歇、亲朋聚会，分享快乐，分享精彩！
            </div>
            <div class="box_2" style="width: 135px">￥69</div>
            <div class="iconfont icon-gouwuche box_car"></div>
          </div>

          <a href="#" class="lookAll">点击查看全部商品</a>
        </div>
      </div>
    </div>

    <div class="plase"></div>
  </div>
</template>

<script>
let vueMethods = {};

export default {
  data: function () {
    return {};
  },
  methods: vueMethods, //***将vueMethods对象展开到此处
};
</script>

<style scoped>
.bigg {
  background: #f8f8f8;
  height: 1175px;
  width: 100%;
}
.box_head {
  height: 90px;
  text-align: center;
  line-height: 90px;
  font-weight: 700;
  font-size: 40px;
  background-color: #fff;
  color: #000;
}

.box_img {
  width: 100vw;
  height: 135px;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 135px;
  text-align: center;
  background-color: #39a9ed;
}

.my-swipe img {
  width: 100%;
  height: 100%;
  /* 通过CSS3的object-fit调整图片的适应盒子规则 */
  object-fit: cover;
}

.block {
  display: flex;
  width: 380px;
  margin: 0 auto;
  background: #f8f8f8;
}
.box_1 {
  height: 265px;
  width: 175px;
  background: #fff;
  margin: 5px 7px;
  float: left;
}
.goods_img {
  width: 167.5px;
  height: 175.5px;
  position: relative;
}
.box_commodity {
  width: 167.5px;
  height: 167.5px;
  background-size: 167.5px 167.5px;
  background-repeat: no-repeat;
  margin: 0 4px;
  position: absolute;
  top: 0;
  left: 0;
}
.img_logo {
  width: 32px;
  height: 32px;
  position: absolute;
  top: 0;
  left: 10px;
}
.goods_title {
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.box_2,
.box_car {
  color: #ff5e5c;
  float: left;
  margin: 20px 0;
}
.box_car {
  font-size: 25px;
  width: 40px;
  height: 40px;
}
.plase {
  height: 45px;
}
.lookAll {
  display: block;
  width: 380px;
  height: 50px;
  background-color: #fff;
  clear: both;
  text-align: center;
  line-height: 50px;
  text-decoration: underline;
  margin-left: 0;
  color: #333333;
}
</style>