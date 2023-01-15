<template>
  <UiDataList :items="data" :loading="loading" v-slot="{ item }">
    <ReposListItem :repo="item" />
  </UiDataList>
</template>

<script>
import UiDataList from '@/components/ui/UiDataList'
import ReposListItem from '@/components/ReposListItem'
import { useUserReposFetch } from '@/composables/useUserFetcher'

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
    const { fetchData, ...params } = useUserReposFetch()
    fetchData(props.username)

    return {
      ...params, /* error, loading, data, */
    }
  },
}
</script>