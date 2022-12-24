import { ref, watchEffect } from 'vue'
import { useFetch } from '@/composables/useFetch'

export const useInfiniteFetch = (fetcher, reactiveParamsSetter, ...params) => {
  const data = ref([])
  const reactiveParams = reactiveParamsSetter(data, ...params)

  const {
    data: reactiveData,
    fetchData: fetchReactiveData,
    ...attrs
  } = useFetch(fetcher)

  watchEffect(() => {
    if (reactiveData.value) {
      data.value = data.value.concat(reactiveData.value)
    }
  })

  const fetchData = async () => {
    try {
      await fetchReactiveData(...reactiveParams.map(param => param.value))
    } catch (err) {
      console.error(err)
    }
  }

  return { data, fetchData, ...attrs }
}

