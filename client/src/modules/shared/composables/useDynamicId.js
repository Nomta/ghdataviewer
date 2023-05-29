import { ref, watch } from 'vue'
import { v4 as uuid } from 'uuid'

export function useDynamicId(watchedValue, settings) {
  const key = ref(uuid())

  if (watchedValue) {
    watch(watchedValue, () => key.value = uuid(), settings)
  }
  return key
}