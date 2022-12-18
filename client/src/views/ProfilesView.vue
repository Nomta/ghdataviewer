<template>
  <ul>
    <li v-for="user in users" :key="user.id" class="mb-2">
      <ProfileCard :profile="user" />
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useFetch } from '@/composables/useFetch'
import { GithubApi } from '@/api/github'
import ProfileCard from '@/components/ProfileCard'

export default {
  name: 'ProfilesView',

  components: {
    ProfileCard,
  },

  setup() {
    const { data, fetchData, error, loading } = useFetch(GithubApi.getUsers)
    const mapUser = (user) => ({
      text: user.login,
      image: user.avatar_url,
      url: user.html_url,
      linkText: 'Профиль на Github',
    })
    const users = computed(() => data.value?.map(mapUser))

    fetchData()

    return { users, error, loading }
  }
}
</script>