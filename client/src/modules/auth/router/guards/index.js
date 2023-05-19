import { Storage } from '@/modules/shared/services/storage'
import { PATH_HOME } from '@/modules/main/router/main.router'

const isAuthenticated = () => Boolean(Storage.get('token'))

export const requireNoAuth = () => {
  if (isAuthenticated()) {
    return { name: PATH_HOME }
  }
}
