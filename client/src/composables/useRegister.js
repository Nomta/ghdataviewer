import { useStorageProvider, useProvider } from '@/composables/useProvider'

export const TOKEN = 'token'
export const PROFILE = 'profile'
export const LOGIN = 'login'
export const LOGOUT = 'logout'

/** Регистрация глобальных провайдеров */

export const useRegister = () => {

  useStorageProvider(TOKEN)
  useStorageProvider(PROFILE)

  useProvider(LOGIN)
  useProvider(LOGOUT)
}