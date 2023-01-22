<template>
  <div class="auth-service">Идет запрос...</div>
</template>

<script>
import { computed, inject } from 'vue'
import { useRoute } from 'vue-router'
import { LOGIN } from '@/composables/useRegister'
import { OAuthApi } from '../api'

export default {
  name: 'AuthServiceView',

  setup() {
    const route = useRoute()
    const code = computed(() => route.query.code)
    const provider = computed(() => route.params.provider)

    const [{ value: login }] = inject(LOGIN)

    if (code.value)
      OAuthApi
        .login(code.value, provider.value)
        .then(login)
  }
}
</script>

<style>
.auth-service {
  padding-top: 10vh;
  font-size: 2rem;
  display: flex;
  justify-content: center;
}
</style>