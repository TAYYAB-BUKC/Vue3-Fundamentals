import {createRouter, createWebHistory} from 'vue-router'; 
import home from '@/components/home/home.vue';
import contact from '@/components/home/contact.vue';
import productList from '@/components/product/list.vue'
import productDetail from '@/components/product/detail.vue';
import notFound from '@/components/layout/not-found.vue';
import login from '@/components/authentication/login.vue';
import noAccess from '@/components/authentication/no-access.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: home, name: 'basicHome' },
        { path: '/home', component: home, name: 'advanceHome' },
        { path: '/contact', component: contact, name: 'contact' },
        { path: '/contactus', component: contact, name: 'contactUs' },
        { path: '/contact-us', redirect: { name: 'contactUs' } },
        { path: '/products', component: productList, name: 'products' },
        { path: '/product/list', component: productList, name: 'productList', 
            beforeEnter: ((toURL, fromURL) => {
                console.log('Products toURL:');
                console.log(toURL);
                console.log('Products fromURL:');
                console.log(fromURL);

                const isAdmin = IsAdmin();
                if(!isAdmin){
                    return { name: 'noAccess' };
                }
            }),
         },
        { path: '/product/details/:productId/:categoryId?', component: productDetail, name: 'productDetailWithParams' },
        { path: '/product/details/', component: productDetail, name: 'productDetailWithNoParams' },
        { path: '/login', component: login, name: 'login' },
        { path: '/no-access', component: noAccess, name: 'noAccess' },
        { path: '/:catchAll(.*)', component: notFound }
    ]
});

// Global Navigation Guard
router.beforeEach((toURL, fromURL)=>{
    console.log('toURL:');
    console.log(toURL);
    console.log('fromURL');
    console.log(fromURL);

    // If you need to stop navigation then uncomment below line
    // return false;

    
    // Restrict Unauthorized Access
    const isAuthenticated = true;
    if(!isAuthenticated && toURL.name != 'login' && toURL.name != 'basicHome'){
        return { name: 'login' };
    }
});

function IsAdmin(){
    const isAdmin = false;
    return isAdmin;
}

export default router;