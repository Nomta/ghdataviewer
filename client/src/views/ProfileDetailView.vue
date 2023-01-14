<template>
  <ProfileDetail :username="username" />
</template>

<script>
import ProfileDetail from '@/components/ProfileDetail'

export default {
  name: 'ProfileDetailView',

  components: {
    ProfileDetail,
  },

  props: {
    username: {
      type: String,
      required: true
    },
  },
}
</script>

<style scoped>

</style>