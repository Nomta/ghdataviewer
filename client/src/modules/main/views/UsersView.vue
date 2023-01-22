<template>
  <UserSelect />
  <UserInfiniteList />
</template>

<script>
import UserSelect from '../components/UserSelect'
import UserInfiniteList from '../components/UserInfiniteList'

export default {
  name: 'UsersView',

  components: {
    UserSelect,
    UserInfiniteList,
  },
}
</script>