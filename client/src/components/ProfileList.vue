<template>
  <ul v-if="profiles.length">
    <li v-for="profile in profiles" :key="profile.id" class="mb-2">
      <ProfileCard :profile="profile" />
    </li>
  </ul>
</template>

<script>
import ProfileCard from '@/components/ProfileCard'

export default {
  name: 'ProfileList',

  components: {
    ProfileCard,
  },

  props: {
    profiles: {
      type: Array,
      default: []
    },
  },
}
</script>