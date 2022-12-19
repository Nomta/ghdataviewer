<template>
  <InfiniteLoader @intersect="load">
    <ProfileList :profiles="users" />
  </InfiniteLoader>
</template>

<script>
import ProfileList from '@/components/ProfileList'
import InfiniteLoader from '@/components/InfiniteLoader'
import { fetchUsers } from '@/composables/fetchUsers'

const LIMIT = 30

export default {
  name: 'ProfilesView',

  components: {
    ProfileList,
    InfiniteLoader,
  },

  setup() {
    // const { users, error, loading, load } = toRefs(fetchUsers(LIMIT))
    return fetchUsers(LIMIT)
  }
}
</script>