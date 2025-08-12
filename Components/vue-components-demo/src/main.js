import { createApp } from 'vue'
import Application from './components/App.vue'
import ContactUs from './components/ContactUs.vue';
import ButtonCounter from './components/ButtonCounter.vue';

const app = createApp(Application)

app.component('contact-us', ContactUs);
app.component('button-counter', ButtonCounter);

app.mount('#app');