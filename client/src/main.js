import { createApp } from 'vue'
import App from './modules/app/App.vue'
import router from './modules/app/router'
import vuetify from './plugins/vuetify'
import './assets/styles/main.css'

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
