import { computed } from 'vue'
import { useFetch } from '@/composables/useFetch'
import { GithubApi } from '@/api/github'

export const useUserFetch = () => {
  return useFetch(GithubApi.getUser)
}

export const useUserReposFetch = () => {
  return useFetch(GithubApi.getUserRepos)
}

export const useSearchUser = () => {
  const { data, ...params } = useFetch(GithubApi.searchUser)
  const items = computed(() => data.value?.items)

  return { data: items, ...params }
}
