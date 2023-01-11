<template>
  <InfiniteLoader :loader="useUsersFetcher" :limit="limit" v-slot="{ data }">
    <ProfileList :profiles="data" />
  </InfiniteLoader>
</template>

<script>
import InfiniteLoader from '@/components/ui/InfiniteLoader'
import ProfileList from '@/components/ProfileList'
import { useUsersFetcher } from '@/composables/useUsersFetcher'

const LIMIT_OF_ENTRIES_PER_PAGE = 5

export default {
  name: 'ProfilesView',

  components: {
    ProfileList,
    InfiniteLoader,
  },

  setup() {
    return {
      useUsersFetcher,
      limit: LIMIT_OF_ENTRIES_PER_PAGE
    }
  }
}
</script>