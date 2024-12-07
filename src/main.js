import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
import router from './router'

const app = createApp(App)

/* add icons to the library */
library.add(faUserSecret)
library.add(faGithub)
library.add(faFacebook)
library.add(faInstagramSquare)
library.add(faLinkedin)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
