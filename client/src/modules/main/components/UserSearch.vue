<template>
  <div class="d-flex justify-end">
    <UiAutocomplete v-model="user" :loader="loader" :label="label" item-title="login" class="select mb-n3" />
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import UiAutocomplete from '@/modules/app/components/ui/UiAutocomplete'
import { useSearchUser } from '../composables/useUserFetcher'

export default {
  name: 'UserSearch',

  components: {
    UiAutocomplete,
  },

  props: {
    label: String,
  },

  emits: ['change'],

  setup(props, { emit }) {
    const user = ref(null)

    watch(user, (value) => {
      emit('change', value)
    })

    return {
      user,
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