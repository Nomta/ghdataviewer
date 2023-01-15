<template>
  <template v-if="items">
    <ul v-if="items.length">
      <li v-for="item in items" :key="item.id" class="mb-2">
        <slot :item="item" />
      </li>
    </ul>
    <UiNoData v-else />
  </template>
  <UiLoader v-else-if="loading" />
</template>

<script>
import UiLoader from '@/components/ui/UiLoader'
import UiNoData from '@/components/ui/UiNoData'

export default {
  name: 'UiDataList',

  components: {
    UiLoader,
    UiNoData,
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