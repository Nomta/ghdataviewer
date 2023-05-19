<template>
  <UserSearch label="Поиск по имени" @change="handleSearchUser" />
</template>

<script>
import { useRouter } from 'vue-router'
import { PATH_USER_DETAIL } from '../router/main.router'
import UserSearch from '../components/UserSearch'

export default {
  name: 'UserSelect',

  components: {
    UserSearch,
  },

  setup() {
    const router = useRouter()
    const handleSearchUser = ({ login }) => {
      router.push({ name: PATH_USER_DETAIL, params: { username: login } })
    }
    return {
      handleSearchUser,
    }
  }
}
</script>