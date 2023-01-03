import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import chat from '../views/chat.vue'
import list from '../views/list.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/list',
    name: 'list',
    component: list
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
