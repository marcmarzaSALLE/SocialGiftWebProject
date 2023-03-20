<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>
<template>
  <header>
    <section class="sectionHeader1">
      <div class="imageLogoDiv">
        <h2>SOCIALGIFT</h2>
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
    <section class="sectionHeader2">
      <div class="sub-header">

          <div class="hamburger-menu">
            <input id="menu-toggle" type="checkbox"/>
            <label for="menu-toggle" class="menu-btn">
              <span></span>
            </label>
            <ul class="menu_box">
              <li><a class="menu-item" href="#">MyUser</a></li>
              <li><a class="menu-item" href="#">Messages</a></li>
              <li><a class="menu-item" href="#">MyLists</a></li>
            </ul>
          </div>



        <div class="notification">
          <div class="notification-menu">
            <img class="notification-icon" src="https://cdn-icons-png.flaticon.com/512/1361/1361713.png">
          </div>
        </div>
      </div>
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

