import App from './../App'

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/home',
                component: resolve => require(['../pages/home/'], resolve)
            }
        ]
    }
]
