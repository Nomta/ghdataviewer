import { useStorageProvider, useProvider } from '@/composables/useProvider'

/** Регистрация глобальных провайдеров */

export const useRegister = () => {

  useStorageProvider('token')
  useStorageProvider('profile')

  useProvider('login')
  useProvider('logout')
}