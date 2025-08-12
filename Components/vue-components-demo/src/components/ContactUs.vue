<template>
    <div class="bg-info rounded p-2 m-2">
        <h1>For Contact</h1>
        <p>Please send an email to {{ contactEmail }}</p>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    const contactEmail = ref('write2tayyabarsalan+vue@gmail.com');
</script>