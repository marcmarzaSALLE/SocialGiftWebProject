<script>
export default {
  name: "DesplegableComponent",
  methods: {
    logout(){
      localStorage.removeItem("token");
      this.$router.push("/Login");
    },
    myUser(){
      this.$router.push("/MyUser");
    },
    myFriend(){
      this.$router.push("/friend");
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
    }
  }
};
</script>

<template>
  <div className="menu-burger">
    <input type="checkbox" id="burger-menu" className="burger-menu-input">
    <label htmlFor="burger-menu" className="burger-menu-label"><img className="burger-icon"
                                                                    src="public/Icons/burgerMenuIcon.png"></label>
    <!--Desplegable-->
    <nav className="menu-burger-items-list">
      <h2 className="menu-burger-title">My Account</h2>
      <RouterLink class="menu-burger-link" to="/MyUser" @click="myUser">My account</RouterLink>
      <RouterLink to="/EditUser" class="menu-burger-link" @click="editProfile">Edit profile</RouterLink>
      <RouterLink to="/EditPassword" class="menu-burger-link" @click="editPassword">Change password</RouterLink>
      <RouterLink class="menu-burger-link" to="/Login" @click="logout">Log out</RouterLink>

      <div className="line1"></div>
      <h2 className="menu-burger-title">Messages</h2>
      <RouterLink class="menu-burger-link" to="/Messages" @click="userChat" >Go to chat</RouterLink>

      <div className="line1"></div>
      <h2 className="menu-burger-title">My Lists</h2>
      <RouterLink class="menu-burger-link" to="/MyLists" @click="createList">Create new list</RouterLink>
    </nav>
  </div>
</template>

<style scoped>

</style>