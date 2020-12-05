<template>
  <div>
    <div class="box_head">码帮商城</div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
let vueMethods = {};
// vueMethods.banner = async function () {
//   let n = 0; //当前显示的图片序号（从0开始计算）

//   let total = 2; //当前图片的总数

//   let eleBoxIn = document.getElementById("id_box_in"); //banner内盒子元素对象

//   //type表示动作类型，next表示下一张，prev表示上一张，否则代表具体的第几涨
//   let switchimg = function (type) {
//     if (type == "next") {
//       //T1：如果type是next，处理下一张的目标位置
//       n = n + 1;
//       if (n >= total) {
//         //如果n大于等于总数
//         // alert("n超出范围，赋值为0")
//         n = 0;
//       }
//     } else if (type == "prev") {
//       //T2：如果type是prev，处理上一张的目标位置
//       n = n - 1;
//       if (n < 0) {
//         //如果n小于0
//         // alert("n超出范围，赋值为2")
//         n = 2;
//       }
//     } else {
//       //T3:否则
//       n = type;
//     }

//     let left = -n * 100 + "%";
//     // alert(left);
//     eleBoxIn.style.left = left;

//     let btn_0 = document.getElementById("id_btn_0");
//     let btn_1 = document.getElementById("id_btn_1");
//     let bgFocus = "#fff";
//     let bgNormal = "rgba(255,255,255,0.8)";

//     //按钮聚焦的处理
//     if (n == 0) {
//       btn_0.style.backgroundColor = bgFocus;
//       btn_1.style.backgroundColor = bgNormal;
//     } else if (n == 1) {
//       btn_1.style.backgroundColor = bgFocus;
//       btn_0.style.backgroundColor = bgNormal;
//     }
//   };

//   let interval; //定时器编号
//   let autoPlay = function () {
//     //延迟3秒，切换下一张图片
//     interval = setInterval(function () {
//       switchimg("next");
//     }, 3000);

//     console.log("interval", interval);
//   };

//   //不用点击直接调用
//   autoPlay();
// };

export default {
  data: function () {
    return {};
  },
  methods: vueMethods, //***将vueMethods对象展开到此处
};
</script>

<style scoped>
.box_head {
  height: 90px;
  text-align: center;
  line-height: 90px;
  font-weight: 700;
  font-size: 40px;
  background-color: #fff;
  color: #000;
  background-image: url(https://timgsa.baidu.com/timg?di=627560e…&image=&qu…%3A%2F%2Fimg.nongji360.com%2Fn%2Fimage%2F2015%2F08%2F11%2F151247223025.jpg);
}
/* .block {
  width: 380px;
  margin: 0 auto;
  background: #f8f8f8;
} */

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.box_banner1 {
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 180px;
  margin-bottom: 20px;
  justify-content: center;
  display: flex;
  margin: 0 auto 20px;
}

.box_img {
  width: 100vw;
  height: 180px;
}

.box_banner1 img {
  width: 100%;
  height: 100%;
  /* 通过CSS3的object-fit调整图片的适应盒子规则 */
  object-fit: cover;
}

.box_banner1_in {
  transition: 1s;
  display: flex;
  width: 300%;
  left: 0;
  top: 0;
  position: absolute;
}

.box_prev_next {
  position: absolute;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 6;
}

.box_prev_next li {
  cursor: pointer;
  text-align: center;
  color: #cccccc;
  background-color: rgba(9, 9, 9, 0.3);
  border-radius: 50%;
  width: 25px;
  height: 25px;
}

.box_banner_btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  bottom: 10px;
  z-index: 6;
}

.box_banner_btn li {
  margin: 0 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  width: 15px;
  height: 15px;
  cursor: pointer;
  text-align: center;
}
</style>