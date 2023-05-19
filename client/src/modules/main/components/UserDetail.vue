<template>
  <UiLoader v-if="loading" />
  <UserDetailInfo v-else-if="data" :user="data" />
  <UiPlaceholder v-else />
</template>

<script>
import UiLoader from '@/modules/shared/components/ui/UiLoader'
import UiPlaceholder from '@/modules/shared/components/ui/UiPlaceholder'
import UserDetailInfo from '../components/UserDetailInfo'
import { useUserFetch } from '../composables/useUserFetcher'

export default {
  name: 'UserDetail',

  components: {
    UserDetailInfo,
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

<style scoped></style>