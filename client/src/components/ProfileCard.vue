<template>
  <VCard class="d-flex">
    <VCardItem>
      <ProfileLabel :profile="profile" />
    </VCardItem>
    <VCardActions class="px-10 text-center ml-auto">
      <RouterLink :to="{ name: 'profileDetail', params: { username: profile.username } }">
        <VBtn color="success">
          <IconGithub />&nbsp;
          Перейти
        </VBtn>
      </RouterLink>
    </VCardActions>
  </VCard>
</template>

<script>
import ProfileLabel from '@/components/ProfileLabel'

export default {
  name: 'ProfileCard',

  components: {
    ProfileLabel,
  },

  props: {
    profile: {
      type: Object,
      required: true
    },
  },
}
</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  margin-top: 0.5rem;
}
</style>