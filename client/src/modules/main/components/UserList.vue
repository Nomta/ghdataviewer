<template>
  <UiDataList :items="data" v-slot="{ item }">
    <UserListItem :user="item" />
  </UiDataList>
</template>

<script>
import UiDataList from '@/components/ui/UiDataList'
import UserListItem from '../components/UserListItem'

export default {
  name: 'UserList',

  components: {
    UiDataList,
    UserListItem,
  },

  props: {
    data: Array,
    loading: Boolean,
  },
}
</script>