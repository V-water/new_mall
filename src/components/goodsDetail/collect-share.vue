<template>
  <div>
    <div class="collect_share">
      <span class="iconfont icon-fenxiang"></span> 收藏/分享
    </div>
    <van-slider v-model="value" @change="onChange" />
    <van-popover v-model="showPopover" trigger="click">
      <van-grid square clickable :border="false" column-num="3" style="width: 240px;">
        <van-grid-item
          v-for="i in 6"
          :key="i"
          text="选项"
          icon="photo-o"
          @click="showPopover = false"
        />
      </van-grid>
      <template #reference>
        <van-button type="primary">自定义内容</van-button>
      </template>
    </van-popover>
  </div>
</template>

<script>
import { Popover } from "vant";
import { Toast } from "vant";

// Vue.use(Popover);

export default {
  data() {
    return {
      showPopover: false,
      value: 50,
      //    showPopover: false,
      //   // 通过 actions 属性来定义菜单选项
      //   actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }],
    };
  },
  methods: {
    onChange(value) {
      Toast("当前值：" + value);
    },
  },
};
</script>

<style>
</style>