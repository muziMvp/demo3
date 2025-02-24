const { defineConfig } = require('@vue/cli-service');
const {VantResolver} = require("unplugin-vue-components/resolvers");
const ComponentsPlugin = require("unplugin-vue-components/webpack");


module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        // 接口
        "/api": {
          // target: "http://xybg.js118114.com/zjyproject-admin-gateway", //正式环境
          // target: "http://192.168.0.126:15080/zjyproject-admin-gateway", // 测试环境
          target: "http://117.80.230.87:9092/zjyproject-admin-gateway", // 测试环境
          // target: "http://58.209.81.242:9091/zjyproject-admin-gateway", // 测试环境
          // target: "http://49.64.86.252/:8000/zjyproject-admin-gateway", // 正式不走域名环境
          pathRewrite: {
            "/api": "",
          },
          changeOrigin: true,
        },
        // 图片/视频
        "/assets": {
          // target: "http://xybg.js118114.com/zjyproject-admin-gateway", //正式环境
          target: "http://192.168.102.120", // 测试环境
          pathRewrite: {
            "/assets": "",
          },
          changeOrigin: true,
        },
      },
    },
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
})
