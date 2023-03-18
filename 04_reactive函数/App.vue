<template>
  <!-- Vue3中的组件模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h1>名字:{{ person.name }}</h1>
  <h1>年龄:{{ person.age }}</h1>
  <h1>工作种类:{{ person.job.typeof }}</h1>
  <h1>薪水:{{ person.job.salary }}</h1>
  <h1>爱好:{{person.hobby}}</h1>
  <button @click="changeInfo">按钮</button>
</template>

<script>
import { ref,reactive } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  //此处只是测试一下setup,暂时不考虑响应式
  setup() {
    //数据
    // let name = ref("张三");
    // let age = ref(11);
    // let job = ref({
    //   typeof: "前端工程师",
    //   salary: "30k",
    // });
    let person  = reactive({
      name:'张三',
      age:18,
      job:{
        typeof:'前端工程师',
        salary:'30k'
      },
      hobby:['抽烟','喝酒','烫头']
    })
    function changeInfo() {
      person.name = "李四";
      person.age = 18;
      person.job.typeof = "UI工程师";
      person.job.salary = "35k";
      person.hobby[0] = '学习'
    }
    //返回一个对象
    return {
      person,
      changeInfo,
    };
  },
};
</script>

<style>
</style>
