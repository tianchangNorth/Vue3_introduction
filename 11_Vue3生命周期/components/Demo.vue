<template>
  <h2>当前求和为:{{sum}}</h2>
  <button @click='sum++'>点击＋1</button>
</template>

<script>
import { ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from "vue";

export default {
  name: "Demo",
  setup() {
    console.log('---setup---');

    onBeforeMount(() => {
      console.log("---onBeforeMount---");
    }),
    onMounted(() => {
      console.log("---onMounted---");
    }),
    onBeforeUpdate(() => {
      console.log("---onBeforeUpdate---");
    }),
    onUpdated(() => {
      console.log("---onUpdated---");
    }),
    onBeforeUnmount(() => {
      console.log("---onBeforeUnmount---");
    }),
    onUnmounted(() => {
      console.log("---onUnmounted---");
    });
    let sum  = ref(0)
    return {
      sum,
    };
  },
  // beforeUnmount(){
  //   console.log('---beforeUnmount---');
  // },
  // unmounted() {
  //   console.log('---unmounted---');
  // },
};
</script>

<style>
</style>
