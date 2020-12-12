import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'
import Arts from '../components/articles/articles.vue'
import Artone from '../components/articles/articleone.vue'
import Arttwo from '../components/articles/articletwo.vue'
import Artthree from '../components/articles/articlethree.vue'
import Artfour from '../components/articles/articlefour.vue'
import Regin from '../components/regin.vue'
import Life from '../components/life.vue'

import Reginone from '../components/regin/reginone.vue'

// import { from } from 'core-js/fn/array'
Vue.use(VueRouter)
const router = new VueRouter({
        mode: 'history',

        routes: [
            { path: '/', redirect: '/login' },
            { path: '/login', component: Login },
            { path: '/home', component: Home },
            { path: '/artone', component: Artone },
            { path: '/arttwo', component: Arttwo },
            { path: '/artthree', component: Artthree },
            { path: '/artfour', component: Artfour },
            { path: '/articles', component: Arts },
            { path: '/regin', component: Regin },
            { path: '/life', component: Life },
            { path: '/reginone', component: Reginone },
        ]
    })
    // 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to:将要访问的路径
    // from：代表从哪个路径跳转而来
    // next：是一个函数，表示放行
    if (to.path === '/login') {
        return next();

    }
    // 获取token
    const tokensStr = window.sessionStorage.getItem("token")
    if (!tokensStr) {
        // 如果token不存在，那么强制跳转到登录页面
        return next('/login')
    }
    // 如果token存在，那么放行/home
    next();
})

export default router