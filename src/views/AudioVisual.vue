<template>
  <div class="audioContainer">
    <!-- <h1>音频可视化操作</h1> -->
    <canvas ref="cvs" id="canvas11" :style="{height:canvasHeight+'px'}"></canvas>
    <audio :src="aud" controls @play="playAudio" @pause="pauseAudio" @ended="overAudio" ref="audio"></audio>
  </div>
</template>
<script setup>
import { onMounted,ref,reactive } from 'vue';

let aud=require("@/assets/zhoushen_xiaoxiatu.mp3")
// 要操作的元素
// const audio=document.querySelector('audio');
// const cvs=document.querySelector('canvas');
const audio=ref(null);
const cvs=ref(null);
const ctx=ref({});
const navHeight=ref(78);
const canvasHeight=ref(200);
// const ctx=cvs.value.getContext('2d');
// 获取画布高度
const updateHeaderHeight=()=> {
  setTimeout(()=> {
    canvasHeight.value=document.documentElement.clientHeight-navHeight.value-54;
  },3)
};
// 初始化画布
const initCvs=()=> {
  const c2d=cvs.value
  var ctx1=c2d.getContext('2d');
  ctx.value=c2d.getContext('2d');
  cvs.value.width=window.innerWidth*devicePixelRatio;
  cvs.value.height=(window.innerHeight/2)*devicePixelRatio;
  
};
// 是否已初始化
let isInit=ref(false);
// 数组，用于接收分析器节点的分析数据
let dataArray=ref({});
// 分析器节点
let analyser=ref();
// 音频播放事件
const playAudio=()=> {
  // 判断是否初始化
  if(isInit.value){
    return;
  }

  // 创建音频上下文
  const audioCtx=new AudioContext();
  // 创建音频源节点
  const source=audioCtx.createMediaElementSource(audio.value);
  // 创建分析器节点
  analyser.value=audioCtx.createAnalyser();
  analyser.value.fftSizze=512;
  // 接收分析器节点的分析数据
  const a=new Uint8Array(analyser.value.frequencyBinCount);
  console.log( a,'aaaa')
  dataArray.value=a;

  source.connect(analyser.value);
  analyser.value.connect(audioCtx.destination);
  // 已初始化
  isInit.value=true;
  draw();
};
// 音频暂停
const pauseAudio=()=> {
  console.log('pauseAudio',isInit.value)
};
// 音频播放结束
const overAudio=()=> {
  console.log('overAudio')
};
// 把分析出来的波形绘制到canvas上
const draw=()=> {
  // 逐帧绘制
  requestAnimationFrame(draw);

  // 接下来清空画布
  // 使用可选链操作符来安全地访问属性?.
  const width=cvs.value?.width;
  const height=cvs.value?.height;

  ctx.value.clearRect(0,0,width,height);
  if (!isInit.value) {
    return ;
  }
  // 让分析器节点分析出数据到数组中
  analyser.value.getByteFrequencyData(dataArray.value);
  const len=dataArray.value.length/2;//条的数量,取一半，前半部分（低频范围就好，高频部分人耳几乎听不到，看不到波形）
  const barWidth=width/len/2;// 条的宽度
  ctx.value.fillStyle='red';
  //循环绘制
  for(let i=0;i<len;i++) {
    const data=dataArray.value[i];
    const barHeight=(data/255)*height;// 条的高度
    const x1=i*barWidth+width/2;// 右边区域中条的x坐标
    const x2=width/2-(i+1)*barWidth;// 左边区域中条的x坐标,镜像
    const y=height-barHeight;//条的y坐标
    ctx.value.fillRect(x1,y,barWidth-2,barHeight);// 填充右边区域
    ctx.value.fillRect(x2,y,barWidth-2,barHeight);//填充左边区域

  }
};
onMounted(()=> {
   updateHeaderHeight()
  // 先初始化画布；
   initCvs();
  //  draw();
})
</script>
<style scoped>
.audioContainer {
  /* border:1px solid red; */
  /* min-height: 100px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  opacity: 0.8;
  position: relative;
  overflow: hidden;
}
canvas {
  width: 100%;
  /* height:calc(100vh-132px); */
}
audio {
  position: absolute;
  /* top:87px;
  right:50px; */
  bottom:0;
  opacity: 0.15;
  transition: opacity  0.5s;
}
audio:hover {
  opacity: 1;
}
</style>