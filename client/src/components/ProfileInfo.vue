<template>
  <div class="profile-label">
    <VAvatar v-if="profile.image">
      <VImg :src="profile.image" />
    </VAvatar>
    <div class="profile-label__text">
      <div class="profile-label__title">{{ profile.username }}</div>
      <a v-if="profile.url" :href="profile.url" class="link" target="_blank">
        {{ profile.linkText ?? profile.url }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInfo',

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
  margin-top: 0.75em;
  line-height: 0.5;
  text-transform: capitalize;
  font-weight: bold;
}

.link {
  font-size: 0.75em;
}
</style>