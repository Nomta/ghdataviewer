import { requireNoAuth } from './guards'
import AuthLayout from '../layouts/AuthLayout.vue'

export const PATH_AUTH = 'oauth'
export const PATH_AUTH_PROVIDER = 'oauthp'

export const routes = [
  {
    path: '/oauth',
    name: PATH_AUTH,
    component: () => import(/* webpackChunkName: "oauth" */ '../views/AuthView.vue'),
    meta: { layout: AuthLayout },
    beforeEnter: requireNoAuth,
  },
  {
    path: '/oauth/:provider',
    name: PATH_AUTH_PROVIDER,
    component: () => import(/* webpackChunkName: "oauthp" */ '../views/AuthServiceView.vue'),
    meta: { layout: AuthLayout },
    beforeEnter: requireNoAuth,
  },
]
