<template>
  <UserSearch label="Поиск по имени" @change="handleSearchUser" />
</template>

<script>
import { useRouter } from 'vue-router'
import UserSearch from '../components/UserSearch'

export default {
  name: 'UserSelect',

  components: {
    UserSearch,
  },

  setup() {
    const router = useRouter()
    const handleSearchUser = ({ login }) => {
      router.push({ name: 'userDetail', params: { username: login } })
    }
    return {
      handleSearchUser,
    }
  }
}
</script>