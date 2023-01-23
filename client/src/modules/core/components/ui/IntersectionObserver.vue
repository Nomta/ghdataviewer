<template>
  <slot />
  <div ref="target"></div>
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
    const target = ref(null)

    const observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        emit('intersect', entry)
      }
    }, props.options)

    onMounted(() => {
      observer.observe(target.value)
    })

    onUnmounted(() => {
      observer.disconnect()
    })

    return {
      target
    }
  }
}
</script>