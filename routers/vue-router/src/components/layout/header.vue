<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="{ name: 'basicHome' }">Vue Router</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" :to="{ name: 'basicHome' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'contact' }">Contact Us</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Product
              </a>
              <ul class="dropdown-menu">
                <li><router-link class="dropdown-item" :to="{ name: 'productList' }">List</router-link></li>
                <li><router-link class="dropdown-item" :to="{ name: 'productDetailWithNoParams' }">Details</router-link></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <router-link class="nav-link" to="/login">Login</router-link>
          </form>
        </div>
      </div>
    </nav>
</template>