<template>
  <h2>当前求和为:{{sum}}</h2>
  <button @click='sum++'>点击＋1</button>
  <hr>
  <h2>{{msg}}</h2>
  <button @click="msg+='!'">点击＋！</button>
  <hr>
  <h2>姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <h2>薪资:{{person.job.j1.salary}}k</h2>
  <button @click="person.name+='~'">点击修改姓名</button>
  <button @click="person.age++">点击修改姓名</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { watch,ref,reactive,watchEffect} from "vue";

export default {
  name: "Demo",
  setup() {
    let sum  = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name:'李四',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    //监视
    // watch(sum,(newvalue,oldvalue)=>{
    //   console.log(newvalue,oldvalue);
    // },{immediate:true})

    watchEffect(()=>{
      const x1 = sum.value
      console.log('watchEffect所指定的回调执行了');
    })
    return {
      sum,
      msg,
      person
    };
  },
};
</script>

<style>
</style>
