<template>
  <slot />
</template>

<script>
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import { LOGIN, LOGOUT, PROFILE, TOKEN } from '@/modules/shared/composables/useRegister'
import { PATH_HOME } from '@/modules/main/router/main.router'
import { PATH_AUTH } from '@/modules/auth/router/auth.router'

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

      router.push({ name: PATH_HOME })
    }

    setLogin(login)

    const logout = () => {
      setToken(null)
      setProfile(null)

      router.push({ name: PATH_AUTH })
    }

    setLogout(logout)
  },
}
</script>