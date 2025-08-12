<style>
</style>

<template>
    <div>
        {{message}}
    </div>
    <contact-us></contact-us>
    <button-counter></button-counter>
</template>

<script>
    export default{
        setup(){
            const message = 'Hello World From Vue 3 + VITE';
        
            return {
                message
            }
        }
    }
</script>