<template>
    <div class="float-end">
        <button class="btn btn-outline-primary p-2 mb-3" type="button" @click="generateLuckyNumber()">
            <span v-if="luckyNumber === 0">Generate Luck Number <br> Range: 1 - {{ maxNumber }}</span>
            <span v-else>{{ luckyNumber }} <br> Click to generate new lucky number <br> Range: 1 - {{ maxNumber }}</span>
        </button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    let luckyNumber = ref(0);

    const props = defineProps({
        maxNumber: { type: Number, default: 100 }
    });


    function generateLuckyNumber(){
        luckyNumber.value = Math.floor(Math.random() * props.maxNumber);
    }
</script>