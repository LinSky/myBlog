import Vue from 'vue'
import App from './App'
import Index from './components/Index'
import Detail from './components/Detail'
import Create from './components/Create'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(vueResource)

const router = new VueRouter()

router.map({
  '/index': {
    component: Index
  },
  '/create': {
    component: Create
  },
  '/detail/:articleId': {
    name: 'detail',
    component: Detail
  }
})

router.redirect({
  '*': '/index'
})

router.start(App, '#app')
