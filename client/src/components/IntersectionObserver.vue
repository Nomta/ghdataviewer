<template>
  <slot />
  <div ref="root"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'IntersectionObserver',

  props: {
    options: {
      type: Object,
      default: null
    },
  },

  emits: ['intersect'],

  setup(props, { emit }) {
    const root = ref(null)

    const observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        emit('intersect')
      }
    }, props.options)

    onMounted(() => {
      observer.observe(root.value)
    })

    onUnmounted(() => {
      observer.disconnect()
    })

    return {
      root
    }
  }
}
</script>