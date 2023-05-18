import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import ('../views/Dashboard/Dashboard.vue'),
        },
        {
          path: '/students',
          name: 'students',
          component: () => import ('../views/Students/Students.vue'),
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
