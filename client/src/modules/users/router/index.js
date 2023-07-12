import MainLayout from '@/modules/main/layouts/MainLayout.vue'

export const PATH_USERS = 'users'
export const PATH_USER_DETAIL = 'userDetail'

export const routes = [
  {
    path: '/users',
    name: PATH_USERS,
    component: () => import(/* webpackChunkName: "users" */ '../views/UserView.vue'),
    meta: { layout: MainLayout, requiresAuth: true },
    // alias: '/'
  },
  {
    path: '/users/:username',
    name: PATH_USER_DETAIL,
    component: () => import(/* webpackChunkName: "userDetail" */ '../views/UserDetailView.vue'),
    meta: { layout: MainLayout, requiresAuth: true },
    props: true
  },
]
