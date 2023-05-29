<template>
  <UserSearch label="Поиск по имени" v-model="username" />
  <UserInfiniteList :loader="loader" :params="params" :limit="limit" />
</template>

<script>
import { ref, computed } from 'vue'
import UserSearch from '../components/UserSearch'
import UserInfiniteList from '../components/UserInfiniteList'
import {
  useFetchInfiniteUserList,
  useSearchInfiniteUserList
} from '../composables/useInfiniteUserListFetcher'

const LIMIT_OF_ENTRIES_PER_PAGE = 10

export default {
  name: 'UserListView',

  components: {
    UserSearch,
    UserInfiniteList,
  },

  setup() {
    const username = ref('')
    const params = computed(() => {
      return username.value ? { name: username.value } : null
    })
    const loader = computed(() => {
      return username.value ? useSearchInfiniteUserList : useFetchInfiniteUserList
    })

    return {
      loader, params, limit: LIMIT_OF_ENTRIES_PER_PAGE, username,
    }
  }
}
</script>