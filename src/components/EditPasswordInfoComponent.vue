<script>
import router from "@/router";

export default {
  name: "EditPasswordInfo",
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
  },

}
</script>

<template>
  <img class="user-img" :src="userInfo.image">

  <div class="user-data">
    <div class="user-info">
      <h2 class="user-username">{{ userInfo.name +" "+userInfo.last_name }}</h2>
      <h3 class="user-email">{{ userInfo.email }}</h3>
    </div>

    <div class="user-info-mobile">
      <p class="user-username">{{ userInfo.name +" "+userInfo.last_name }}</p>
    </div>

    <nav class="edit-profile-nav">
      <RouterLink class="edit-profile-button" to="/EditUser">Edit profile</RouterLink>
    </nav>

  </div>




</template>