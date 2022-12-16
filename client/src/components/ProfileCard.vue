<template>
  <ElCard class="box-card">
    <template #header>
      <div class="card-header">
        <slot />
        <ElButton class="button" text>Перейти</ElButton>
      </div>
    </template>
  </ElCard>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'ProfileCard',
}
</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>