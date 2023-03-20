<template>
  <!-- Vue3中的组件模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h1>名字:{{ person.name }}</h1>
  <h1>年龄:{{ person.age }}</h1>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Demo",
  //此处只是测试一下setup,暂时不考虑响应式
  setup() {
    let person  = reactive({
      name:'张三',
      age:18,
    })
    //返回一个对象
    return {
      person,
    };
  },
};
</script>

<style>
</style>
