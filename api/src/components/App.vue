<style scoped>
  .loader {
    color: #ffffff;
    font-size: 10px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    animation: mulShdSpin 1.3s infinite linear;
    transform: translateZ(0);
  }

  @keyframes mulShdSpin {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 
      2em -2em 0 0em, 3em 0 0 -1em, 
      2em 2em 0 -1em, 0 3em 0 -1em, 
      -2em 2em 0 -1em, -3em 0 0 -1em, 
      -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 
      3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, 
      -2em 2em 0 -1em, -3em 0 0 -1em, 
      -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 
      2em -2em 0 0, 3em 0 0 0.2em, 
      2em 2em 0 0, 0 3em 0 -1em, 
      -2em 2em 0 -1em, -3em 0 0 -1em, 
      -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
      3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, 
      -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
      3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, 
      -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
      3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, 
      -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 
      3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
      -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 
      3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
      -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }
</style>

<template>
  <div>
    <div>
      <h1 class="text-primary text-center">Learn Vue - API Request</h1>
    </div>
    <div class="mt-2 text-center" v-if="isLoading" style="padding: 50px;">
      <span class="loader"></span>
    </div>
    <!-- <div class="mt-2 text-center">
      <span class="loader"></span>
    </div> -->
    <div v-if="users.length > 0">
      <hr>
      <div v-for="user in users" :key="user.id">
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
        <hr>
      </div>
    </div>
    <div v-if="destinations.length > 0" class="container p-4 bg-white">
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
  </div>
</template>

<script setup>
  import { reactive, onMounted, ref } from 'vue';
  import axios from 'axios';
  let users = reactive([]);
  let destinations = reactive([]);
  let isLoading= ref(true);

  onMounted(() => {
    //LoadUsersWithAxios();
    
    // console.log('users');
    // console.log(users);
    
    //LoadUsersWithFetch();

    LoadDestinationsWithAxios();
  });

  function LoadUsersWithAxios(){
    axios.get('https://jsonplaceholder.typicode.com/users')
         .then((response) => {
            console.log(response);  
            users.push(...response.data);
         }).catch((error) => {
            console.log('Error Occured');  
            console.log(error);
         });
  }

  function LoadUsersWithFetch(){
    fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);  
            users.push(...data);
         }).catch((error) => {
            console.log('Error Occured');  
            console.log(error);
         });
  }

  function LoadDestinationsWithAxios(){
    isLoading.value = true;
    axios.get('http://localhost:3000/destination')
         .then((response) => {
            new Promise((resolve) => setTimeout(resolve, 5000)).then(() => {
              destinations.push(...response.data);
              console.log(response);  
              isLoading.value = false;
            });
         }).catch((error) => {
            console.log('Error Occured');  
            console.log(error);
            isLoading.value = false;
         });
  }
</script>