<template>
  <VCard>
    <template v-slot:title>
      <div class="d-flex justify-space-between">
        <a :href="repo.html_url" class="link text-green-darken-3" target="_blank">{{ repo.name }}</a>
        <VChip size="x-small" class="mt-2">{{ repo.private ? 'Private' : 'Public' }}</VChip>
      </div>
    </template>
    <VCardText>
      <div v-if="repo.description" class="card-text mb-2">{{ repo.description }}</div>
      <div class="caption">{{ repo.language }}
        <span v-if="repo.stargazers_count">
          <IconStar class="caption-icon" />{{ repo.stargazers_count }}
        </span>
        <!-- <span v-if="repo.forks">{{ repo.forks }}</span> -->
        <span v-if="repo.license">
          <IconScales class="caption-icon" />{{ repo.license.name }}
        </span>
        <span v-if="repo.updated_at">Обновлено {{ new Date(repo.updated_at).toLocaleDateString() }}</span>
      </div>
    </VCardText>
  </VCard>
</template>

<script>
import IconScales from '@/modules/shared/components/icons/IconScales'
import IconStar from '@/modules/shared/components/icons/IconStar'

export default {
  name: 'ReposListItem',

  components: {
    IconScales,
    IconStar,
  },

  props: {
    repo: {
      type: Object,
      required: true
    },
  },
}
</script>

<style>
.caption {
  font-size: 0.75rem;
  font-weight: 100;
  opacity: 80%;
}

.caption span {
  margin-left: 1.25rem;
}

.caption-icon {
  margin: 0 4px -2px 0;
  fill: #616161;
  color: #616161;
}

.card-text {
  line-height: 1.25;
}
</style>