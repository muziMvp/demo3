import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loading from './components/loading'
import "@/assets/css/vant.css";
import "@/assets/css/custom.scss";
import 'vant/es/image-preview/style';




createApp(App).use(store).use(router).use(loading).mount('#app')
