<template>
  <button @click="isShow = !isShow">切换显示/隐藏</button>
  <Demo v-if="isShow"></Demo>
</template>

<script>
import Demo from './components/Demo'
import { ref } from 'vue';
export default {
  name: "App",
  components:{
    Demo
  },
  setup() {
    let isShow = ref(true)
    return{
      isShow
    }
  }
};
</script>

<style>
</style>
