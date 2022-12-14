<template>
  <template v-if="layout">
    <component :is="layout">
      <slot />
    </component>
  </template>
  <slot v-else />
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'PageLayout',

  setup() {

    const route = useRoute()
    const layout = computed(() => route.meta?.layout)

    return {
      layout
    }
  }
}
</script>