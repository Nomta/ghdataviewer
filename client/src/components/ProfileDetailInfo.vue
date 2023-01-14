<template>
  <div class="profile-detail-info">

    <VAvatar v-if="profile.avatar_url" size="100%" class="detail-info__avatar">
      <VResponsive aspect-ratio="1">
        <VImg :src="profile.avatar_url" />
      </VResponsive>
    </VAvatar>

    <div class="my-4">
      <div v-if="profile.name" class="detail-info__title">{{ profile.name }}</div>
      <div class="detail-info__subtitle">
        <a :href="profile.html_url" class="link" target="_blank">{{ profile.login }}</a>
      </div>
    </div>

    <div v-if="profile.followers || profile.following" class="detail-info__follow-links my-4">
      <IconPeople class="caption-icon" />
      <div v-if="profile.followers">
        <span class="caption-bold">{{ formatNumber(profile.followers) }}</span>
        <span class="caption">&nbsp;followers</span>
      </div>
      <template v-if="profile.followers && profile.following">&nbsp;·&nbsp;</template>
      <div v-if="profile.following">
        <span class="caption-bold">{{ formatNumber(profile.following) }}</span>
        <span class="caption">&nbsp;following</span>
      </div>
    </div>

    <ul class="detail-info__content my-4">
      <li class="" v-if="profile.company">
        <IconCompany class="caption-icon" />
        <span class="caption-bold">&nbsp;{{ profile.company }}</span>
      </li>
      <li class="" v-if="profile.location">
        <IconLocation class="caption-icon" />
        <span class="caption">&nbsp;{{ profile.location }}</span>
      </li>
      <li class="" v-if="profile.email">
        <IconEnvelope class="caption-icon" />
        <a :href="`mailto:${profile.email}`" class="link">
          <span class="caption">&nbsp;{{ profile.email }}</span>
        </a>
      </li>
      <li class="" v-if="profile.blog">
        <IconLink class="caption-icon" />
        <a :href="profile.blog" class="link" target="_blank">
          <span class="caption">&nbsp;{{ profile.blog }}</span>
        </a>
      </li>
      <li class="" v-if="profile.twitter_username">
        <IconTwitter class="caption-icon" />
        <a :href="twitterUrl" class="link" target="_blank">
          <span class="caption">&nbsp;{{ profile.twitter_username }}</span>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
import IconPeople from '@/components/icons/IconPeople'
import IconCompany from '@/components/icons/IconCompany'
import IconLocation from '@/components/icons/IconLocation'
import IconEnvelope from '@/components/icons/IconEnvelope'
import IconLink from '@/components/icons/IconLink'
import IconTwitter from '@/components/icons/IconTwitter'
import { formatNumber } from '@/utils'

const TWITTER_BASE_URL = 'https://twitter.com'

export default {
  name: 'ProfileDetailInfo',

  components: {
    IconPeople,
    IconCompany,
    IconLocation,
    IconEnvelope,
    IconLink,
    IconTwitter,
  },

  props: {
    profile: {
      type: Object,
      required: true
    },
  },

  setup(props) {
    const { twitter_username } = props.profile
    const twitterUrl = twitter_username && new URL(twitter_username, TWITTER_BASE_URL)

    return {
      formatNumber,
      twitterUrl,
    }
  },
}
</script>

<style scoped>
.detail-info__avatar {
  max-width: 18rem;
  outline: 2px solid #bdbdbd;
}

.detail-info__title {
  font-weight: 600;
  font-size: 1.5rem;
}

.detail-info__subtitle {
  font-size: 1.25rem;
  font-weight: 100;
  color: #757575;
}

.detail-info__content {
  font-size: 0.875rem;
}

.detail-info__follow-links {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
}

.caption {
  font-weight: 100;
  opacity: 80%;
}

.caption-bold {
  font-weight: 600;
}

.caption-icon {
  margin: 0 4px -2px 0;
  fill: #616161;
  color: #616161;
}
</style>