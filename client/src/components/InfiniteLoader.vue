<template>
  <IntersectionObserver @intersect="intersect">
    <div ref="container">
      <slot :data="data" />
    </div>
    <!-- TARGET -->
  </IntersectionObserver>
  <div v-if="loading">LOADING...</div>
</template>

<script>
import { ref, toRefs } from 'vue'
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
    const container = ref(null)
    const { data, error, loading, fetchData } = loader(limit)

    const intersect = async (entry) => {
      await fetchData()

      while (container.value?.getBoundingClientRect()?.height < entry.rootBounds?.height) {
        await fetchData()
      }
    }
    return {
      intersect,
      data, error, loading, fetchData, container
    }
  }

}
</script>