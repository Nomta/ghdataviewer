<template>
  <InfiniteLoader :loader="loader" :limit="limit" v-slot="{ data }">
    <UiDataList :items="data" v-slot="{ item }">
      <UserListItem :user="item" />
    </UiDataList>
  </InfiniteLoader>
</template>

<script>
import InfiniteLoader from '@/modules/shared/components/ui/InfiniteLoader'
import UiDataList from '@/modules/shared/components/ui/UiDataList'
import UserListItem from '../components/UserListItem'
import { useUsersFetch } from '../composables/useUsersFetcher'

const LIMIT_OF_ENTRIES_PER_PAGE = 10

export default {
  name: 'UserInfiniteList',

  components: {
    UiDataList,
    UserListItem,
    InfiniteLoader,
  },

  setup() {
    return {
      loader: useUsersFetch,
      limit: LIMIT_OF_ENTRIES_PER_PAGE,
    }
  }
}
</script>