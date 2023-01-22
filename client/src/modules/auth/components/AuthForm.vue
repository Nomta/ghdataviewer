<template>
  <VCard class="card">
    <VCardItem class="px-10">
      <div class="card-header text-center">
        <h1>Авторизация</h1>
      </div>
    </VCardItem>

    <VDivider />
    <VCardActions class="px-10 text-center">
      <VBtn color="success" @click="submitWithProvider('github')">
        <IconGithub />&nbsp;
        Войти через Github
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<script>
import IconGithub from '@/assets/icons/IconGithub.vue'

export default {
  name: 'AuthForm',

  components: {
    IconGithub,
  },

  emits: ['submit'],

  setup(props, { emit }) {
    const submitWithProvider = (provider) => {
      emit('submit', provider)
    }

    return { submitWithProvider }
  },
}
</script>

<style scoped>
.card {
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
}
</style>