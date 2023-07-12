import { PATH_USERS } from "@/modules/users"

export const PATH_HOME = 'home'

export const routes = [
  {
    path: '/',
    name: PATH_HOME,
    redirect: { name: PATH_USERS },
  },
]
