<template>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>薪资:{{job.j1.salary}}k</h2>
  <button @click="name+='~'">点击修改姓名</button>
  <button @click="age++">点击修改姓名</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive,toRefs} from "vue";

export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name:'李四',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    return {
      ...toRefs(person)
    };
  },
};
</script>

<style>
</style>
