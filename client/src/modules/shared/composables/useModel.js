import { computed } from 'vue'

export function useModel(props, emit, propName = 'modelValue') {
  return computed({
    get: () => props[propName],
    set: (value) => emit(`update:${propName}`, value)
  })
}
