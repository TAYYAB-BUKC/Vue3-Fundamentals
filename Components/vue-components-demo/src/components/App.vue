<style>
</style>

<template>
    <div class="container">
        <div>
            {{message}}
        </div>
        <div>
            <input type="text" v-model="ownerName" />
        </div>
        <div class="row">
            <div class="col-12" v-for="contact in contactList" :key="contact.id">
                <contact-us :contact-name=contact.name :contact-phone=contact.phone :contact-email=contact.email
                :owner-name=contact.owner></contact-us>
            </div>
        </div>
        <button-counter></button-counter>
    </div>
</template>

<script setup>
    import { ref, reactive } from 'vue';
    import ContactUs from './ContactUs.vue';
    import ButtonCounter from './ButtonCounter.vue';

    const message = 'Hello World From Vue 3 + VITE';
    const ownerName = ref('Tayyab Arsalan');

    const contactList = reactive([
        {
            id: 1,
            name: 'Tayyab Arsalan',
            phone: 3409292923,
            email: 'write2tayyabarsalan+vue@gmail.com',
            owner: ownerName
        },
        {
            id: 2,
            name: 'Noman Khan',
            phone: 3009461798,
            email: 'noman.khan@gmail.com',
            owner: ownerName
        },
        {
            id: 3,
            name: 'Tahir Jaffar',
            phone: 3103549546,
            email: 'tahir.jaffar@gmail.com',
            owner: ownerName
        }    
    ]);

</script>