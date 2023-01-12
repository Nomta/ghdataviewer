<template>
  <div class="d-flex justify-end">
    <UiAutocomplete v-model="profile" :loader="useUserFetcher" :label="label" item-title="login" class="autocomplete" />
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useUserFetcher } from '@/composables/useUserFetcher'
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
      useUserFetcher
    }
  },
}
</script>

<style scoped>
.autocomplete {
  max-width: 34rem;
}
</style>