import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './config/routes'

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})
new Vue({ router }).$mount('#app')
