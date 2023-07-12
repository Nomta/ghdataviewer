<template>
  <VRow>
    <VCol cols="12" md="3" class="pb-0">
      <UserDetail :username="username" />
    </VCol>
    <VCol cols="12" md="9" class="pb-0 pl-md-10">
      <ReposView :username="username" />
    </VCol>
  </VRow>
</template>

<script>
import UserDetail from '../components/UserDetail'
import ReposView from '../components/ReposView'

export default {
  name: 'UserDetailView',

  components: {
    UserDetail,
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