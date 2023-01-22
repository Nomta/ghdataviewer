<template>
  <UiLoader v-if="loading" />
  <ProfileDetailInfo v-else-if="data" :profile="data" />
  <UiPlaceholder v-else />
</template>

<script>
import ProfileDetailInfo from '@/components/ProfileDetailInfo'
import UiLoader from '@/components/ui/UiLoader'
import UiPlaceholder from '@/components/ui/UiPlaceholder'
import { useUserFetch } from '@/composables/useUserFetcher'

export default {
  name: 'ProfileDetail',

  components: {
    ProfileDetailInfo,
    UiLoader,
    UiPlaceholder,
  },

  props: {
    username: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const { fetchData, ...params } = useUserFetch()
    fetchData(props.username)

    return {
      ...params, /* error, loading, data, */
    }
  },
}
</script>

<style scoped>

</style>