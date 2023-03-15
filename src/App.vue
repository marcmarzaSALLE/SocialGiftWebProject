<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>
<template>
  <header>
    <section class="sectionHeader1" >
      <div class="imageLogoDiv">
        <h2>SOCIALGIFT</h2>
      </div>

      <div class ="lenguages">
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
    <section class="sectionHeader2">
      <div class="sub-header">
        <nav>
          <div class="hamburger-menu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>

        </nav>
        <div class="notification">
          <img spc="icono-caja-regalo.png" alt="Notificaciones">
          <div class="notification-menu">
            <Ul>
              <li><a href="#">Notificación 1</a></li>
              <li><a href="#">Notificación 2</a></li>
              <li><a href="#">Notificación 3</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </header>

  <main>
    <RouterView/>
  </main>
</template>

