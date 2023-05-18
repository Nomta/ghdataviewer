import MainLayout from '../layouts/MainLayout.vue'

export const PATH_HOME = 'home1'
export const PATH_USERS = 'users1'
export const PATH_USER_DETAIL = 'userDetail1'

export const routes = [
  {
    path: '/',
    name: PATH_HOME,
    redirect: { name: PATH_USERS },
  },
  {
    path: '/users',
    name: PATH_USERS,
    component: () => import(/* webpackChunkName: "users" */ '../views/UsersView.vue'),
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
