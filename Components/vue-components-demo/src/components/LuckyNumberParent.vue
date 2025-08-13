<style>
</style>

<template>
    <div class="container">
        <div class="text-center">
            <slot></slot>
            <button class="btn btn-primary m-2" @click="newVersion = !newVersion">Toggle Components</button>
            <br>
            <button class="btn btn-primary m-2" @click="newVersion = false">Lucky Number v1</button>
            <button class="btn btn-primary m-2" @click="newVersion = true">Lucky Number v2</button>
            <br>
            <keep-alive :exclude="['LuckyNumber']" :include="['LuckyNumber', 'LuckyNumberv2']">
                <component :is="luckyNumbercomponent"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import LuckyNumber from './LuckyNumber.vue';
    import LuckyNumberv2 from './LuckyNumberv2.vue';

    const newVersion = ref(false);

    const luckyNumbercomponent = computed(() => {
        return newVersion.value ? LuckyNumberv2 : LuckyNumber;
    });
</script>