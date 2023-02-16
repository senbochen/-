import Vue from 'vue'
// import VueRouter from 'vue-router';
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
// const router = VueRouter.createRouter({
//   // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//   history: VueRouter.createWebHashHistory(),
//   routes: []
// })

// Vue.use(router)

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')

// app.use(router)



registerMicroApps([
  {
    name: 'chen-app', // app name registered
    entry: 'http://localhost:8082/',
    container: '#chen-app',
    activeRule: '/chen-app',
  },
  {
    name: 'vite-app', // app name registered
    entry: 'http://localhost:3012/',
    container: '#vite-app',
    activeRule: '/vite-app',
  }
]);

start();


