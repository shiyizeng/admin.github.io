import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import axios from "./myaxios/myaxios.js"
Vue.prototype.$http=axios


//引入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
