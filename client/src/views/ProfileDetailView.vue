<template>
  <VRow>
    <VCol cols="12" md="3" class="pb-0">
      <ProfileDetail :username="username" />
    </VCol>
    <VCol cols="12" md="9" class="pb-0 pl-md-10">
      <ReposView :username="username" />
    </VCol>
  </VRow>
</template>

<script>
import ProfileDetail from '@/components/ProfileDetail'
import ReposView from '@/components/ReposView'

export default {
  name: 'ProfileDetailView',

  components: {
    ProfileDetail,
    ReposView,
  },

  props: {
    username: {
      type: String,
      required: true
    },
  },
}
</script>