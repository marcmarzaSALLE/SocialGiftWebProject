<script>
import router from "@/router";
import { RouterLink } from "vue-router";

export default {
  name: "FriendInfo",
  props: {
    friend: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      followText: "Unfollow"
    }
  },

  methods: {
    unfollowFriend() {
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/'+ this.friend.id, {
        method: 'DELETE',
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error(response.statusText)
          }
        })
        .catch(error => {
          console.log("error: " + error)
        })
    }
  }
}

</script>

<template>
  <img class="friend-profile-img" :src="friend.image">

  <div class="friend-data">
    <div class="friend-info">
      <h2 class="friend-username">{{friend.email}}</h2>
      <h3 class="friend-name">{{friend.name +" "+friend.last_name}}</h3>
    </div>

    <div class="friend-info-mobile">
      <p class="friend-username">Username</p>
    </div>

    <!--Componente botones del amigo-->
    <div class="friend-buttons-div">
      <router-link class="message-button" to="/Messages">Message</router-link>
      <button class="unfollow-button" @click="unfollowFriend()">{{followText}}</button>
    </div>
  </div>
</template>