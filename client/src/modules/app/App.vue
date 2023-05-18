<template>
  <AuthProvider>
    <AppLayout>
      <RouterView />
    </AppLayout>
  </AuthProvider>
</template>

<script>
import { useRegister } from '@/shared/composables/useRegister'
import AppLayout from './layouts/AppLayout.vue'
import AuthProvider from './providers/AuthProvider.vue'

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