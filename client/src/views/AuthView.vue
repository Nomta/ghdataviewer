<template>
  <AuthForm />
  <RouterView />
</template>

<script>
import AuthForm from '@/components/AuthForm'

export default {
  name: 'AuthView',

  components: {
    AuthForm,
  },
}
</script>