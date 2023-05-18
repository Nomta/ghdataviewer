import { ref } from 'vue'

export function useFetch(fetcher) {
  const loading = ref(false)
  const error = ref(null)
  const data = ref(null)

  const fetchData = (...params) => {
    if (loading.value) {
      return
    }
    loading.value = true
    error.value = null
    data.value = null

    return fetcher(...params)
      .then(response => data.value = response)
      .catch(e => error.value = e)
      .finally(() => loading.value = false)
  }

  return { data, error, loading, fetchData }
}