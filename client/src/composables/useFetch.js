import { ref } from 'vue'

export function useFetch(fetcher) {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchData = (...params) => {
    if (loading.value) {
      return
    }
    loading.value = true
    data.value = null
    error.value = null

    return fetcher(...params)
      .then(response => data.value = response)
      .catch(error => error.value = error)
      .finally(() => loading.value = false)
  }

  return {
    data, fetchData, loading, error,
  }
}