<template>

  <header>
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
      <div className="search-box-input">
        <form className="search-box" method="get">
          <input className="search-input" type="search" placeholder="Look for a friend..."/>
          <button className="search-button" type="submit">
            <img className="search-icon" src="public/Icons/searchIcon.png">
          </button>
        </form>
      </div>

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
      <div className="menu-burger">

        <input type="checkbox" id="burger-menu" className="burger-menu-input">
        <label htmlFor="burger-menu" className="burger-menu-label"><img className="burger-icon"
                                                                        src="public/Icons/burgerMenuIcon.png"></label>

        <!--Desplegable-->
        <nav className="menu-burger-items-list">
          <h2 className="menu-burger-title">My Account</h2>
          <RouterLink class="menu-burger-link" to="/MyUser">My account</RouterLink>
          <RouterLink class="menu-burger-link" to="/friend">Friends</RouterLink>
          <RouterLink to="/EditUser" class="menu-burger-link">Edit profile</RouterLink>
          <RouterLink to="/EditPassword" class="menu-burger-link">Change password</RouterLink>
          <RouterLink class="menu-burger-link" to="/Login">Log out</RouterLink>

          <div className="line1"></div>
          <h2 className="menu-burger-title">Messages</h2>
          <RouterLink class="menu-burger-link" to="/Messages">Go to chat</RouterLink>

          <div className="line1"></div>
          <h2 className="menu-burger-title">My Lists</h2>
          <RouterLink class="menu-burger-link" to="/MyLists">Create new list</RouterLink>
        </nav>
      </div>

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
      <div className="notifications">
        <input type="checkbox" id="notifications" className="notifications-input">
        <label htmlFor="notifications" className="notifications-label"><img className="notifications-icon"
                                                                            src="public/Icons/notificationIcon.png"></label>

        <nav className="notifications-items-list">
          <h2 className="notifications-title">Notifications</h2>
          <!--Notificacion 1-->
          <div className="notification-banner">
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
    <div className="section-footer1">
      <p>Socialgift - by Marc Marca & Younes Bouahmed</p>
    </div>

    <div className="section-footer2">
      <p className="text-footer">Copyright 2023©</p>
      <!--Parte navegación usuario-->
    </div>
  </footer>

  <nav className="user-nav-footer">
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

<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>


