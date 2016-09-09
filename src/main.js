import Vue from 'vue'
import App from './App'
import Index from './components/Index'
import Detail from './components/Detail'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(vueResource)

const router = new VueRouter()

router.map({
  '/index': {
    component: Index
  },
  '/detail': {
    component: Detail
  }
})

router.redirect({
  '*': '/index'
})

router.start(App, '#app')
