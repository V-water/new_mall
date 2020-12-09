<template>
  <div class="inputNumber_box ML15 MT15 MB15" :style="styleDialog">
    <div class="inputNumber_item1 item1_1" :class="{ disable: open1 }" @click="fn1">-</div>
    <div class="inputNumber_item2">
      <input class="inputNumber_input" type="text" v-model="count" />
    </div>
    <span class="inputNumber_item1 item1_2" @click="fn2">+</span>
  </div>
</template>

<script>
export default {
  props: {
    countstart: null,
    addcount: null,
    bottom_number: null,
    // TODO
    width: {}, //定义宽度和高度，可以使得不同弹窗组件宽高度不同
    height: {},
    ml: {},
    mt: {},
  },
  data: function () {
    //data存的必须是函数
    return {
      count: this.countstart * 1,
      add: this.addcount * 1,
      bottom: this.bottom_number * 1,
      open1: null,
    };
  },
  methods: {
    fn1: function () {
      if (this.count <= this.bottom) {
        return (this.open1 = true);
      } else {
        this.count = this.count - this.add
        // TODO 自定义事件，并发送this.count传值
        this.$emit("getCountNumber1", this.count);
        return this.count;
      }
    },
    fn2: function () {
      this.open1 = false;
      this.count = this.count + this.add;
      // TODO 自定义事件，并发送this.count传值
      this.$emit("getCountNumber2", this.count);
      return this.count, this.open1;
    },
  },
  computed: {
    //与 methods 对比：computed只有当其计算因子变化的时候才会被调用，属于性能优化
    styleDialog: function () {
      return {
        //需要 return
        width: `${this.width}px`,
        height: `${this.height}px`,
        "margin-left": `${this.ml}px`,
        "margin-top": `${this.mt}px`,
      };
    },
  },
};
</script>

<style>
.inputNumber_box {
  height: 45px;
  width: 220px;
  border-radius: 5px;
  border: 1px rgb(220, 223, 230) solid;
  display: flex;
  position: relative;
  align-items: center;
  background-color: rgb(245, 247, 250);
  cursor: pointer;
}

.inputNumber_box:hover {
  border: 1px rgb(64, 158, 255) solid;
}

.item1_1:hover,
.item1_2:hover {
  color: rgb(64, 158, 255);
}

.inputNumber_item1 {
  /* border: 1px black solid; */
  text-align: center;
  /* height: 100%; */
  flex: 1;
  font-size: 25px;
  position: relative;
  line-height: 43px;
  user-select: none;
  font-size: 20px;
}

.inputNumber_item2 {
  /* border: 1px rgb(220,223,230) solid; */
  border-left: 1px solid rgb(220, 223, 230);
  border-right: 1px solid rgb(220, 223, 230);
  background-color: #fff;
  position: relative;
  right: 0px;
  left: 0px;
  margin-left: auto;
  margin-right: auto;
  /* width: 130px;
height: 43px; */
  width: 50%;
  height: 100%;
}

.inputNumber_input {
  border: none;
  text-align: center;
  display: flex;
  right: 0px;
  left: 0px;
  margin-left: auto;
  margin-right: auto;
  /* width: 100px; */
  /* height: 43px; */
  width: 90%;
  height: 91%;
  font-size: 12px;
}

.disable {
  cursor: not-allowed;
}

.button {
  clear: both;
}
</style>