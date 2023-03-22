<template>
  <div class="app">
    <h2>我是APP组件</h2>
    <Suspense>
      <template #default>
        <Child></Child>
      </template>
      <template #fallback>
        <h3>加载中....</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from "./components/Child.vue"; //静态引入
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/Child.vue")); // 异步引入
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
