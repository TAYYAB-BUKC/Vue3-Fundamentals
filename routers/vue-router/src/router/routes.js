import {createRouter, createWebHistory} from 'vue-router'; 
import home from '@/components/home/home.vue';
import contact from '@/components/home/contact.vue';
import productList from '@/components/product/list.vue'
import productDetail from '@/components/product/detail.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: home },
        { path: '/home', component: home },
        { path: '/contact', component: contact },
        { path: '/contactus', component: contact },
        { path: '/products', component: productList },
        { path: '/product/list', component: productList },
        { path: '/product/details/:productId', component: productDetail },
    ]
});

export default router;