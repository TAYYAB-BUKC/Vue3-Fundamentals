import { createApp } from 'vue'
import App from './components/App.vue'
import Loader from './components/Loader.vue';

const app = createApp(App)

// Global Components Registration
app.component('Loader', Loader);

app.mount('#app');
