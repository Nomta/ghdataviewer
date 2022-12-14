<template>
  <ElContainer>
    <ElMain class="header">
      <PageLogo />
      <ProfileLabel v-if="profile" :text="profile.username" :image="profile.avatar"
        :link="{ text: 'Профиль на Github', href: profile.url }" />
      <slot name="auth" />
    </ElMain>
  </ElContainer>
</template>

<script>
import { inject, toRefs } from 'vue'
import PageLogo from '@/components/PageLogo'
import ProfileLabel from '@/components/ProfileLabel'
import LogoutButton from '@/components/LogoutButton'

export default {
  name: 'PageHeader',

  components: {
    PageLogo,
    ProfileLabel,
    LogoutButton,
  },

  emits: ['logout'],

  setup() {
    const [profile] = inject('profile')

    return {
      profile,
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