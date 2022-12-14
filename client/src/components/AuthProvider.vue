<template>
  <slot />
</template>

<script>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'AuthProvider',

  setup() {
    const [, setToken] = inject('token')
    const [, setProfile] = inject('profile')
    const [, setLogin] = inject('login')
    const [, setLogout] = inject('logout')

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