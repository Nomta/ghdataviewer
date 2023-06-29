import { createApp } from 'vue'
import App, { router } from './modules/app'
import vuetify from './plugins/vuetify'
import './assets/styles/main.css'

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
