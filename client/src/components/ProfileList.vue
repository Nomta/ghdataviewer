<template>
  <UiDataList :items="data" v-slot="{ item }">
    <ProfileListItem :profile="item" />
  </UiDataList>
</template>

<script>
import UiDataList from '@/components/ui/UiDataList'
import ProfileListItem from '@/components/ProfileListItem'

export default {
  name: 'ProfileList',

  components: {
    UiDataList,
    ProfileListItem,
  },

  props: {
    data: Array,
    loading: Boolean,
  },
}
</script>