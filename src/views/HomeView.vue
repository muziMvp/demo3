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
    {{ nm }}
    <hr>
    {{ name }}+{{ male }}+{{ age }}
    <hr>
    <button @click="addBtn">添加</button>
    {{ msgLoad }}
</div>
</template>

<script setup>
import {ref,reactive,toRef,toRefs,getCurrentInstance} from 'vue'
let app=getCurrentInstance();
let msgLoad=app.appContext.config.globalProperties.$loading
console.log(app,'app')
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
let nm=toRef(info,'name');
let {name,age,male}=toRefs(info);
const addBtn=()=> {
  // obj.c=3
  // sum.value++;
  info.name='王五'
}
</script>
