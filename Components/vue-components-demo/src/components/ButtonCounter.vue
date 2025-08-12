<template>
    <p>Counter: {{ counter }}</p>
    <button type="button" name="BtnIncrementCounter" @click="counter++"> Button clicked {{ counter }} times.</button>
</template>

<script>
    import { ref } from "vue";
    export default {
        setup(){
            const counter = ref(0);

            return {
                counter
            }
        }
    }
</script>