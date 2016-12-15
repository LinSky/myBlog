import App from './../App.vue'
export default [
  {
    path: '/',
    component: App,
    children: [
      {
          path: '/',
          name: 'home',
          component: resolve => require(['../pages/home/'], resolve)
      },
      {
          path: '/article/:id',
          name: 'article',
          component: resolve => require(['../pages/article/'], resolve)
      }
    ]
  },
  {
    path: '/write',
    name: 'write',
    component: resolve => require(['../pages/write/'], resolve)
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['../pages/login/'], resolve)
  }
]
