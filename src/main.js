import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// 导入弹框组件
// import { Message } from 'element-ui'




// import { Button } from 'element-ui';
// import { Form, FormItem } from 'element-ui';
// import { Input } from 'element-ui';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
// import { from } from 'core-js/fn/array'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.use(ElementUI);

// Vue.use(Button)
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Input)
Vue.prototype.$ = $
Vue.prototype.$http = axios
Vue.config.productionTip = false
    // Vue.prototype.$message = Message
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')