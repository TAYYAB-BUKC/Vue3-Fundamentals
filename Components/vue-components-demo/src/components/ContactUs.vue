<template>
    <div class="bg-info rounded p-2 m-2">
        <h1>Below is the contact information</h1>
        <p>Name: {{ contactName }}</p>
        <p>Phone #: {{ contactPhone }}</p>
        <p>Email: {{ contactEmail }}</p>
    </div>
</template>

<script setup>
    import { defineProps } from "vue";
    const props = defineProps(['contactName', 'contactPhone', 'contactEmail']);
</script>