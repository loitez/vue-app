import { createRouter, createWebHistory } from 'vue-router'

import PrivateChat from '../views/Private-Chat'
import MainPage from '../views/Main-Page'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  }, {
    path: '/private-chat/:id',
    name: 'PrivateChat',
    component: PrivateChat,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'history',
  routes
})

export default router
