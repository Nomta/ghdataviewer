<template>
  <UiDataList :items="data" :loading="loading" v-slot="{ item }">
    <ReposListItem :repo="item" />
  </UiDataList>
</template>

<script>
import UiDataList from '@/components/ui/UiDataList'
import ReposListItem from '@/components/ReposListItem'
import { userReposFetcher } from '@/composables/useUserFetcher'

export default {
  name: 'reposList',

  components: {
    UiDataList,
    ReposListItem,
  },

  props: {
    username: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const { fetchData, ...params } = userReposFetcher()
    fetchData(props.username)

    return {
      ...params, /* error, loading, data, */
    }
  },
}
</script>