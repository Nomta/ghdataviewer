<template>
  <InfiniteLoader :loader="loader" :params="params" :limit="limit" :key="key" v-slot="{ data }">
    <UiDataList :items="data" v-slot="{ item }">
      <UserListItem :user="item" />
    </UiDataList>
  </InfiniteLoader>
</template>

<script>
import { toRefs } from 'vue'
import { useDynamicId } from '@/modules/shared/composables/useDynamicId'
import InfiniteLoader from '@/modules/shared/components/ui/InfiniteLoader'
import UiDataList from '@/modules/shared/components/ui/UiDataList'
import UserListItem from './UserListItem'

export default {
  name: 'UserInfiniteList',

  components: {
    UiDataList,
    UserListItem,
    InfiniteLoader,
  },

  props: {
    loader: {
      type: Function,
      required: true
    },
    params: {
      type: Object,
      default: {}
    },
    limit: {
      type: Number,
      default: 0
    },
  },

  setup(props) {
    const { params } = toRefs(props)
    const key = useDynamicId(params, { deep: true })

    return { key }
  },
}
</script>