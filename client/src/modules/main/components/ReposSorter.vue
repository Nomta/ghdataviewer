<template>
  <div class="d-flex justify-end">
    <UiSelect v-model="select" :items="options" :label="label" class="select mb-n3" />
  </div>
</template>

<script>
import UiSelect from '@/modules/core/components/ui/UiSelect'
import { useModel } from '@/modules/core/composables/useModel'

const options = [
  { title: 'по времени создания', value: 'created' },
  { title: 'по времени обновления', value: 'updated' },
  { title: 'по имени', value: 'full_name' },
]

export default {
  name: 'ReposSorter',

  components: {
    UiSelect,
  },

  props: {
    modelValue: {
      type: [Object, String],
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: 'Сортировать'
    },
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const select = useModel(props, emit)

    return { select, options }
  }
}
</script>

<style scoped>
@media (min-width: 768px) {
  .select {
    max-width: 24rem;
  }
}
</style>