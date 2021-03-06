import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import routes from './config/routes'
import components from './components/'
import store from './store'

import elementUi from 'element-ui'

import 'element-ui/lib/theme-default/index.css'
import './style/font-awesome/less/font-awesome.less'

import './style/base.css'

Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase())
    Vue.component(`v${name}`, components[key])
})

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(elementUi)

const router = new VueRouter({
    routes
})

new Vue({ router, store, data: {eventHub: new Vue()} }).$mount('#app')
