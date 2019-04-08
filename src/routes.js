import Home from './views/Home.vue'
export default [
  {
    path: '/',
    name: 'home',
    meta: {
      NonMenu: true,
      title: '首页',
      layout: 'acDefault'
    },
    component: Home
  }
]
