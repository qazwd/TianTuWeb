import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue' // Modify the component path according to the actual situation

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
