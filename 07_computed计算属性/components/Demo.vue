<template>
  <!-- Vue3中的组件模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  姓 : <input type="text" v-model="person.firstname">
  <br>
  名 : <input type="text" v-model="person.lastname">
  <br>
  <span>  全名:{{person.fullname}}</span>
  <br> 
  全名: <input type="text" v-model="person.fullname">
</template>

<script>
import { reactive,computed } from "vue";

export default {
  name: "Demo",
  setup() {
    let person  = reactive({
      firstname:'张',
      lastname:'三',
      age:18,
    })
    // 计算属性（简写）-----没有考虑计算属性被修改的情况
    //  person.fullname = computed(()=>{
    //   return person.firstname + '-' + person.lastname
    // })

    //计算属性------完整写法
    person.fullname = computed({
      get(){
        return person.firstname + '-' + person.lastname
      },
      set(value){
        const newArr = value.split('-')
        person.firstname = newArr[0]
        person.lastname = newArr[1]
      }
    })
    return {
      person,
    };
  },
};
</script>

<style>
</style>
