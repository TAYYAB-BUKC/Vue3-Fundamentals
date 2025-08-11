<style>
</style>

<template>
    <div>
        {{message}}
    </div>
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