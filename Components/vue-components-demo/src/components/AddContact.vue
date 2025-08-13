<template>
     <form @submit.prevent="handleSubmit">
        <div class="bg-info p-5 rounded m-5">
            <div class="h2 text-center">
                Add New Contact
            </div>
            <hr />
            <div class="input-group mb-3">
                <span class="input-group-text">Name</span>
                <input type="text" class="form-control" v-model.trim="contact.name" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Email</span>
                <input type="text" class="form-control" v-model.trim="contact.email" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Phone #</span>
                <input type="text" class="form-control" v-model.number="contact.phone" />
            </div>
            <div class="input-group mb-3">
                <input type="checkbox" class="form-check-input" v-model="contact.isFavourite" />
                <span class="form-check-label">&nbsp; Is Favourtie</span>
            </div>
            <div class="text-center pb-3">
                <button class="btn btn-primary m-2 w-25">Add</button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { reactive } from 'vue';

const contact = reactive({
    name:'',
    email: '',
    phone: '',
    isFavourite: false
});

function handleSubmit(){
    console.log(contact);
    contact.name = '';
    contact.email = '';
    contact.phone = '';   
    contact.isFavourite = false;
}
</script>