<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{ sum }}
    <hr>
    {{ obj }}
    {{ obj.a }}==>{{ obj.b }}==>{{ obj.c }}
    <hr>
    <p>我是{{ info.name }},今年{{ info.age }}</p>
    <hr>
    我是通过toRef解构获取的单个属性值
    <p>{{ nm }}</p>
    <hr>
    <span>我是通过toRefs解构获取的多个属性值</span>
    <p>{{ name }}+{{ male }}+{{ age }}</p>
    <hr>
    <button @click="addBtn">添加</button>
    {{ msgLoad }}
    <hr>
    <Demo msg="你好" school="北大" @hello="showHelloMsg">
      <span>超寒冷</span>
      <template v-slot:hot>
        <span>超烈火</span>
      </template>
      <template #cold>
        <span>超寒冷</span>
      </template>
    </Demo>
    <!-- 跳转新页面 -->
</div>
</template>

<script setup>
import {ref,reactive,toRef,toRefs,getCurrentInstance} from 'vue'
import theatersData from '@/assets/json/theatersData'; 
import Demo from '@/components/Demo.vue'
let app=getCurrentInstance();
let msgLoad=app.appContext.config.globalProperties.$loading
console.log(theatersData,'app')
let sum=ref(0);
let obj=reactive({
  a:1,
  b:2
});
let info=reactive({
  name:'李三',
  age:23,
  male:'男'
});
let nm=toRef(info,'name');// 解构单个数据
let {name,age,male}=toRefs(info);// 解构多个数据
const addBtn=()=> {
  // obj.c=3
  // sum.value++;
  let obj=theatersData
  console.log(obj,'obj')
  info.name='王五'
},
showHelloMsg=(value)=> {
  alert(`你好啊，你触发了hello事件，我收到的参数是${value}`)
}
</script>
