<style>
</style>

<template>
    <div>
        {{message}}
    </div>
    <contact-us></contact-us>
    <button-counter></button-counter>
</template>

<script setup>
    import ContactUs from './ContactUs.vue';
    import ButtonCounter from './ButtonCounter.vue';

    const message = 'Hello World From Vue 3 + VITE';
</script>