import { createRouter, createWebHistory } from 'vue-router'
import { requireAuth, noRequireAuth } from './guards'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/profiles',
  },
  {
    path: '/profiles',
    name: 'profiles',
    component: () => import(/* webpackChunkName: "profiles" */ '@/views/ProfilesView.vue'),
    meta: { layout: MainLayout, requiresAuth: true },
    // alias: '/'
  },
  {
    path: '/profiles/:profileId',
    name: 'profileDetail',
    component: () => import(/* webpackChunkName: "profiles" */ '@/views/ProfileDetailView.vue'),
    meta: { layout: MainLayout, requiresAuth: true },
    props: true
  },
  {
    path: '/oauth',
    name: 'oauth',
    component: () => import(/* webpackChunkName: "oauth" */ '@/views/AuthView.vue'),
    meta: { layout: AuthLayout },
    beforeEnter: noRequireAuth,
  },
  {
    path: '/oauth/:provider',
    name: 'oauthp',
    component: () => import(/* webpackChunkName: "oauthp" */ '@/views/AuthServiceView.vue'),
    meta: { layout: AuthLayout },
    beforeEnter: noRequireAuth,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '@/views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(requireAuth)

export default router
