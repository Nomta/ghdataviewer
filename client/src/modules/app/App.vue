<template>
  <AuthProvider>
    <AppLayout>
      <RouterView />
    </AppLayout>
  </AuthProvider>
</template>

<script>
import AppLayout from './layouts/AppLayout.vue'
import AuthProvider from './providers/AuthProvider.vue'
import { useRegister } from './composables/useRegister'

export default {
  name: 'App',

  components: {
    AppLayout,
    AuthProvider,
  },

  setup() {
    useRegister()
  },
}
</script>