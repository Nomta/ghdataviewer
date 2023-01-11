<template>
  <div class="loader my-5">
    <VProgressCircular indeterminate />
  </div>
</template>

<script>
export default {
  name: 'UiLoader',
}
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>