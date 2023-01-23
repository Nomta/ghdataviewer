<template>
  <VBtn type="primary" class="pr-md-0" @click="logout">
    <IconLogout />&nbsp;Выйти
  </VBtn>
</template>

<script>
import IconLogout from '@/modules/core/components/icons/IconLogout'

export default {
  name: 'LogoutButton',

  components: {
    IconLogout,
  },

  emits: ['logout'],

  setup(props, { emit }) {
    const logout = () => {
      emit('logout')
    }

    return {
      logout
    }
  }
}
</script>