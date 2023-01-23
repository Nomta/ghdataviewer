import { createRouter, createWebHistory } from 'vue-router'
import { requireAuth, noRequireAuth } from './guards'
import MainLayout from '@/modules/core/layouts/MainLayout.vue'
import AuthLayout from '@/modules/core/layouts/AuthLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/users',
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ '@/modules/main/views/UsersView.vue'),
    meta: { layout: MainLayout, requiresAuth: true },
    // alias: '/'
  },
  {
    path: '/users/:username',
    name: 'userDetail',
    component: () => import(/* webpackChunkName: "users" */ '@/modules/main/views/UserDetailView.vue'),
    meta: { layout: MainLayout, requiresAuth: true },
    props: true
  },
  {
    path: '/oauth',
    name: 'oauth',
    component: () => import(/* webpackChunkName: "oauth" */ '@/modules/auth/views/AuthView.vue'),
    meta: { layout: AuthLayout },
    beforeEnter: noRequireAuth,
  },
  {
    path: '/oauth/:provider',
    name: 'oauthp',
    component: () => import(/* webpackChunkName: "oauthp" */ '@/modules/auth/views/AuthServiceView.vue'),
    meta: { layout: AuthLayout },
    beforeEnter: noRequireAuth,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '@/modules/core/components/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(requireAuth)

export default router
