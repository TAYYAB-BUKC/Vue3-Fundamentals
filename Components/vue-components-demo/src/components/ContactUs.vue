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
                <button @click="toggleFavourite" type="button" :class="[isFavourite ? 'btn btn-danger' : 'btn btn-success']">
                    {{ isFavourite ? 'Remove From ' : 'Add To '}} Favourite
                </button>
            </div>
        </div>
        <span class="float-end small" v-if="ownerName != ''">*Above contact info belongs to {{ ownerName }}</span>
    </div>
</template>

<script setup>
    import { defineProps } from "vue";
    const props = defineProps({contactName: {
        type:String, required: true, default: 'N/A'
    }, contactPhone: Number, contactEmail: {
        type:String, default: 'N/A'
    }, ownerName: String, isFavourite: Boolean});

    const emitters = defineEmits(['updateFavouriteEmit']);

    function toggleFavourite(){
        emitters('updateFavouriteEmit', props.isFavourite, 'secondParam');
    }
</script>