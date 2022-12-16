<template>
  <div class="profile-label">
    <ElAvatar v-if="profile.image" :src="profile.image" />
    <div class="profile-label__text">
      <div class="profile-label__title">{{ profile.text }}</div>
      <ElLink v-if="profile.url" :href="profile.url" target="_blank">
        {{ profile.linkText ?? profile.url }}
      </ElLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileLabel',

  props: {
    profile: {
      type: Object,
      required: true
    },
  },
}
</script>

<style scoped>
.profile-label {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}

.profile-label__text {
  padding-left: 0.75em;
  padding-right: 1.5em;
}

.profile-label__title {
  text-transform: capitalize;
  font-weight: bold;
}
</style>