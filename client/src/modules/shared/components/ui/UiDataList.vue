<template>
  <template v-if="items">
    <ul v-if="items.length">
      <li v-for="item in items" :key="item.id" class="mb-2">
        <slot :item="item" />
      </li>
    </ul>
    <UiPlaceholder v-else />
  </template>
  <UiLoader v-else-if="loading" />
</template>

<script>
import UiLoader from './UiLoader'
import UiPlaceholder from './UiPlaceholder'

export default {
  name: 'UiDataList',

  components: {
    UiLoader,
    UiPlaceholder,
  },

  props: {
    items: {
      type: Array,
      required: true
    },
    loading: Boolean
  },
}
</script>