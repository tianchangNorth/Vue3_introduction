<template>
  <div class="child">
    <h2>我是Child组件</h2>
    <Son></Son>
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  name: "Child",
  components: {
    Son,
  },
};
</script>

<style scoped>
.child {
  padding: 10px;
  background-color: coral;
}
</style>
