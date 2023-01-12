import { computed } from 'vue'
import { useFetch } from '@/composables/useFetch'
import { GithubApi } from '@/api/github'

export const useUserFetcher = () => {
  const { data, ...params } = useFetch(GithubApi.searchUser)
  const items = computed(() => data.value?.items)

  return { data: items, ...params }
}
