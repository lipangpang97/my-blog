import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://ajax.frontend.itheima.net'
Vue.use(ElementUI);


Vue.prototype.$ = $
Vue.prototype.$http = axios
Vue.prototype.$qs = qs
Vue.config.productionTip = false
    // Vue.prototype.$message = Message
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
  
}).$mount('#app')