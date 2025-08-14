<style scoped>
  html,
body {
    height: 100%;
    width: 100%;
    margin: 0px;
    background: linear-gradient(90deg, rgba(47,54,64,1) 23%, rgba(24,27,32,1) 100%);
  }

</style>

<template>
  <div style="margin-top: 20px">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Header from './components/layout/header.vue';
</script>