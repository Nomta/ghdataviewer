<template>
  <AuthProvider>
    <PageLayout>
      <RouterView />
    </PageLayout>
  </AuthProvider>
</template>

<script>
import PageLayout from '@/components/PageLayout.vue'
import AuthProvider from '@/components/AuthProvider.vue'
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