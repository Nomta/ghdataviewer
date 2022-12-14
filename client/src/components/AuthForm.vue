<template>
  <ElContainer>
    <ElMain>
      <ElCard>
        <template #header>
          <div class="card-header">
            <h1>Авторизация</h1>
          </div>
        </template>
        <ElButton type="primary" @click="getOAuthLink('github')">
          <IconGithub />&nbsp;Войти через Github
        </ElButton>
      </ElCard>
    </ElMain>
  </ElContainer>
</template>

<script>
import { OAuthApi } from '@/api/OAuthApi'

export default {
  name: 'AuthForm',

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