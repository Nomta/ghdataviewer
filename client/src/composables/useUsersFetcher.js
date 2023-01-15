import { computed } from 'vue'
import { useInfiniteFetch } from '@/composables/useInfiniteFetch'
import { GithubApi } from '@/api/github'

const mapUser = (user) => ({
  id: user.id,
  username: user.login,
  image: user.avatar_url,
  url: user.html_url,
  linkText: 'Профиль на Github',
})

export const useUsersFetcher = (limit) => {
  const fetcher = GithubApi.getInfiniteUserList({ limit })
  const { data, ...params } = useInfiniteFetch(fetcher)
  const users = computed(() => data.value?.map(mapUser))

  return {
    data: users, ...params,
  }
}
