<template>
  <ul>
    <li v-for="user in users" :key="user.id" class="list-item">
      <ProfileCard :profile="user">
        <template #default>
          <ProfileLabel :profile="user" />
        </template>
      </ProfileCard>
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useFetch } from '@/composables/useFetch'
import { GithubApi } from '@/api/github'
import ProfileCard from '@/components/ProfileCard'
import ProfileLabel from '@/components/ProfileLabel'

export default {
  name: 'ProfilesView',

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

<style scoped>
.list-item {
  margin-bottom: 0.75rem;
}
</style>