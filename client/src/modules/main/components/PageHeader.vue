<template>
  <VAppBar color="grey-darken-4">
    <VContainer class="d-flex align-center">
      <VAppBarTitle>
        <PageLogo />
      </VAppBarTitle>
      <ProfileInfo v-if="mappedProfile" :profile="mappedProfile" />
      <slot name="auth" />
    </VContainer>
  </VAppBar>
</template>

<script>
import { inject, computed } from 'vue'
import { PROFILE } from '@/modules/shared/composables/useRegister'
import PageLogo from '../components/PageLogo'
import ProfileInfo from '../components/ProfileInfo'

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