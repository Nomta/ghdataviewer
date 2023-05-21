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
import { useFetchInfiniteUserList } from '../composables/useInfiniteUserListFetcher'

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
      loader: useFetchInfiniteUserList,
      limit: LIMIT_OF_ENTRIES_PER_PAGE,
    }
  }
}
</script>