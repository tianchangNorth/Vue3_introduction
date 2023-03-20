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
import { watch,ref,reactive} from "vue";

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
    //监视属性：一
    // watch(sum,(newvalue,oldvalue)=>{
    //   console.log('sum变了',newvalue,oldvalue);
    // })

    //监视属性:二（同时监视多个属性）
    // watch([sum,msg],(newvalue,oldvalue)=>{
    //   console.log('sum或msg改变了',newvalue,oldvalue);
    // },{immediate:true,deep:true})

    //监视属性三 监视reactive所定义的数据 
    //1.无法正确获取oldvalue
    //2.强制开启了深度监视 deep配置无效
      // watch(person,(newvalue,oldvalue)=>{
      //   console.log(newvalue,oldvalue);
      // })

      //监视属性:四 监视reactive所定义的一个响应式数据中的某个属性
      // watch(()=>person.age,(newvalue,oldvalue)=>{
      //   console.log(newvalue,oldvalue);
      // })

      //监视属性:五 监视reactive所定义的一个响应式数据中的多个属性
      // watch([()=>person.age,()=>person.name],(newvalue,oldvalue)=>{
      //     console.log(newvalue,oldvalue);
      // })
      
      //特殊情况 此处监视的时reactive所定义的对象中的某个属性,所以deep配置有效
      watch(()=>person.job,(newvalue,oldvalue)=>{
        console.log(newvalue,oldvalue);
      },{deep:true})
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
