<template>
    <p>Counter: {{ counter }}</p>
    <button type="button" name="BtnIncrementCounter" @click="counter++"> Button clicked {{ counter }} times.</button> <br>
    <button type="button" name="BtnIncrementCounter1" @click="increment"> Increment</button><br>
    <button type="button" name="BtnDecrementCounter" @click="decrement"> Decrement</button><br>
</template>

<script setup>
    import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
    import { useCounter } from "@/composibles/useCounter";

    const { counter, increment, decrement } = useCounter(1000);

    onBeforeMount(() =>{
        console.log('ButtonCounter.vue - onBeforeMount');
    });

    onMounted(() =>{
        console.log('ButtonCounter.vue - onMounted');
    });

    onBeforeUpdate(() =>{
        console.log('ButtonCounter.vue - onBeforeUpdate');
    });

    onUpdated(() =>{
        console.log('ButtonCounter.vue - onUpdated');
    });

    onBeforeUnmount(() =>{
        console.log('ButtonCounter.vue - onBeforeUnmount');
    });

    onUnmounted(() =>{
        console.log('ButtonCounter.vue - onUnMounted');
    });
</script>