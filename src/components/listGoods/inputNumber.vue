<template>
  <div class="inputNumber_box ML15 MT15 MB15" :style="styleDialog">
    <div
      class="inputNumber_item1 item1_1"
      :class="{ disable: open1 }"
      @click="mathematics('minus')"
    >-</div>
    <div class="inputNumber_item2">
      <input class="inputNumber_input" type="text" v-model.number="valueIN" />
    </div>
    <span
      class="inputNumber_item1 item1_2"
      @click="mathematics('mum')"
    >+</span>
  </div>
</template>

<script>
export default {
  props: {
    value: {// 在引用组件时写上 v-model ， 则自动就有value属性
      default: 1,
    },
    minimum: {
      defult: 0, //最小值
    },
    width: {}, //定义宽度和高度，可以使得不同弹窗组件宽高度不同
    height: {},
    ml: {},
    mt: {},
  },
  data: function () {
    //data存的必须是函数
    return {
      valueIN: this.value * 1,
      open1: null,
    };
  },
  watch: {
    valueIN: {
      handler(newVal) {
        this.$emit("input", newVal);
      },
    },
  },
  methods: {
    mathematics: function (type) {
      if (type == "minus") {
        //minus要加上引号，这样就是字符串
        if (this.valueIN <= this.minimum) {
          this.open1 = true;
        } else {
          this.valueIN--;
        }
      }
      if (type == "mum") {
          this.valueIN++;
      }
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
</style>