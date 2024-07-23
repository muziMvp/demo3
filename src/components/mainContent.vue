<template>
  <div class="box">
    我是内容
    <button @click='btn'>按钮</button>
    <teleport to="body">
      <div class="mo" v-if="show"></div>
    </teleport>
  </div>
</template>
<script setup>
import {ref} from 'vue';
let show=ref(false);
const btn=()=> {
  console.log('dddd')
  show.value=true;
}
</script>
<style scoped>
.box {
  /* width:50%; */
  flex:1;
  position: relative;
  border:1px solid #4d12d6
}
.mo {
  width: 300px;
  height: 300px;
  background-color: orangered;
  position: absolute;
  left:50%;
  top:50%;
  margin-left:-150px;
  margin-top:-150px;
}
</style>