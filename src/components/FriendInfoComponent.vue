<script>
import router from "@/router";

export default {
  name: "FriendInfo",

}
</script>

<template>
  <img class="friend-profile-img" src="public/Icons/imageUserPic.png">

  <div class="friend-data">
    <div class="friend-info">
      <h2 class="friend-username">Username</h2>
      <h3 clas="friend-name">Firstname Secondname</h3>
    </div>

    <div class="friend-info-mobile">
      <p class="friend-username">Username</p>
    </div>

    <!--Componente botones del amigo-->
    <div class="friend-buttons-div">
      <RouterLink class="message-button" to="/Messages">Message</RouterLink>
      <button class="unfollow-button">Unfollow</button>
    </div>
  </div>
</template>