<template>
  <IntersectionObserver @intersect="load">
    <div ref="el">
      <slot :data="data" />
    </div>
  </IntersectionObserver>
  <div v-if="loading">LOADING...</div>
</template>

<script>
import { ref } from 'vue'
import IntersectionObserver from '@/components/IntersectionObserver'

export default {
  name: 'InfiniteLoader',

  components: {
    IntersectionObserver,
  },

  props: {
    loader: {
      type: Function,
      required: true
    },
    limit: {
      type: Number,
      default: 0
    },
  },

  setup({ loader, limit }) {
    const el = ref(null)
    const { fetchData, ...params } = loader(limit)

    const load = async (entry) => {
      do {
        await fetchData()
      }
      while (el.value?.getBoundingClientRect().height < entry.rootBounds.height)
    }

    return {
      load, fetchData, el, ...params /* error, loading, data */
    }
  }

}
</script>