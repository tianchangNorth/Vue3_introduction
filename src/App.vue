<template>
  <div class="app">
    <h2>我是APP组件</h2>
    <Child></Child>
  </div>
</template>

<script>
import Child from "./components/Child.vue";
export default {
  name: "App",
  components: {
    Child,
  },
};
</script>

<style scoped>
.app {
  background-color: blueviolet;
  padding: 10px;
}
</style>
