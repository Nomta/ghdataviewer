import { ref } from 'vue'

export function useInfiniteFetch(fetcher) {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchData = () => {
    if (loading.value) {
      return
    }
    loading.value = true
    error.value = null

    return fetcher.next()
      .then(response => {
        data.value = (data.value || []).concat(response.value)
      })
      .catch(e => error.value = e)
      .finally(() => loading.value = false)
  }

  return { data, error, loading, fetchData }
}