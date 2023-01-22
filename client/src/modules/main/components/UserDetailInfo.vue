<template>
  <VCard class="user-detail-card">
    <VCardText>
      <div class="user-detail-info">

        <VAvatar v-if="user.avatar_url" size="100%" class="detail-info__avatar my-6 mt-md-0 mb-md-4">
          <VResponsive aspect-ratio="1">
            <VImg :src="user.avatar_url" />
          </VResponsive>
        </VAvatar>

        <div class="detail-info__content">
          <div class="my-4">
            <div v-if="user.name" class="detail-info__title mb-2">{{ user.name }}</div>
            <div class="detail-info__subtitle">
              <a :href="user.html_url" class="link" target="_blank">{{ user.login }}</a>
            </div>
          </div>

          <div v-if="user.followers || user.following" class="detail-info__follow-links my-4">
            <IconPeople class="caption-icon" />
            <div v-if="user.followers">
              <span class="caption-bold">{{ formatNumber(user.followers) }}</span>
              <span class="caption">&nbsp;followers</span>
            </div>
            <template v-if="user.followers && user.following">&nbsp;·&nbsp;</template>
            <div v-if="user.following">
              <span class="caption-bold">{{ formatNumber(user.following) }}</span>
              <span class="caption">&nbsp;following</span>
            </div>
          </div>

          <ul class="detail-info__description my-4">
            <li class="" v-if="user.company">
              <IconCompany class="caption-icon" />
              <span class="caption-bold">&nbsp;{{ user.company }}</span>
            </li>
            <li class="" v-if="user.location">
              <IconLocation class="caption-icon" />
              <span class="caption">&nbsp;{{ user.location }}</span>
            </li>
            <li class="" v-if="user.email">
              <IconEnvelope class="caption-icon" />
              <a :href="`mailto:${user.email}`" class="link">
                <span class="caption">&nbsp;{{ user.email }}</span>
              </a>
            </li>
            <li class="" v-if="user.blog">
              <IconLink class="caption-icon" />
              <a :href="user.blog" class="link" target="_blank">
                <span class="caption">&nbsp;{{ user.blog }}</span>
              </a>
            </li>
            <li class="" v-if="user.twitter_username">
              <IconTwitter class="caption-icon" />
              <a :href="twitterUrl" class="link" target="_blank">
                <span class="caption">&nbsp;{{ user.twitter_username }}</span>
              </a>
            </li>
          </ul>

        </div>

      </div>
    </VCardText>
  </VCard>
</template>

<script>
import IconPeople from '@/assets/icons/IconPeople'
import IconCompany from '@/assets/icons/IconCompany'
import IconLocation from '@/assets/icons/IconLocation'
import IconEnvelope from '@/assets/icons/IconEnvelope'
import IconLink from '@/assets/icons/IconLink'
import IconTwitter from '@/assets/icons/IconTwitter'
import { formatNumber } from '@/services/format'

const TWITTER_BASE_URL = 'https://twitter.com'

export default {
  name: 'UserDetailInfo',

  components: {
    IconPeople,
    IconCompany,
    IconLocation,
    IconEnvelope,
    IconLink,
    IconTwitter,
  },

  props: {
    user: {
      type: Object,
      required: true
    },
  },

  setup(props) {
    const { twitter_username } = props.user
    const twitterUrl = twitter_username && new URL(twitter_username, TWITTER_BASE_URL)

    return {
      formatNumber,
      twitterUrl,
    }
  },
}
</script>

<style scoped>
.user-detail-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.detail-info__avatar {
  max-width: 18rem;
  outline: 2px solid #bdbdbd;
}

.detail-info__title {
  font-weight: 600;
  font-size: 1.5rem;
  opacity: 80%;
}

.detail-info__subtitle {
  font-size: 1.25rem;
  font-weight: 100;
  color: #757575;
}

.detail-info__description {
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
  opacity: 80%;
}

.caption-icon {
  margin: 0 4px -2px 0;
  fill: #616161;
  color: #616161;
}

@media (min-width: 600px) {
  .user-detail-info {
    flex-direction: row;
  }
}

@media (min-width: 960px) {
  .user-detail-card {
    padding-top: 0;
    background-color: inherit;
    box-shadow: none;
  }

  .user-detail-info {
    display: block;
  }
}
</style>