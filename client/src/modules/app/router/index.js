import { createRouter, createWebHistory } from 'vue-router'
import { routes as authRoutes } from '@/modules/auth'
import { routes as mainRoutes } from '@/modules/main'
import { requireAuth } from './guards'

export const PATH_NOT_FOUND = 'notFound'

const routes = [

  /* auth page */ ...authRoutes,

  /* app pages */ ...mainRoutes,

  /* not found page */

  {
    path: '/:pathMatch(.*)*',
    name: PATH_NOT_FOUND,
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(requireAuth)

export default router
