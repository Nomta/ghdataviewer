<template>
  <div class="loading">Идет запрос...</div>
</template>

<script>
import { computed, inject } from 'vue'
import { useRoute } from 'vue-router'
import { OAuthApi } from '@/api/oauth'

export default {
  name: 'AuthServiceView',

  setup() {
    const route = useRoute()
    const code = computed(() => route.query.code)
    const provider = computed(() => route.params.provider)

    const [{ value: login }] = inject('login')

    if (code.value)
      OAuthApi
        .login(code.value, provider.value)
        .then(login)
  }
}
</script>

<style>
.loading {
  padding-top: 20vh;
  font-size: 2rem;
  display: flex;
  justify-content: center;
}
</style>