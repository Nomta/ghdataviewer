import MainLayout from '../layouts/MainLayout.vue'

export const routes = [
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ '../views/UsersView.vue'),
    meta: { layout: MainLayout, requiresAuth: true },
    // alias: '/'
  },
  {
    path: '/users/:username',
    name: 'userDetail',
    component: () => import(/* webpackChunkName: "users" */ '../views/UserDetailView.vue'),
    meta: { layout: MainLayout, requiresAuth: true },
    props: true
  },
]
