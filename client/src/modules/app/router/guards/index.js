import { Storage } from '@/services/storage'

const isAuthenticated = () => Boolean(Storage.get('token'))

export const requireAuth = (to) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    return { name: 'oauth' }
  }
}