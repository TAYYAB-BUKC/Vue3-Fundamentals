import { createApp } from 'vue'
import Application from './components/App.vue'

const app = createApp(Application)

// Global Components Registration
// app.component('contact-us', ContactUs);
// app.component('button-counter', ButtonCounter);

app.mount('#app');