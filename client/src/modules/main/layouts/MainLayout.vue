<template>
  <VApp class="bg-grey-lighten-4">
    <PageHeader>
      <template #auth>
        <LogoutButton @click="logout" />
      </template>
    </PageHeader>
    <VMain>
      <VContainer>
        <slot />
      </VContainer>
    </VMain>
  </VApp>
</template>

<script>
import { inject } from 'vue'
import { LOGOUT } from '@/modules/shared/composables/useRegister'
import PageHeader from '../components/PageHeader'
import LogoutButton from '../components/LogoutButton'

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