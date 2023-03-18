<template>
  <!-- Vue3中的组件模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h1>名字:{{ name }}</h1>
  <h1>年龄:{{ age }}</h1>
  <button @click="sayHello">按钮</button>
</template>

<script>
import { h, render } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  //此处只是测试一下setup,暂时不考虑响应式
  setup() {
    //数据
    let name = "张三";
    let age = 18;

    //方法
    function sayHello() {
      alert(`你好！我叫${name},我今年${age}`);
    }

    //返回一个对象
    return {
      name,
      age,
      sayHello,
    };

    //返回一个渲染函数
    // return () => h("h1", "尚硅谷");
  },
};
</script>

<style>
</style>
