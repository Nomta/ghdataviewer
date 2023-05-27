<template>
  <div class="d-flex justify-end">
    <UiInput v-model.trim="value" :label="label" class="user-search mb-3" />
  </div>
</template>

<script>
import { computed, onUnmounted } from 'vue'
import { debounce } from 'lodash'
import UiInput from '@/modules/shared/components/ui/UiInput'

const DELAY = 500

export default {
  name: 'UserSearch',

  components: {
    UiInput,
  },

  props: {
    modelValue: String,
    label: String,
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const debouncedUpdateValue = debounce((value) => {
      emit('update:modelValue', value)
    }, DELAY)

    const value = computed({
      get: () => props.modelValue,
      set: debouncedUpdateValue
    })

    onUnmounted(() => {
      debouncedUpdateValue.cancel()
    })

    return { value }
  },
}
</script>

<style scoped>
@media (min-width: 768px) {
  .user-search {
    max-width: 24rem;
  }
}
</style>