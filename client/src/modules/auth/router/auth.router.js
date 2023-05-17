import { requireNoAuth } from './guards'
import AuthLayout from '../layouts/AuthLayout.vue'

export const routes = [
  {
    path: '/oauth',
    name: 'oauth',
    component: () => import(/* webpackChunkName: "oauth" */ '../views/AuthView.vue'),
    meta: { layout: AuthLayout },
    beforeEnter: requireNoAuth,
  },
  {
    path: '/oauth/:provider',
    name: 'oauthp',
    component: () => import(/* webpackChunkName: "oauthp" */ '../views/AuthServiceView.vue'),
    meta: { layout: AuthLayout },
    beforeEnter: requireNoAuth,
  },
]
