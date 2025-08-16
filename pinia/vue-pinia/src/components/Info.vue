<template>
    <div class="text-center">
        <h1 class="text-success">This is the Info page</h1>
        <p>
            This is a game where you can increment, decrement or randomize the score.
            The score starts at 0and you can win by reaching {{ gameStore.maxHealth }}.
        </p>
        <p>Winning Score: </p>
        <input v-model="gameStore.maxHealth" />    
    </div>
</template>

<script setup>
    import { useGameStore } from '@/stores/gameStores';
    const gameStore = useGameStore();
</script>