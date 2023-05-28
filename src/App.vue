<script>
import {RouterLink, RouterView} from 'vue-router'
import DesplegableComponent from "./components/DropdownMenuComponent.vue";
import NotificationsComponent from "./components/NotificationsComponent.vue";
import SearchFriendsComponent from "./components/SearchFriendsComponent.vue";

export default {
  name: 'App',
  components: {
    DesplegableComponent,
    NotificationsComponent,
    SearchFriendsComponent,
  },
  data() {
    return {
      isLoggedIn: false,
    }
  },
  created() {
    if (localStorage.getItem("token")) {
      this.isLoggedIn = true;

    }
  }
}
</script>

<template>

  <header v-if="isLoggedIn">
    <!--Sección del header1-->
    <section class="section-header-1">

      <!--Componente logo-->
      <RouterLink to="/MyUser" class="socialgift-link"><img class="socialGift-img" src="public/icons/socialGift.png"></RouterLink>
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
      <SearchFriendsComponent/>


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
    <section class="section-header-2">

      <!--Componente menu hamburguesa-->
      <DesplegableComponent/>

      <!--Componente buscador versión móvil-->
      <div class="SearchFriendsComponent-mobile">
        <SearchFriendsComponent/>
      </div>


      <!--Componente notificaciones -->
      <NotificationsComponent/>
    </section>
  </header>

  <main>
    <RouterView/>
  </main>

  <footer v-if="isLoggedIn">
    <div class="section-footer1">
      <p>Socialgift - by Marc Marca & Younes Bouahmed</p>
    </div>

    <div class="section-footer2">
      <p class="text-footer">Copyright 2023©</p>
    </div>
  </footer>

  <nav class="user-nav-footer" v-if="isLoggedIn">
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


