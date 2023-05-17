import { createRouter, createWebHistory } from 'vue-router'
import { routes as authRoutes } from '@/modules/auth/router/auth.router'
import { routes as mainRoutes } from '@/modules/main/router/main.router'
import { requireAuth } from './guards'

const routes = [

  /* index page */
  {
    path: '/',
    name: 'home',
    redirect: '/users',
  },

  /* auth page */

  ...authRoutes,

  /* app pages */

  ...mainRoutes,

  /* not found page */

  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(requireAuth)

export default router
