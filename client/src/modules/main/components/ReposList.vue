<template>
  <UiDataList :items="data" :loading="loading" v-slot="{ item }">
    <ReposListItem :repo="item" />
  </UiDataList>
</template>

<script>
import UiDataList from '@/modules/core/components/ui/UiDataList'
import ReposListItem from './ReposListItem'

export default {
  name: 'ReposList',

  components: {
    UiDataList,
    ReposListItem,
  },

  props: {
    data: Array,
    loading: Boolean,
  },
}
</script>