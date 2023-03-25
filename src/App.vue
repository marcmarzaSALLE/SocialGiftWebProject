<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>
<template>

  <header>
    <!--Seccion del header1-->
    <section class="section-header-1">

      <!--Parte logo-->
      <div class="image-logo-div">
        <RouterLink to="/MyUser">SOCIALGIFT</RouterLink>
      </div>

      <!--Parte languages-->

      <nav class="languages-nav">
        <input type="checkbox" id="languages-menu" class="languages-menu-input">
        <label for="languages-menu" class="languages-menu-label">
          <img class="language-icon" src="public/icons/languagesIcon.png">
        </label>
        <ul class="languages-menu-ul">
          <p class="language-text">Languages</p>
          <li class="language-option-li"><a href="#"><img class="language-icon" src="public/icons/languagesIcon.png">EN</a></li>
          <li class="language-option-li"><a href="#"><img class="language-icon" src="public/icons/languagesIcon.png">ES</a></li>
          <li class="language-option-li"><a href="#"><img class="language-icon" src="public/icons/languagesIcon.png">FR</a></li>
        </ul>
      </nav>


      <!--Parte buscador-->
      <div class="search-box-input">
        <form class="search-box" method="get">
          <input class="search" type="search" placeholder="Search user" />
        </form>
      </div>

      <!--Parte navegación usuario-->
      <div class="user-nav-header">
        <nav class="user-nav-elements">
          <RouterLink to="/MyLists"><img class="user-nav-icons" src="public/Icons/myListIcon.png"></RouterLink>
          <RouterLink to="/Messages"><img class="user-nav-icons" src="public/Icons/messagesIcon.png"></RouterLink>
          <RouterLink to="/MyUser"><img class="user-nav-icons" src="public/Icons/myUserIcon.png"></RouterLink>
        </nav>
      </div>

    </section>

    <!--Seccion del heder2-->
    <section class="section-header-2" >

      <!-- Menu hamburguer-->
      <div class="hambuguer-nav">
        <img class="hambuguer-icon" src="public/Icons/hambuguerIcon.png">
      </div>

      <!-- Notificaciones -->
      <div class="notifications">
        <img class="notifications-icon" src="public/Icons/giftIcon.png">
      </div>

    </section>

  </header>

  <main style="padding-top: 10px">
    <RouterView/>

  </main>

  <footer>
    <section class="sectionFooter1">
      <div>

      </div>
    </section>
    <section class="sectionFooter2">
      <p>Copyright 2023©</p>
    </section>
  </footer>
</template>


