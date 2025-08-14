<template>
    <h1>Home Page</h1>
    <button class="btn btn-primary" @click="GoToContactUs">Go To ContactUs</button>
</template>


<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    function GoToContactUs(){
        router.push({ name: 'contactUs' });
    }
</script>