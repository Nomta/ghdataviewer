<template>
  <VApp class="bg-grey-lighten-4">
    <PageHeader>
      <template #auth>
        <LogoutButton @click="logout" />
      </template>
    </PageHeader>
    <VContainer>
      <slot />
    </VContainer>
  </VApp>
</template>

<script>
import { inject } from 'vue'
import PageHeader from '@/components/PageHeader'
import LogoutButton from '@/components/LogoutButton'
import { LOGOUT } from '@/composables/useRegister'

export default {
  name: 'MainLayout',

  components: {
    PageHeader,
    LogoutButton,
  },

  setup() {
    const [logout] = inject(LOGOUT)

    return {
      logout,
    }
  }
}
</script>