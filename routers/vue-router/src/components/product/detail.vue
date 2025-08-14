<template>
    <h1>Product Detail</h1>
    <h1>Product ID: {{ route.params.productId }}</h1>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route);
</script>