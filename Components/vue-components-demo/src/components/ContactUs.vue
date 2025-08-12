<template>
    <div class="bg-info rounded p-2 m-2">
        <h1>Below is the contact information</h1>
        <p>Name: {{ contactName }}</p>
        <p>Phone #: +92{{ contactPhone }}</p>
        <p>Email: {{ contactEmail }}</p>
        <p v-if="ownerName != ''">*Above contact info belongs to {{ ownerName }}</p>
    </div>
</template>

<script setup>
    import { defineProps } from "vue";
    const props = defineProps({contactName: String, contactPhone: Number, contactEmail: String, ownerName: String});
</script>