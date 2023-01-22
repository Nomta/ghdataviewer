<template>
  <VToolbar color="grey-darken-4">
    <VContainer class="d-flex align-center">
      <VToolbarTitle>
        <PageLogo />
      </VToolbarTitle>
      <ProfileInfo v-if="mappedProfile" :profile="mappedProfile" />
      <slot name="auth" />
    </VContainer>
  </VToolbar>
</template>

<script>
import { inject, computed } from 'vue'
import PageLogo from '@/components/PageLogo'
import ProfileInfo from '@/components/ProfileInfo'
import { PROFILE } from '@/composables/useRegister'

export default {
  name: 'PageHeader',

  components: {
    PageLogo,
    ProfileInfo,
  },

  setup() {
    const [profile] = inject(PROFILE)

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