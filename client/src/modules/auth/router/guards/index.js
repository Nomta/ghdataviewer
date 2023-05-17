import { Storage } from '@/services/storage'

const isAuthenticated = () => Boolean(Storage.get('token'))

export const requireNoAuth = () => {
  if (isAuthenticated()) {
    return { name: 'home' }
  }
}
