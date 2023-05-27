import { ref } from 'vue'

export function useInfiniteFetch(fetcher, mapData) {
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
        if (response.value) {
          const responseValue = mapData
            ? mapData(response.value)
            : response.value

          data.value = (data.value || []).concat(responseValue)
        }
      })
      .catch(e => error.value = e)
      .finally(() => loading.value = false)
  }

  return { data, error, loading, fetchData }
}