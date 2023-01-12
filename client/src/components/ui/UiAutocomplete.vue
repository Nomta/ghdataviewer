<template>
  <VAutocomplete v-model="select" v-model:search="search" :loading="loading" :items="data" :label="label"
    density="comfortable" hide-no-data />
</template>

<script>
import { ref, computed, watch, onUnmounted } from 'vue'
import { debounce } from 'lodash'

const DELAY = 300

export default {
  name: 'UiAutocomplete',

  props: {
    modelValue: {
      type: Object,
      required: true
    },
    loader: {
      type: Function,
      required: true
    },
    limit: {
      type: Number,
      default: 10
    },
    label: String,
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const search = ref(null)

    const select = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value)
    })

    const { fetchData, ...params } = props.loader()

    const defineParams = (value) => ({
      name: value,
      limit: props.limit,
    })

    const debouncedFetchData = debounce(fetchData, DELAY)

    watch(search, (value) => {
      if (!String(value).trim()) {
        emit('update:modelValue', null)
      }
      else if (value !== select.value) {
        debouncedFetchData(defineParams(value))
      }
    })

    onUnmounted(() => {
      debouncedFetchData.cancel()
    })

    return {
      search,
      select,
      ...params /* error, loading, data */
    }
  }
}
</script>

<style scoped>

</style>