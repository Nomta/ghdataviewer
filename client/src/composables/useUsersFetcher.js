import { computed } from 'vue'
import { useInfiniteFetch } from '@/composables/useInfiniteFetch'
import { GithubApi } from '@/api/github'

const getReactiveQuery = (users, limit) => {
  const since = computed(() => users.value.length ? users.value.at(-1).id : 0)
  const query = computed(() => `?since=${since.value}&per_page=${limit}`)

  return [query]
}

const mapUser = (user) => ({
  id: user.id,
  text: user.login,
  image: user.avatar_url,
  url: user.html_url,
  linkText: 'Профиль на Github',
})

export const useUsersFetcher = (limit) => {

  const { data, fetchData, error, loading } = useInfiniteFetch(GithubApi.getUsers, getReactiveQuery, limit)
  const updatedData = computed(() => data.value.map(mapUser))

  return {
    data: updatedData,
    error,
    loading,
    fetchData
  }
}
