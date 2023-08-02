import { ref, watch } from 'vue'
import { v4 as uuid } from 'uuid'

export function useDynamicId(value, settings) {
  const key = ref(uuid())

  if (value) {
    watch(value, () => key.value = uuid(), settings)
  }
  return key
}