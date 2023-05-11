<script>
import router from "@/router";

export default {
  name: "UserInfo",
  props: {
    username: String,
    fullName: String,
    email: String
  },
  methods:{
    getUserInfo() {
      let id = localStorage.getItem("id")
      console.log(id)
      fetch(https:'//balandrau.salle.url.edu/i3/socialgift/api/v1/users/'+id





    },

  },
}

</script>

<template>
  <div class="user-info">
    <h2 class="user-username">Username{{ username }}</h2>
    <h3 class="user-complete-name">Firstname Secondname{{ fullName }}</h3>
    <p class="user-email">username@email.com{{ email }}</p>
  </div>

  <div class="user-info-mobile">
    <p class="user-username">Username</p>
  </div>
</template>