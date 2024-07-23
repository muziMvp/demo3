export default {
  install(app) {
    console.log(app,'install')
    app.config.globalProperties.$loading='...加载中'
  }
}