<script>
import {RouterLink, RouterView} from 'vue-router'
import DesplegableComponent from "./components/DropdownMenuComponent.vue";
import notificationsComponent from "./components/NotificationsComponent.vue";
import searchUserComponent from "./components/SearchUserComponent.vue";

export default {
  name: 'App',
  components: {
    DesplegableComponent,
    notificationsComponent,
    searchUserComponent
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
    <section className="section-header-1">

      <!--Componente logo-->
      <RouterLink to="/MyUser" class="socialgift-link"><img className="socialGift-img"
                                                            src="public/icons/socialGift.png"></RouterLink>
      <!--Componente languajes-->
      <div className="languages-div">
        <input type="checkbox" id="languages-menu" className="languages-menu-input">
        <label htmlFor="languages-menu" className="languages-menu-label"><img className="language-icon"
                                                                              src="public/icons/languagesIcon.png"></label>

        <nav className="languages-menu-nav">
          <p className="language-text">Languages</p>
          <li className="language-option-li"><a href="#" className="language-text-anchor"><img className="language-icon"
                                                                                               src="public/icons/languagesIcon.png">EN</a>
          </li>
          <li className="language-option-li"><a href="#" className="language-text-anchor"><img className="language-icon"
                                                                                               src="public/icons/languagesIcon.png">ES</a>
          </li>
          <li className="language-option-li"><a href="#" className="language-text-anchor"><img className="language-icon"
                                                                                               src="public/icons/languagesIcon.png">FR</a>
          </li>
        </nav>
      </div>

      <!--Componente buscador-->
      <searchUserComponent/>

      <!--Componente navegación usuario-->
      <nav className="user-nav-header">
        <div className="user-nav-div">
          <RouterLink to="/MyLists"><img className="user-nav-icons" src="public/Icons/myListIcon.png"></RouterLink>
        </div>
        <div className="user-nav-div">
          <RouterLink to="/Messages"><img className="user-nav-icons" src="public/Icons/messagesIcon.png"></RouterLink>
        </div>
        <div className="user-nav-div">
          <RouterLink to="/MyUser"><img className="user-nav-icons" src="public/Icons/myUserIcon.png"></RouterLink>
        </div>
      </nav>

    </section>

    <!--Sección del heder2-->
    <section className="section-header-2">

      <!--Componente menu hamburguesa-->
      <DesplegableComponent/>

      <!--Componente buscador versión móvil-->
      <div className="search-box-input-mobile">
        <form className="search-box-mobile" method="get">
          <input className="search-mobile" type="search" placeholder="Look for a friend..."/>
          <button className="search-button-mobile" type="submit">
            <img className="search-icon-mobile" src="public/Icons/searchIcon.png">
          </button>
        </form>
      </div>

      <!--Componente notificaciones -->
      <notificationsComponent/>
    </section>
  </header>

  <main>
    <RouterView/>
  </main>

  <footer v-if="isLoggedIn">
    <div className="section-footer1">
      <p>Socialgift - by Marc Marca & Younes Bouahmed</p>
    </div>

    <div className="section-footer2">
      <p className="text-footer">Copyright 2023©</p>
      <!--Parte navegación usuario-->
    </div>
  </footer>

  <nav className="user-nav-footer" v-if="isLoggedIn">
    <div className="user-nav-div">
      <RouterLink to="/MyLists"><img className="user-nav-icons" src="public/Icons/myListIcon.png"></RouterLink>
    </div>
    <div className="user-nav-div">
      <RouterLink to="/Messages"><img className="user-nav-icons" src="public/Icons/messagesIcon.png"></RouterLink>
    </div>
    <div className="user-nav-div">
      <RouterLink to="/MyUser"><img className="user-nav-icons" src="public/Icons/myUserIcon.png"></RouterLink>
    </div>
  </nav>

</template>



