<template>
  <VAutocomplete v-model="select" v-model:search="search" :loading="loading" :items="data" :item-title="itemTitle"
    :label="label" density="compact" return-object hide-no-data variant="solo" />
</template>

<script>
import { ref, watch, onUnmounted } from 'vue'
import { debounce } from 'lodash'
import { useModel } from '@/modules/shared/composables/useModel'

const DELAY = 500

export default {
  name: 'UiAutocomplete',

  props: {
    modelValue: {
      type: [Object, String],
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
    itemTitle: String,
    label: String,
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const select = useModel(props, emit)
    const search = ref(null)

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
      ...params /* error, loading */
    }
  }
}
</script>