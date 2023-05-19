<script>
import router from "@/router";
import { RouterLink } from "vue-router";

export default {
  name: "FriendInfo",
  data() {
    return {
      friend: {},
    };
  },
  created() {
    const friendId = this.$route.params.id;
    console.log("friendId: " + friendId);
    this.getFriendInfo(friendId);
  },

  methods: {
    getFriendInfo(id) {
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/' + id, {
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }

      })
        .then((data) => data.json())
        .then((json) => {
          this.friend = json;
        })
        .catch((error) => {
          console.log("error: " + error);
        });
    },

    unfollowFriend(id) {
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/'+ id, {
        method: 'DELETE',
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
          this.getFriends()
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
      <button class="unfollow-button" @click="unfollowFriend(friendId)">Unfollow</button>
    </div>
  </div>
</template>