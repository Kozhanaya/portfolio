import { createWebHistory, createRouter } from 'vue-router'

import Portfolio from './pages/Portfolio.vue'
import About from './pages/About.vue'
import Contacts from './pages/Contacts.vue'

const routes = [
  { path: '/', component: Portfolio },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router