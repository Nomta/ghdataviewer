<script>
import { computed, inject, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { OAuthApi } from '@/api/OAuthApi'

export default {
  name: 'AuthService',

  setup() {
    const route = useRoute()
    const code = computed(() => route.query.code)
    const provider = computed(() => route.params.provider)

    const [{ value: login }] = inject('login')

    onMounted(() => {

      if (code.value)
        OAuthApi.login(code.value, provider.value)
          .then((data) => {
            login(data)
          })
    })
  }
}
</script>