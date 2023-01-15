<template>
  <VRow>
    <VCol cols="12" md="3" class="pb-0">
      <ProfileDetail :username="username" />
    </VCol>
    <VCol cols="12" md="9" class="pb-0 pl-md-10">
      <ReposList :username="username" />
    </VCol>
  </VRow>
</template>

<script>
import ProfileDetail from '@/components/ProfileDetail'
import ReposList from '@/components/ReposList'

export default {
  name: 'ProfileDetailView',

  components: {
    ProfileDetail,
    ReposList,
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