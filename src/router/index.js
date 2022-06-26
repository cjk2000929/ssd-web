import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import classSelection from '@/views/classSelection'
import index from '@/views/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    children: [{ path: '', component: index }]
  }
]

const router = new VueRouter({
  routes
})

export default router
