<template>
  <VTextField v-model="value" :label="label" density="compact" hide-details variant="solo" />
</template>

<script>
import { useModel } from '@/modules/shared/composables/useModel'

export default {
  name: 'UiInput',

  props: {
    modelValue: {
      type: String,
      required: true
    },
    label: String,
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const value = useModel(props, emit)

    return { value }
  }
}
</script>

<style scoped></style>