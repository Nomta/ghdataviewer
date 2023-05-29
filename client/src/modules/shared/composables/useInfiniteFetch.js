import { ref } from 'vue'

export function useInfiniteFetch(fetcher, mapData) {
  const data = ref(null)
  const done = ref(false)
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
        done.value = response.done

        if (done.value) {
          return
        }

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

  return { data, done, error, loading, fetchData }
}