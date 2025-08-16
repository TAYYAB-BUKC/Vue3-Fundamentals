<style scoped>
</style>

<template>
    <div class="text-center">
        <h1 class="text-success">ARE YOU READY!!!!</h1>
        <h2 class="text-success">LET'S PLAY THE GAME</h2>

        <div>
            <h3 class="text-primary pb-3">Current Score: {{ gameStore.score }}</h3>
            <h3 class="text-primary pb-3">Max Score: {{ gameStore.maxHealth }}</h3>
        </div>
        <br>
        <div class="row" style="display: flex;justify-content: center;">
            <div class="col-5 m-5">
                <button class="form-control btn btn-success p-4" @click="Increment">Increment</button>
            </div>
            <div class="col-5 m-5">
                <button class="form-control btn btn-danger p-4" @click="Decrement">Decrement</button>
            </div>
            <div class="col-6 pt-4" >
                <button class="form-control btn btn-primary p-4" @click="Random">Random</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useGameStore } from '@/stores/gameStores';
    const gameStore = useGameStore();

    function Increment(){
        gameStore.score += Math.floor( Math.random() * 30) + 1;
    }

    function Decrement(){
        gameStore.score -= Math.floor( Math.random() * 30) + 1;
    }

    function Random(){
        Math.random() > 0.5 ? Increment() : Decrement();
    }
</script>