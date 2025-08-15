<style scoped></style>

<template>
  <div>Learn Vue - API Request</div>

  <hr>
  <div v-for="user in users" :key="user.id">
    <p>{{ user.name }}</p>
    <p>{{ user.email }}</p>
    <hr>
  </div>
</template>

<script setup>
  import { reactive, onMounted } from 'vue';
  import axios from 'axios';
  let users = reactive([]);

  onMounted(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
         .then((response) => {
            console.log(response);  
            users.push(...response.data);
         }).catch((error) => {
            console.log('Error Occured');  
            console.log(error);
         });

    console.log('users');
    console.log(users);
  });
</script>