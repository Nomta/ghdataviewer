<template>
  <ProfileSearch label="Поиск по имени" @change="handleSearchProfile" />
</template>

<script>
import { useRouter } from 'vue-router'
import ProfileSearch from '@/components/ProfileSearch'

export default {
  name: 'ProfileSelect',

  components: {
    ProfileSearch,
  },

  setup() {
    const router = useRouter()
    const handleSearchProfile = ({ login }) => {
      router.push({ name: 'profileDetail', params: { username: login } })
    }
    return {
      handleSearchProfile,
    }
  }
}
</script>