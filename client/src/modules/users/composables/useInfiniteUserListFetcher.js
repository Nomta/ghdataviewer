import { computed } from 'vue'
import { get } from 'lodash'
import { useInfiniteFetch } from '@/modules/shared/composables/useInfiniteFetch'
import { GithubApi } from '../api'

const mapUser = (user) => ({
  id: user.id,
  username: user.login,
  image: user.avatar_url,
  url: user.html_url,
  linkText: 'Профиль на Github',
})

export const useFetchInfiniteUserList = (params) => {
  const fetcher = GithubApi.getInfiniteUserList(params)
  const { data, ...restParams } = useInfiniteFetch(fetcher)
  const users = computed(() => data.value?.map(mapUser))

  return {
    data: users, ...restParams,
  }
}

export const useSearchInfiniteUserList = (params) => {
  const fetcher = GithubApi.searchInfiniteUserList(params)
  const { data, ...restParams } = useInfiniteFetch(
    fetcher,
    (data) => get(data, 'items')
  )
  const users = computed(() => data.value?.map(mapUser))

  return {
    data: users, ...restParams,
  }
}
