<script>
export default {
  name: "BurgerMenu",
  data() {
    return {
      showResults: false,
    };
  },
  methods: {
    logout(){
      localStorage.removeItem("token");
      this.$router.push("/Login");
    },
    myUser(){
      this.$router.push("/MyUser");
    },
    editProfile(){
      this.$router.push("/EditUser");
    },
    editPassword(){
      this.$router.push("/EditPassword");
    },
    userChat(){
      this.$router.push("/Messages");
    },
    createList(){
      this.$router.push("/MyLists");
    },
    toggleMenu() {
      this.showResults = !this.showResults;
    }
  }
};
</script>

<template>
  <div class="menu-burger">
    <input type="checkbox" id="burger-menu" class="burger-menu-input" @click="toggleMenu">
    <label for="burger-menu" class="burger-menu-label">
      <span class="burger-line"></span>
      <span class="burger-line"></span>
      <span class="burger-line"></span>
    </label>
  </div>

  <!--Desplegable-->
  <nav class="menu-burger-items-list" :class="{ 'hide-results-menu': !showResults, 'show-results-menu': showResults}" >
    <h2 class="menu-burger-title">My Account</h2>
    <RouterLink class="menu-burger-link" to="/MyUser" @click="myUser">My account</RouterLink>
    <RouterLink to="/EditUser" class="menu-burger-link" @click="editProfile">Edit profile</RouterLink>
    <RouterLink to="/EditPassword" class="menu-burger-link" @click="editPassword">Change password</RouterLink>
    <RouterLink class="menu-burger-link" to="/Login" @click="logout">Log out</RouterLink>

    <div class="line"></div>
    <h2 class="menu-burger-title">Messages</h2>
    <RouterLink class="menu-burger-link" to="/Messages" @click="userChat" >Go to chat</RouterLink>

    <div class="line"></div>
    <h2 class="menu-burger-title">My Lists</h2>
    <RouterLink class="menu-burger-link" to="/MyLists" @click="createList">Create new list</RouterLink>
  </nav>
</template>

