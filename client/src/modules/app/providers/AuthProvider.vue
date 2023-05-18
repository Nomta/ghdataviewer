<template>
  <slot />
</template>

<script>
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import { LOGIN, LOGOUT, PROFILE, TOKEN } from '@/shared/composables/useRegister'

export default {
  name: 'AuthProvider',

  setup() {
    const [, setToken] = inject(TOKEN)
    const [, setProfile] = inject(PROFILE)
    const [, setLogin] = inject(LOGIN)
    const [, setLogout] = inject(LOGOUT)

    const router = useRouter()

    const login = (data) => {
      setToken(data.accessToken)
      setProfile(data.profile)

      router.push({ name: 'home' })
    }

    setLogin(login)

    const logout = () => {
      setToken(null)
      setProfile(null)

      router.push({ name: 'oauth' })
    }

    setLogout(logout)
  },
}
</script>