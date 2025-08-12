<style>
</style>

<template>
    <div>
        {{message}}
    </div>
    <contact-us></contact-us>
    <buttonCounter></ButtonCounter>
</template>

<script setup>
    import ButtonCounter from './ButtonCounter.vue'
    const message = 'Hello World From Vue 3 + VITE';
</script>