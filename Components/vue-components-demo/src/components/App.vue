<style>
</style>

<template>
    <div>
        {{message}}
    </div>
    <contact-us></contact-us>
    <button-counter></button-counter>
</template>

<script>
import ContactUs from './ContactUs.vue';

    export default{
        setup(){
            const message = 'Hello World From Vue 3 + VITE';
        
            return {
                message
            }
        }
    }
</script>