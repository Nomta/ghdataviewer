<template>
  <ProfileSelect />
  <ProfileInfiniteList />
</template>

<script>
import ProfileSelect from '@/components/ProfileSelect'
import ProfileInfiniteList from '@/components/ProfileInfiniteList'

export default {
  name: 'ProfilesView',

  components: {
    ProfileSelect,
    ProfileInfiniteList,
  },
}
</script>