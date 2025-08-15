<style scoped></style>

<template>
  <div>
    <h1 class="text-primary text-center">Learn Vue - API Request</h1>
  </div>
  <!-- <hr>
  <div v-for="user in users" :key="user.id">
    <p>{{ user.name }}</p>
    <p>{{ user.email }}</p>
    <hr>
  </div> -->
  <div class="container p-4">
    <div>
      <h1 class="text-success text-center">TravelOPedia</h1>
    </div>
    <hr>
    <table class="table table-striped table-light">
      <thead>
        <td>Name</td>
        <td>Days</td>
        <td>Price</td>
      </thead>
      <tbody class="table-light">
        <tr v-for="destination in destinations" :key="destination.id">
          <td>{{ destination.name }}</td>
          <td>{{ destination.days }}</td>
          <td>{{ destination.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { reactive, onMounted } from 'vue';
  import axios from 'axios';
  let users = reactive([]);
  let destinations = reactive([]);

  onMounted(() => {
    // axios.get('https://jsonplaceholder.typicode.com/users')
    //      .then((response) => {
    //         console.log(response);  
    //         users.push(...response.data);
    //      }).catch((error) => {
    //         console.log('Error Occured');  
    //         console.log(error);
    //      });

    // fetch('https://jsonplaceholder.typicode.com/users')
    //      .then((response) => response.json())
    //      .then((data) => {
    //         console.log(data);  
    //         users.push(...data);
    //      }).catch((error) => {
    //         console.log('Error Occured');  
    //         console.log(error);
    //      });

    // console.log('users');
    // console.log(users);

    axios.get('http://localhost:3000/destination')
         .then((response) => {
            console.log(response);  
            destinations.push(...response.data);
         }).catch((error) => {
            console.log('Error Occured');  
            console.log(error);
         });
  });
</script>