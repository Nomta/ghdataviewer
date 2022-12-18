<template>
  <AuthProvider>
    <PageLayout>
      <RouterView />
    </PageLayout>
  </AuthProvider>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue'
import AuthProvider from '@/providers/AuthProvider.vue'
import { useRegister } from '@/composables/useRegister'

export default {
  name: 'App',

  components: {
    PageLayout,
    AuthProvider,
  },

  setup() {
    useRegister()
  },
}
</script>