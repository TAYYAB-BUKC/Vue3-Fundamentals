<template>
    <div class="bg-info rounded p-2 pb-4 m-2">
        <div class="row">
            <div class="col-6">
                <h1>Below is the contact information</h1>
                <p>Name: {{ contactName }}</p>
                <p>Phone #: +92{{ contactPhone }}</p>
                <p>Email: {{ contactEmail }}</p>
            </div>
            <div class="col-3">
                <button @click="emitters('updateFavouriteEmit', {isFavourite: props.isFavourite, name: props.contactName});" type="button" :class="[isFavourite ? 'btn btn-danger' : 'btn btn-success']">
                    {{ isFavourite ? 'Remove From ' : 'Add To '}} Favourite
                </button>
            </div>
            <div class="col-3">
                <lucky-number></lucky-number>
            </div>
        </div>
        <span class="float-end small" v-if="ownerName != ''">*Above contact info belongs to {{ ownerName }}</span>
    </div>
</template>

<script setup>
    import { defineProps } from "vue";
    import LuckyNumber from './LuckyNumber.vue';

    const props = defineProps({contactName: {
        type:String, required: true, default: 'N/A'
    }, contactPhone: Number, contactEmail: {
        type:String, default: 'N/A'
    }, ownerName: String, isFavourite: Boolean});

    const emitters = defineEmits(['updateFavouriteEmit']);

    function toggleFavourite(){
        // For Objects
        //emitters('updateFavouriteEmit', [props.isFavourite, props.contactName]);

        // For Array
        emitters('updateFavouriteEmit', {isFavourite: props.isFavourite, name: props.contactName});
    }
</script>