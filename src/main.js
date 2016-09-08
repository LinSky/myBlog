import Vue from 'vue'
import App from './App'
import Index from './components/Index'
import Detail from './components/Detail'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
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
