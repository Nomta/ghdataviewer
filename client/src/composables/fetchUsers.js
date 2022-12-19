
import { reactive, computed, watchEffect } from 'vue'
import { useFetch } from '@/composables/useFetch'
import { GithubApi } from '@/api/github'

const mapUser = (user) => ({
  id: user.id,
  text: user.login,
  image: user.avatar_url,
  url: user.html_url,
  linkText: 'Профиль на Github',
})

export const fetchUsers = (limit) => {
  const users = reactive([])
  const since = computed(() => users.length ? users.at(-1).id : 0)
  const query = computed(() => `?since=${since.value}&per_page=${limit}`)

  const { data, fetchData, error, loading } = useFetch(GithubApi.getUsers)

  watchEffect(() => {
    if (data.value) {
      users.push(...data.value.map(mapUser))
    }
  })

  const load = async () => {
    try {
      await fetchData(query.value)
    } catch (err) {
      console.error(err)
    }
  }

  return { users, error, loading, load }
};
