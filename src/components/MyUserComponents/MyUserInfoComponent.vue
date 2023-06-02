<script>
import router from "@/router";

export default {
  name: "UserInfo",
  data() {
    return{
     userInfo:{}
    }
  },
  created() {
    if (localStorage.getItem("token")) {
      this.getUserInfo()
    } else {
      router.push({ name: "Login" });
    }
  },
  methods: {
    getUserInfo() {
      let id = localStorage.getItem("idUser")
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/' + id, {
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
      .then(data => data.json()) // Convertir la respuesta a JSON
      .then(json => {
        console.log("data: " + json)
        this.userInfo = json // Asignar la lista de deseos a la variable wishlists
        //Guardamos el userInfor en el localStorage
        localStorage.setItem("userInfo", JSON.stringify(this.userInfo))
      })
      .catch(error => {
        console.log("error: " + error)
      })
    },
  },
}
</script>

<template>
  <section class="user-info-container">
    <img class="user-img" :src="userInfo.image">
    <div class="user-data">
      <h2 class="user-username">{{ userInfo.name +" "+userInfo.last_name }}</h2>
      <h2 class="user-email">{{ userInfo.email }}</h2>

      <nav class="edit-profile-nav">
        <RouterLink class="edit-profile-button" to="/EditUser">Edit profile</RouterLink>
      </nav>
    </div>
  </section>
</template>