import {createRouter, createWebHistory} from 'vue-router'; 
import home from '@/components/home/home.vue';
import contact from '@/components/home/contact.vue';
import productList from '@/components/product/list.vue'
import productDetail from '@/components/product/detail.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: home, name: 'basicHome' },
        { path: '/home', component: home, name: 'advanceHome' },
        { path: '/contact', component: contact, name: 'contact' },
        { path: '/contactus', component: contact, name: 'contactUs' },
        { path: '/products', component: productList, name: 'products' },
        { path: '/product/list', component: productList, name: 'productList' },
        { path: '/product/details/:productId/:categoryId?', component: productDetail, name: 'productDetailWithParams' },
        { path: '/product/details/', component: productDetail, name: 'productDetailWithNoParams' },
    ]
});

export default router;