<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>
<template>
  <link rel="stylesheet" type="text/css" href="./src/assets/appVue.css">

  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView/>
</template>


<style scoped>
</style>
