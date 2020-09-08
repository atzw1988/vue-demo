import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/notify',
    name: 'notify',
    meta: {
      title: '重要告知'
    },
    component: () => import('@/views/notify')
  },
  {
    path: '/form',
    name: 'form',
    meta: {
      title: '信息填写'
    },
    component: () => import('@/views/form')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes: routes,
  base: '/'
})

export default router
