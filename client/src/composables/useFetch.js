import { ref } from 'vue'

export function useFetch(fetcher) {
  const loading = ref(false)
  const error = ref(null)
  const data = ref([])

  const fetchData = (...params) => {
    if (loading.value) {
      return
    }
    loading.value = true
    error.value = null
    data.value = []

    return fetcher(...params)
      .then(response => data.value = response.data)
      .catch(error => error.value = error)
      .finally(() => loading.value = false)
  }

  return { data, error, loading, fetchData }
}