<template>
  <UiLoader v-if="loading" />
  <ProfileDetailInfo v-else-if="data" :profile="data" />
  <UiNoData v-else />
</template>

<script>
import ProfileDetailInfo from '@/components/ProfileDetailInfo'
import UiLoader from '@/components/ui/UiLoader'
import UiNoData from '@/components/ui/UiNoData'
import { useUserFetch } from '@/composables/useUserFetcher'

export default {
  name: 'ProfileDetail',

  components: {
    ProfileDetailInfo,
    UiLoader,
    UiNoData,
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