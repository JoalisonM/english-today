import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'about', component: () => import('@/views/About.vue') },
  { path: '/recommendations', name: 'recommendations', component: () => import('@/views/Recommendations.vue') },
  { path: '/contents', name: 'contents', component: () => import('@/views/Contents.vue') },
  { path: '/contents/:id', name: 'content', component: () => import('@/views/Content.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
