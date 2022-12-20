
import { ref, computed, watchEffect } from 'vue'
import { useFetch } from '@/composables/useFetch'
import { GithubApi } from '@/api/github'

const mapUser = (user) => ({
  id: user.id,
  text: user.login,
  image: user.avatar_url,
  url: user.html_url,
  linkText: 'Профиль на Github',
})

export const useUsersFetcher = (limit) => {
  const users = ref([])
  const since = computed(() => users.value.length ? users.value.at(-1).id : 0)
  const query = computed(() => `?since=${since.value}&per_page=${limit}`)

  const { data, fetchData, error, loading } = useFetch(GithubApi.getUsers)

  watchEffect(() => {
    if (data.value) {
      users.value = users.value.concat(data.value.map(mapUser))
    }
  })

  const fetchUsers = async () => {
    try {
      await fetchData(query.value)
    } catch (err) {
      console.error(err)
    }
  }

  return {
    data: users,
    error,
    loading,
    fetchData: fetchUsers
  }
}
