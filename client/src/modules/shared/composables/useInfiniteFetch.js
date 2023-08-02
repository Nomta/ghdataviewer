import { ref, shallowRef } from 'vue'

export function useInfiniteFetch(fetcher, mapData) {
  const done = ref(false)
  const loading = ref(false)
  const error = shallowRef(null)
  const data = shallowRef(null)

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