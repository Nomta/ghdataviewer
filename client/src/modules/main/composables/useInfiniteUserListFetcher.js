import { computed } from 'vue'
import { useInfiniteFetch } from '@/modules/shared/composables/useInfiniteFetch'
import { GithubApi } from '../api'

const mapUser = (user) => ({
  id: user.id,
  username: user.login,
  image: user.avatar_url,
  url: user.html_url,
  linkText: 'Профиль на Github',
})

export const useFetchInfiniteUserList = (limit) => {
  const fetcher = GithubApi.getInfiniteUserList({ limit })
  const { data, ...restParams } = useInfiniteFetch(fetcher)
  const users = computed(() => data.value?.map(mapUser))

  return {
    data: users, ...restParams,
  }
}
