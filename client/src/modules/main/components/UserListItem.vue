<template>
  <VCard class="d-flex">
    <VCardItem>
      <div class="user-label">
        <VAvatar v-if="user.image">
          <VImg :src="user.image" />
        </VAvatar>
        <div class="user-label__text">
          <div class="user-label__title">{{ user.username }}</div>
          <a v-if="user.url" :href="user.url" class="link" target="_blank">
            {{ user.linkText ?? user.url }}
          </a>
        </div>
      </div>
    </VCardItem>
    <VCardActions class="px-10 text-center ml-auto">
      <RouterLink :to="{ name: 'userDetail', params: { username: user.username } }">
        <VBtn color="success">
          <IconGithub />&nbsp;
          Перейти
        </VBtn>
      </RouterLink>
    </VCardActions>
  </VCard>
</template>

<script>

export default {
  name: 'UserListItem',

  props: {
    user: {
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

.user-label {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}

.user-label__text {
  padding-left: 0.75em;
  padding-right: 1.5em;
}

.user-label__title {
  margin-top: 0.75em;
  line-height: 0.5;
  text-transform: capitalize;
  font-weight: bold;
}

.link {
  font-size: 0.75em;
}

.button {
  margin-top: 0.5rem;
}
</style>