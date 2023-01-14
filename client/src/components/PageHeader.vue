<template>
  <VToolbar color="grey-darken-4">
    <VContainer class="d-flex align-center">
      <VToolbarTitle>
        <PageLogo />
      </VToolbarTitle>
      <ProfileLabel v-if="mappedProfile" :profile="mappedProfile" />
      <slot name="auth" />
    </VContainer>
  </VToolbar>
</template>

<script>
import { inject, computed } from 'vue'
import PageLogo from '@/components/PageLogo'
import ProfileLabel from '@/components/ProfileLabel'

export default {
  name: 'PageHeader',

  components: {
    PageLogo,
    ProfileLabel,
  },

  setup() {
    const [profile] = inject('profile')

    const mappedProfile = computed(() => profile.value && ({
      username: profile.value.username,
      image: profile.value.avatar,
      url: profile.value.url,
      linkText: 'Профиль на Github',
    }))

    return {
      mappedProfile,
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>