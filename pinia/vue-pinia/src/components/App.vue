<style scoped></style>

<template>
  <div class="text-center text-success pt-3 h3">
    Count Engine
  </div>
  <hr>
  <div class="row">
    <div class="col-4 offset-1">
      <router-link :to="{ name: 'home' }" class="form-control badge rounded-pill text-bg-warning p-4">
        Home
      </router-link>
    </div>
    <div class="col-4 offset-1">
      <router-link :to="{ name: 'info' }" class="form-control badge rounded-pill text-bg-warning p-4">
        Info
      </router-link>
    </div>
  </div>
  <router-view></router-view>
</template>

<script setup></script>