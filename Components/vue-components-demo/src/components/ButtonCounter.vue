<template>
    <p>Counter: {{ counter }}</p>
    <button type="button" name="BtnIncrementCounter" @click="counter++"> Button clicked {{ counter }} times.</button>
</template>

<script setup>
    import { ref } from "vue";
    const counter = ref(0);
</script>