<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>
<template>

  <header>
    <section class="sectionHeader1">
      <div class="imageLogoDiv">
        <RouterLink to="/MyUser">SOCIALGIFT</RouterLink>
      </div>

      <div class="lenguages">
        <h3>ES</h3>
      </div>

      <div class="searchBoxInput">
        <form class="searchBox" method="get">
          <input class="search" type="search" placeholder="Busca tu Archivo"/>
        </form>
      </div>

      <div class="user-div">
        <nav class="user-nav">
          <RouterLink to="/MyUser">MyUser</RouterLink>
          <RouterLink to="/Messages">Messages</RouterLink>
          <RouterLink to="/MyLists">MyLists</RouterLink>
        </nav>
      </div>

    </section>

 <!--Seccion del heder2-->
    <section class="sectionHeader2" >
        <!-- Notificaciones -->
        <section>
          <p>Tetoooooo</p>
        </section>
    </section>
  </header>


  <main>

    <RouterView/>
  </main>
  <footer>
    <section class="sectionFooter1">
      <p>Copyright 2023©</p>
    </section>
  </footer>
</template>


