import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalculatorView from '@/views/CalculatorView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: CalculatorView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
