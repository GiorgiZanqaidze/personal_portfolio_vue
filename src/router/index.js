import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoreSkills from '@/views/MoreSkills.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [{ path: 'overlay/skills', props: true, component: MoreSkills, name: 'skills' }]
    }
  ]
})

export default router
