<style>
</style>

<template>
    <div class="container">
        <div>
            {{message}}
        </div>
        <div>
            Owner Name: <input type="text" v-model="ownerName" />
        </div>
        <div>
            Max. LuckyNumber: <input type="text" v-model="maximumLuckyNumber" />
        </div>
        <div class="row">
            <!-- <div class="col-12" v-for="contact in contactList" :key="contact.id">
                <contact-us :contact-name=contact.name :contact-phone=contact.phone :contact-email=contact.email
                :owner-name=contact.owner
                :isFavourite=contact.isFavourite @updateFavouriteEmit="(isFavourite, secondparam) => contact.isFavourite = updateFavorite(isFavourite, secondparam)"></contact-us>
            </div> -->
            <!-- <add-contact @addContactEmit="addContact($event)"></add-contact> -->
            <AddContact @add-contact-emit="addContact($event)" ></AddContact>
            <div class="col-12" v-for="contact in contactList" :key="contact.id">
                <contact-us :contact-name=contact.name :contact-phone=contact.phone :contact-email=contact.email
                :owner-name=contact.owner
                :isFavourite=contact.isFavourite 
                @updateFavouriteEmit="contact.isFavourite = updateFavorite(contact.id, $event)"></contact-us>
            </div>
        </div>
        <button-counter></button-counter>
    </div>
</template>

<script setup>
    import { ref, reactive, provide } from 'vue';
    import ContactUs from './ContactUs.vue';
    import ButtonCounter from './ButtonCounter.vue';
    import AddContact from './AddContact.vue';

    const message = 'Hello World From Vue 3 + VITE';
    const ownerName = ref('Tayyab Arsalan');
    const maximumLuckyNumber = ref(1000);

    provide('maximumLuckyNumber', maximumLuckyNumber);
    
    const contactList = reactive([
        {
            id: 1,
            name: 'Tayyab Arsalan',
            phone: 3409292923,
            email: 'write2tayyabarsalan+vue@gmail.com',
            owner: ownerName,
            isFavourite: true,
        },
        {
            id: 2,
            name: 'Noman Khan',
            phone: 3009461798,
            email: 'noman.khan@gmail.com',
            owner: ownerName,
            isFavourite: true,
        },
        {
            id: 3,
            name: 'Tahir Jaffar',
            phone: 3103549546,
            email: 'tahir.jaffar@gmail.com',
            owner: ownerName,
            isFavourite: true,
        }    
    ]);

    function updateFavorite(id, valuesFromChildComponent){
        console.log(id);
        console.log(valuesFromChildComponent);
        // For Object
        // return !valuesFromChildComponent[0];
        // For Array
        return !valuesFromChildComponent.isFavourite;
    }

    function addContact(contact){
        console.log('addContact event is fired');
        var newID = contactList == null || contactList == undefined ? 1 : contactList.at(-1).id + 1;

        contact.ownerName = ownerName.value;
        let newContact = {
            id: newID,
            name: contact.name,
            phone: contact.phone,
            email: contact.email,
            owner: contact.ownerName,
            isFavourite: contact.isFavourite,
        };
        contactList.push(newContact);
        //contactList.push(contact);
    }
</script>