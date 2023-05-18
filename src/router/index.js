import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/Home/Home.vue')
        },
        {
          path: '/students',
          name: 'students',
          component: () => import('../views/Students/Students.vue')
        },
        {
          path: '/teachers',
          name: 'teachers',
          component: () => import ('../views/Teachers/Teachers.vue'),
      }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import ('../views/Error/Error.vue')
    }
  ]
})

export default router
