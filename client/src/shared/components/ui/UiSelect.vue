<template>
  <VSelect v-model="select" :items="items" :label="label" density="compact" hide-no-data variant="solo" />
</template>

<script>
import { useModel } from '@/shared/composables/useModel'

export default {
  name: 'UiSelect',

  props: {
    modelValue: {
      type: [Object, String],
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    label: String,
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const select = useModel(props, emit)

    return { select }
  }
}
</script>