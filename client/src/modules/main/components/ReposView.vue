<template>
  <ReposSorter v-if="data?.length > 1" v-model="select" />
  <ReposList :data="data" :loading="loading" />
</template>

<script>
import { ref, watch } from 'vue'
import ReposList from '../components/ReposList'
import ReposSorter from '../components/ReposSorter'
import { useUserReposFetch } from '../composables/useUserFetcher'

export default {
  name: 'ReposView',

  components: {
    ReposList,
    ReposSorter,
  },

  props: {
    username: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const select = ref(null)
    const { fetchData, ...params } = useUserReposFetch()

    watch(select, (value) => {
      fetchData(props.username, { sort: value })
    }, { immediate: true })

    return {
      select,
      ...params, /* error, loading, data, */
    }
  },
}
</script>