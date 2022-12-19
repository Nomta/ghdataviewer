<template>
  <slot />
  <div v-intersect="intersect"></div>
</template>

<script>
export default {
  name: 'InfiniteLoader',

  emits: ['intersect'],

  setup(props, { emit }) {
    const intersect = () => {
      emit('intersect')
    }

    return { intersect }
  }

}
</script>