import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { router } from "./routes/routes.js"

import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

import './style.css'
import App from './App.vue'

myApp.use(router)

myApp.mount('#app')

