<template>
  <ElContainer>
    <ElMain class="header">
      <PageLogo />
      <ProfileLabel v-if="mappedProfile" :profile="mappedProfile" />
      <slot name="auth" />
    </ElMain>
  </ElContainer>
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

    const mappedProfile = computed(() => ({
      text: profile.value.username,
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
  box-shadow: var(--el-box-shadow-light);
}
</style>