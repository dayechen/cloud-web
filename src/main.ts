import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import Config from './common/config';

if (process.env.NODE_ENV === "development") {
    Config.baseURL = "http://192.168.1.18:8080/"
} else {
    Config.baseURL = "/"
}


createApp(App).use(router).use(Vant).mount('#app')