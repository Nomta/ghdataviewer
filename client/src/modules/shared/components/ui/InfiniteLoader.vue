<template>
  <IntersectionObserver @intersect="load">
    <div ref="el">
      <slot :data="data" />
    </div>
  </IntersectionObserver>
  <UiLoader v-if="loading" />
</template>

<script>
import { ref } from 'vue'
import IntersectionObserver from './IntersectionObserver'
import UiLoader from './UiLoader'

export default {
  name: 'InfiniteLoader',

  components: {
    IntersectionObserver,
    UiLoader,
  },

  props: {
    loader: {
      type: Function,
      required: true
    },
    params: {
      type: Object,
      default: {}
    },
    limit: {
      type: Number,
      default: 0
    },
  },

  setup({ loader, params, limit }) {
    const el = ref(null)
    const { fetchData, data, error, loading } = loader({ ...params, limit })

    const load = async (entry) => {
      do {
        await fetchData()
        if (error.value) break
      }
      while (el.value?.getBoundingClientRect().height < entry.rootBounds.height)
    }

    return {
      load, el, data, loading
    }
  },

}
</script>