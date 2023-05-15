<script>
import router from "@/router";

export default {
  name: "UserInfo",

  data() {
    return{
      username: '',
      fullName: '',
      email: '',
      image: '',
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
      console.log(id)
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/' + id, {
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
      .then(response => {
        console.log("ok: " + response.ok)
        console.log("status: " + response.status)
        console.log("status text: " + response.statusText)
        if (response.status === 200) {
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .then(data => {
        console.log("data: " + data)
        console.log(data.name)
        console.log(data.last_name)
        console.log(data.email)
        this.username = data.name
        this.fullName = data.last_name
        this.email = data.email
        console.log(data.image)
        this.image = data.image
      })
    },
  },
}
</script>

<template>
  <img class="user-img" src="image" alt="">
  <div class="user-data">
    <div class="user-info">
      <h2 class="user-username">{{ username }}</h2>
      <h3 class="user-complete-name">{{ fullName }}</h3>
      <p class="user-email">{{ email }}</p>
    </div>

    <div class="user-info-mobile">
      <p class="user-username">{{ username }}</p>
    </div>

    <nav class="edit-profile-nav">
      <RouterLink class="edit-profile-button" to="/EditUser">Edit profile</RouterLink>
    </nav>
  </div>
</template>