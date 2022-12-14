<template>
  <div class="logo">
    <RouterLink to="/">
      <h1 class="logo__title">Github Viewer</h1>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped>
.logo {
  flex-grow: 1;
}

.logo__title {
  color: var(--el-color-primary);
}
</style>