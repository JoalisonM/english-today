import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import('@/views/About.vue') },
  { path: '/contents', name: 'Contents', component: () => import('@/views/Contents.vue') },
  { path: '/contents/:id', component: () => import('@/views/Content.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
