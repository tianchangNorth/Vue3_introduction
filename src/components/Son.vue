<template>
  <div class="son">
    <h2>我是Son组件</h2>
    <button @click="isShow = true">点击弹出弹窗</button>
    <teleport to="body">
      <div v-if="isShow" class="dailog">
        <h2>我是内容</h2>
        <h2>我是内容</h2>
        <h2>我是内容</h2>
        <h2>我是内容</h2>
        <h2>我是内容</h2>
        <button @click="isShow = false">点击关闭</button>
      </div>
    </teleport>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Son",
  setup() {
    let isShow = ref(false);
    return {
      isShow,
    };
  },
};
</script>
<style>
.son {
  background-color: chartreuse;
  padding: 10px;
}
.dailog {
  background-color: skyblue;
}
</style>
