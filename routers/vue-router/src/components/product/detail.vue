<template>
    <h1>Product Detail</h1>
    <div v-if="route.params.productId">
        <h1>Product ID: {{ route.params.productId }}</h1>
    </div>
    <div v-else>
        <h1>No Product ID found.</h1>
    </div>
    <div v-if="route.params.categoryId">
        <h1>Category ID: {{ route.params.categoryId }}</h1>
    </div>
    <div v-else>
        <h1>No Category ID found.</h1>
    </div>

    <button class="btn btn-primary" @click="$router.go(-1)">Back to List</button>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route);
</script>