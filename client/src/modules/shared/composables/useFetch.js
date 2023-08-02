import { ref, shallowRef } from 'vue'

export function useFetch(fetcher) {
  const loading = ref(false)
  const error = shallowRef(null)
  const data = shallowRef(null)

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