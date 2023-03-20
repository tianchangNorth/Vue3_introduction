import { reactive,onMounted,onBeforeUnmount} from "vue";
export default function(){
    //数据
    let mousePosition = reactive({
        x:0,
        y:0
      })
    //方法
      function move(event){
        mousePosition.x = event.pageX
          mousePosition.y = event.pageY
          console.log('---');
    }
    //生命周期钩子
      onMounted(() => { 
        window.addEventListener('mousemove',move);})
      onBeforeUnmount(()=>{
        window.removeEventListener('mousemove',move)
    })
    return mousePosition
}