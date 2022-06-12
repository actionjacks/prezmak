import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainHome from '@/views/MainHome.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main-home',
    component: MainHome
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
