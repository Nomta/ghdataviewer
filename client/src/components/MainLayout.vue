<template>
  <PageHeader>
    <template #auth>
      <LogoutButton @click="logout" />
    </template>
  </PageHeader>
  <ElMenu mode="horizontal"></ElMenu>
  <ElContainer>
    <ElMain>
      <slot></slot>
    </ElMain>
  </ElContainer>
</template>

<script>
import { inject } from 'vue'
import PageHeader from '@/components/PageHeader'

export default {
  name: 'MainLayout',

  components: {
    PageHeader,
  },

  setup() {
    const [logout] = inject('logout')

    return {
      logout,
    }
  }
}
</script>