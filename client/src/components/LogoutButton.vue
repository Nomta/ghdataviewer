<template>
  <ElButton type="primary" @click="logout">
    <IconLogout />&nbsp;Выйти
  </ElButton>
</template>

<script>
export default {
  name: 'LogoutButton',

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