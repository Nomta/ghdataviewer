<template>
  <AuthProvider>
    <PageLayout>
      <RouterView />
    </PageLayout>
  </AuthProvider>
</template>

<script>
import PageLayout from '@/modules/core/layouts/PageLayout.vue'
import AuthProvider from '@/modules/core/providers/AuthProvider.vue'
import { useRegister } from '@/modules/core/composables/useRegister'

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