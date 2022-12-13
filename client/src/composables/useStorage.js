import { ref, watch, onMounted } from 'vue'
import { Storage } from '@/services/storage'

export const useStorage = (key) => {
  const item = ref(null)

  onMounted(() => item.value = Storage.get(key))

  watch(item, (value) => {
    if (value === null || value === undefined) {
      return Storage.remove(key)
    }
    Storage.set(key, value)
  })

  return item
}

