<template>
  <AuthForm @submit="getOAuthLink" />
  <RouterView />
</template>

<script>
import AuthForm from '../components/AuthForm'
import { OAuthApi } from '../api'

export default {
  name: 'AuthView',

  components: {
    AuthForm,
  },

  setup() {
    const getOAuthLink = (provider) => {
      OAuthApi.getOAuthLink(provider)
        .then((data) => {
          window.location.href = data.location
        })
    }

    return { getOAuthLink }
  },
}
</script>