import {createRouter, createWebHistory} from 'vue-router'; 
import home from '@/components/home/home.vue';
import contact from '@/components/home/contact.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: home },
        { path: '/contact', component: contact },
        { path: '/contactus', component: contact }
    ]
});

export default router;