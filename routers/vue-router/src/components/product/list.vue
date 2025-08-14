<template>
    <h1>Product List</h1>
    <div v-for="product in products">
        <router-link :to="{ name: 'productDetailWithParams', params: { productId: product.id } }">{{ product.name }}</router-link>
    </div>
</template>

<script setup>
    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' },
        { id: 5, name: 'Product 5' },
    ];
</script>