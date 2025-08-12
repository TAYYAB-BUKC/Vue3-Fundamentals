import { createApp } from 'vue'
import Application from './components/App.vue'
import ContactUs from './components/ContactUs.vue';

const app = createApp(Application)

// Global Components Registration
app.component('contact-us', ContactUs);

app.mount('#app');