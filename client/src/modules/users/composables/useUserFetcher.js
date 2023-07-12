import { computed } from 'vue'
import { useFetch } from '@/modules/shared/composables/useFetch'
import { GithubApi } from '../api'

export const useFetchUser = () => {
  return useFetch(GithubApi.getUser)
}

export const useFetchUserRepos = () => {
  return useFetch(GithubApi.getUserRepos)
}

export const useSearchUser = () => {
  const { data, ...restParams } = useFetch(GithubApi.searchUser)
  const items = computed(() => data.value?.items)

  return { data: items, ...restParams }
}
