<template>
  <UiDataList :items="data" :loading="loading" v-slot="{ item }">
    <ReposListItem :repo="item" />
  </UiDataList>
</template>

<script>
import UiDataList from '@/components/ui/UiDataList'
import ReposListItem from '../components/ReposListItem'

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