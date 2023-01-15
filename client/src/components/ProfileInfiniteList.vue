<template>
  <InfiniteLoader :loader="loader" :limit="limit" v-slot="{ data }">
    <UiDataList :items="data" v-slot="{ item }">
      <ProfileListItem :profile="item" />
    </UiDataList>
  </InfiniteLoader>
</template>

<script>
import InfiniteLoader from '@/components/ui/InfiniteLoader'
import UiDataList from '@/components/ui/UiDataList'
import ProfileListItem from '@/components/ProfileListItem'
import { useUsersFetch } from '@/composables/useUsersFetcher'

const LIMIT_OF_ENTRIES_PER_PAGE = 10

export default {
  name: 'ProfileInfiniteList',

  components: {
    UiDataList,
    ProfileListItem,
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