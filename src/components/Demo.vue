<template>
  <h1>个人信息</h1>
  <form action="">
    <label for="name">姓名：</label>
    <input type="text" id="name" name="name" v-model="person.name">
    <br>
    <label for="age">年龄：</label> 
    <input type="number" id="age" name="age" v-model="person.age">
    <br>
    <label for="sex">性别：</label>
    <input type="text" id="sex" name="sex" v-model="person.sex">
    <!-- <input type="radio" id="male" name="sex" value="male">
    <label for="male">男</label>
    <input type="radio" id="female" name="sex" value="female">
    <label for="female">女</label> -->
  </form>
  <!-- <p>
    {{msg}}
    <span>欢迎来到</span>
    {{school}}
  </p> -->
  <button @click="sendHello">测试触发一下Demo组件的Hello事件</button>
  <!-- <slot></slot> -->
</template>
<script>
  import {reactive} from 'vue'
  export default {
    name:'Demo',
    // vue3中setup执行时机早于beforeCreate
    // beforeCreate() {
    //   console.log('beforeCreate',this)
    // },
    props:["msg","school"],
    emits:['hello'],
    setup (props,context) {
      console.log('setup',props)
      console.log('setup',context) 
      // console.log('setup',context.attrs) //没有在props中配置的属性，相当于vue2中的this.$attrs
      // console.log('setup',context.emit) //分发自定义事件的函数，相当于this.$emit
      // console.log('setup',context.slots)//收到的插槽内容，相当于this.$slots
      // 数据
      let person=reactive({
        name:'张三',
        age:18,
        sex:'男'
      })
      function sendHello() {
        context.emit('hello',999)
      }
      // 返回一个对象（常用）
      return {
        person,
        sendHello
      }
    }
  }

</script>