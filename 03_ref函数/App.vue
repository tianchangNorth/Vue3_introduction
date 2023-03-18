<template>
  <!-- Vue3中的组件模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h1>名字:{{ name }}</h1>
  <h1>年龄:{{ age }}</h1>
  <h1>工作种类:{{ job.typeof }}</h1>
  <h1>薪水:{{ job.salary }}</h1>
  <button @click="changeInfo">按钮</button>
</template>

<script>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  //此处只是测试一下setup,暂时不考虑响应式
  setup() {
    //数据
    let name = ref("张三");
    let age = ref(11);
    let job = ref({
      typeof: "前端工程师",
      salary: "30k",
    });
    function changeInfo() {
      name.value = "李四";
      age.value = 18;
      job.value.typeof = "后端工程师";
      job.value.salary = "35k";
      console.log(job.value);
    }
    //返回一个对象
    return {
      name,
      age,
      changeInfo,
      job,
    };
  },
};
</script>

<style>
</style>
