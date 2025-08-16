import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Info from '@/components/Info.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {  name: 'home', path: '/', component: Home },
    {  name: 'advancehome', redirect: { name: 'home' } },
    {  name: 'info', path: '/info', component: Info }    
  ],
})

export default router
