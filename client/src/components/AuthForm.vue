<template>
  <VCard class="card">
    <VCardItem class="px-10">
      <div class="card-header text-center">
        <h1>Авторизация</h1>
      </div>
    </VCardItem>

    <VDivider />
    <VCardActions class="px-10 text-center">
      <VBtn color="success" @click="getOAuthLink('github')">
        <IconGithub />&nbsp;
        Войти через Github
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<script>
import { OAuthApi } from '@/api/oauth'
import IconGithub from '@/components/icons/IconGithub.vue'

export default {
  name: 'AuthForm',

  components: {
    IconGithub,
  },

  setup() {
    const getOAuthLink = (provider) => {
      OAuthApi.getOAuthLink(provider)
        .then((data) => {
          window.location.href = data.location
        })
    }

    return { getOAuthLink }
  }
}
</script>

<style scoped>
.card {
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
}
</style>