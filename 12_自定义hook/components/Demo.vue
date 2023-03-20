<template>
  <h2>当前求和为:{{sum}}</h2>
  <button @click='sum++'>点击＋1</button>
  <hr>
  <h2>当前鼠标的坐标为: X:{{mousePosition.x}} Y:{{mousePosition.y}}</h2>
</template>

<script>
import { ref} from "vue";
import usePoint from '@/hooks/usePoint'
export default {
  name: "Demo",
  setup() {
    let sum  = ref(0)
    let mousePosition =  usePoint()
    return {
      sum,
      mousePosition
    };
  },
};
</script>

<style>
</style>
