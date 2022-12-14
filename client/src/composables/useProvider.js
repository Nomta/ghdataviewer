import { ref, provide, readonly } from 'vue'
import { useStorage } from '@/composables/useStorage'

/** Провайдеры */

export const useProvider = (
  key,
  initialValue,
  item = ref(initialValue)
) => {
  provide(key, [
    readonly(item),
    (value) => item.value = value
  ])
}

/** В связке с localStorage */

export const useStorageProvider = (key) => {
  useProvider(key, null, useStorage(key))
}
