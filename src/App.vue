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

      <!--Parte languajes-->
      <div class="languages-div">
        <input type="checkbox" id="languages-menu" class="languages-menu-input">
        <label for="languages-menu" class="languages-menu-label"><img class="language-icon" src="public/icons/languagesIcon.png"></label>

        <div class="languages-menu-div">
          <p class="language-text">Languages</p>
          <li class="language-option-li"><a href="#"><img class="language-icon" src="public/icons/languagesIcon.png">EN</a></li>
          <li class="language-option-li"><a href="#"><img class="language-icon" src="public/icons/languagesIcon.png">ES</a></li>
          <li class="language-option-li"><a href="#"><img class="language-icon" src="public/icons/languagesIcon.png">FR</a></li>
        </div>
      </div>

      <!--Parte buscador-->
      <div class="search-box-input">
        <form class="search-box" method="get">
          <input class="search" type="search" placeholder="Search user" />
        </form>
        <button class="search-button" type="submit">
          <img class="search-icon" src="public/Icons/searchIcon.png">
        </button>
      </div>


      <!--Parte navegación usuario-->
      <div class="user-nav-header">
        <RouterLink to="/MyLists"><img class="user-nav-icons" src="public/Icons/myListIcon.png"></RouterLink>
        <RouterLink to="/Messages"><img class="user-nav-icons" src="public/Icons/messagesIcon.png"></RouterLink>
        <RouterLink to="/MyUser"><img class="user-nav-icons" src="public/Icons/myUserIcon.png"></RouterLink>
      </div>

    </section>

    <!--Seccion del heder2-->
    <section class="section-header-2" >


      <!-- Menu hamburg -->
      <div class="menu-burger">
        <input type="checkbox" />
        <input type="checkbox" id="burger-menu" class="burger-menu-input">
        <label for="burger-menu" class="burger-menu-label">    <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line id="burger-line1" x1="4" y1="6" x2="20" y2="6" />
          <line id="burger-line1" x1="4" y1="12" x2="20" y2="12" />
          <line id="burger-line1" x1="4" y1="18" x2="20" y2="18" />
        </svg> </label>


        <ul class="menu-burger-items-list">
          <div class="menu-burger-items-div">
            <h2 class="menu-burger-title">My Account</h2>
            <li class="menu-burger-link">My account</li>
            <li class="menu-burger-link">Friends</li>
            <li class="menu-burger-link">Bookings</li>
            <li class="menu-burger-link">Edit profile</li>
            <li class="menu-burger-link">Change password</li>
            <li class="menu-burger-link">Log out</li>
            <div class="line"></div>
            <h2 class="menu-burger-title">Messages</h2>
            <li class="menu-burger-link">Go to chat</li>
            <div class="line"></div>
            <h2 class="menu-burger-title">My Lists</h2>
            <li class="menu-burger-link">Create new list</li>
            <li class="menu-burger-link">Edit list</li>
          </div>
        </ul>
      </div>

      <!-- Notificaciones
      <div class="notifications">
        <img class="notifications-icon" src="public/Icons/giftIcon.png">
      </div>-->

      <div class="notifications">
        <input type="checkbox" id="notifications" class="notifications-input">
        <label for="notifications" class="notifications-label"> <svg xmlns="http://www.w3.org/2000/svg" class="notifications-icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <rect x="3" y="8" width="18" height="4" rx="1" />
          <line x1="12" y1="8" x2="12" y2="21" />
          <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
          <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
        </svg> </label>

        <ul class="notifications-items-list">
          <div class="notifications-items-div">
            <h2 class="notifications-title">Notifications</h2>

            <div class="notification-banner">
            </div>

          </div>
        </ul>
      </div>

    </section>

  </header>

  <main style="padding-top: 10px">
    <RouterView/>

  </main>

  <footer>
    <div class="sectionFooter1">
      <p>Footer 1</p>

    </div>
    <div class="sectionFooter2">
      <p>Copyright 2023©</p>
    </div>
  </footer>
</template>


