import { Storage } from '@/modules/shared/services/storage'
import { PATH_AUTH } from '@/modules/auth/router/auth.router'

const isAuthenticated = () => Boolean(Storage.get('token'))

export const requireAuth = (to) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    return { name: PATH_AUTH }
  }
}
