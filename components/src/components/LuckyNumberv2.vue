<template>
    <div class="col-6 bg-black text-white text-center p-4">
        <h3 class="text-success">Random Lucky Number</h3>
        <hr>
        <p>
            Max. Lucky Number <br><input type="text" name="maxNumber" v-model="maxNumber" />
        </p>
        <button class="btn btn-outline-primary p-2 mb-3" type="button" @click="generateLuckyNumber()">
            <span v-if="luckyNumber === 0">Generate Luck Number <br> Range: 1 - {{ maxNumber }}</span>
            <span v-else>{{ luckyNumber }} <br> Click to generate new lucky number <br> Range: 1 - {{ maxNumber }}</span>
        </button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    let luckyNumber = ref(0);

    const maxNumber = ref(1000);

    function generateLuckyNumber(){
        luckyNumber.value = Math.floor(Math.random() * maxNumber.value);
    }
</script>