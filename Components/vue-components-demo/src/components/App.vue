<style>
</style>

<template>
    <div class="container">
        <div>
            {{message}}
        </div>
        <contact-us></contact-us>
        <button-counter></button-counter>
    </div>
</template>

<script setup>
    import ContactUs from './ContactUs.vue';
    import ButtonCounter from './ButtonCounter.vue';

    const message = 'Hello World From Vue 3 + VITE';
</script>