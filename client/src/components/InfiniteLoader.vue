<template>
  <IntersectionObserver @intersect="fetchData">
    <slot :data="data" />
  </IntersectionObserver>
  <div v-if="loading">LOADING...</div>
</template>

<script>
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
    // const { data, error, loading, fetchData } = toRefs(loader(limit))
    return loader(limit)
  }

}
</script>