<style>
</style>

<template>
    <div class="container">
        <div>
            {{message}}
        </div>
        <contact-us contact-name="Tayyab Arsalan" contact-phone="+92 340 9292923" contact-email="write2tayyabarsalan+vue@gmail.com"
        :owner-name="ownerName"></contact-us>
        <button-counter></button-counter>
    </div>
</template>

<script setup>
    import ContactUs from './ContactUs.vue';
    import ButtonCounter from './ButtonCounter.vue';

    const message = 'Hello World From Vue 3 + VITE';
    const ownerName = 'Tayyab Arsalan';
</script>