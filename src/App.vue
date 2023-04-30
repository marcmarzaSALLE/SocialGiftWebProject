<template>

  <header>
    <!--Sección del header1-->
    <section class="section-header-1">

      <!--Componente logo-->
      <nav class="image-logo-nav">
        <RouterLink to="/MyUser" class="socialgift-link">SOCIALGIFT</RouterLink>
      </nav>

      <!--Componente languajes-->
      <div class="languages-div">
        <input type="checkbox" id="languages-menu" class="languages-menu-input">
        <label for="languages-menu" class="languages-menu-label"><img class="language-icon" src="public/icons/languagesIcon.png"></label>

        <nav class="languages-menu-nav">
          <p class="language-text">Languages</p>
          <li class="language-option-li"><a href="#" class="language-text-anchor"><img class="language-icon" src="public/icons/languagesIcon.png">EN</a></li>
          <li class="language-option-li"><a href="#" class="language-text-anchor"><img class="language-icon" src="public/icons/languagesIcon.png">ES</a></li>
          <li class="language-option-li"><a href="#" class="language-text-anchor"><img class="language-icon" src="public/icons/languagesIcon.png">FR</a></li>
        </nav>
      </div>

      <!--Componente buscador-->
      <div class="search-box-input">
        <form class="search-box" method="get">
          <input class="search-input" type="search" placeholder="Look for a friend..." />
          <button class="search-button" type="submit">
            <img class="search-icon" src="public/Icons/searchIcon.png">
          </button>
        </form>
      </div>

      <!--Componente navegación usuario-->
      <nav class="user-nav-header">
        <div class="user-nav-div">
          <RouterLink to="/MyLists"><img class="user-nav-icons" src="public/Icons/myListIcon.png"></RouterLink>
        </div>
        <div class="user-nav-div">
          <RouterLink to="/Messages"><img class="user-nav-icons" src="public/Icons/messagesIcon.png"></RouterLink>
        </div>
        <div class="user-nav-div">
          <RouterLink to="/MyUser"><img class="user-nav-icons" src="public/Icons/myUserIcon.png"></RouterLink>
        </div>
      </nav>

    </section>

    <!--Sección del heder2-->
    <section class="section-header-2" >

      <!--Componente menu hamburguesa-->
      <div class="menu-burger">

        <input type="checkbox" id="burger-menu" class="burger-menu-input">
        <label for="burger-menu" class="burger-menu-label"><img class="burger-icon" src="public/Icons/burgerMenuIcon.png"></label>

        <!--Desplegable-->
        <nav class="menu-burger-items-list">
          <h2 class="menu-burger-title">My Account</h2>
          <RouterLink class="menu-burger-link" to="/MyUser">My account</RouterLink>
          <RouterLink class="menu-burger-link" to="/friend">Friends</RouterLink>
          <RouterLink to="/EditUser" class="menu-burger-link">Edit profile</RouterLink>
          <RouterLink to="/EditPassword" class="menu-burger-link">Change password</RouterLink>
          <RouterLink class="menu-burger-link" to="/Login">Log out</RouterLink>

          <div class="line1"></div>
          <h2 class="menu-burger-title">Messages</h2>
          <RouterLink class="menu-burger-link" to="/Messages">Go to chat</RouterLink>

          <div class="line1"></div>
          <h2 class="menu-burger-title">My Lists</h2>
          <RouterLink class="menu-burger-link" to="/MyLists">Create new list</RouterLink>
        </nav>
      </div>

      <!--Componente buscador versión móvil-->
      <div class="search-box-input-mobile">
        <form class="search-box-mobile" method="get">
          <input class="search-mobile" type="search" placeholder="Look for a friend..." />
          <button class="search-button-mobile" type="submit">
            <img class="search-icon-mobile" src="public/Icons/searchIcon.png">
          </button>
        </form>
      </div>

      <!--Componente notificaciones -->
      <div class="notifications">
        <input type="checkbox" id="notifications" class="notifications-input">
        <label for="notifications" class="notifications-label"><img class="notifications-icon" src="public/Icons/notificationIcon.png"></label>

        <nav class="notifications-items-list">
          <h2 class="notifications-title">Notifications</h2>
          <!--Notificacion 1-->
          <div class="notification-banner">
            <!--Aqui van la información de la notificacion-->
          </div>
        </nav>
      </div>

    </section>

  </header>

  <main>
    <RouterView/>
  </main>

  <footer>
    <div class="section-footer1">
      <p>Socialgift - by Marc Marca & Younes Bouahmed</p>
    </div>

    <div class="section-footer2">
      <p class="text-footer">Copyright 2023©</p>
      <!--Parte navegación usuario-->
    </div>
  </footer>

  <nav class="user-nav-footer">
    <div class="user-nav-div">
      <RouterLink to="/MyLists"><img class="user-nav-icons" src="public/Icons/myListIcon.png"></RouterLink>
    </div>
    <div class="user-nav-div">
      <RouterLink to="/Messages"><img class="user-nav-icons" src="public/Icons/messagesIcon.png"></RouterLink>
    </div>
    <div class="user-nav-div">
      <RouterLink to="/MyUser"><img class="user-nav-icons" src="public/Icons/myUserIcon.png"></RouterLink>
    </div>
  </nav>

</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>


