<template>
  <div class="d-flex justify-end">
    <UiAutocomplete v-model="profile" :loader="loader" :label="label" item-title="login" class="select mb-n3" />
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useSearchUser } from '@/composables/useUserFetcher'
import UiAutocomplete from '@/components/ui/UiAutocomplete'

export default {
  name: 'ProfileSearch',

  components: {
    UiAutocomplete,
  },

  props: {
    label: String,
  },

  emits: ['change'],

  setup(props, { emit }) {
    const profile = ref(null)

    watch(profile, (value) => {
      emit('change', value)
    })

    return {
      profile,
      loader: useSearchUser,
    }
  },
}
</script>

<style scoped>
@media (min-width: 768px) {
  .select {
    max-width: 24rem;
  }
}
</style>