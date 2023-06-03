<script>
import router from "@/router";

export default {
  name: "FriendInfo",
  props: {
    friendId: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      friend: {},
    }
  },
  created() {
    if (localStorage.getItem("token")) {
      this.getFriendInfo();
    } else {
      router.push({ name: "Login" });
    }
  },
  methods: {
    getFriendInfo() {
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/' + this.friendId, {
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

    unfollowFriend() {
      if (confirm("Are you sure you want to unfollow "+this.friend.name +" "+this.friend.last_name+"?")) {
        fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/' + this.friend.id, {
          method: 'DELETE',
          headers: {
            "accept": "application/json",
            "Authorization": 'Bearer ' + localStorage.getItem("token"),
            "Content-Type": 'application/json'
          }
        })
          .then(response => {
            if (response.ok) {
              router.push({ name: "MyUser" })
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
}
</script>

<template>
  <section class="friend-info-container">
    <img class="friend-profile-img" :src="friend.image">

    <div class="friend-data">
      <span class="friend-username">{{friend.name +" "+friend.last_name}}</span>
      <span class="friend-email">{{friend.email}}</span>

      <!--Componente botones del amigo-->
      <div class="friend-buttons-div">
        <router-link class="message-button" to="/Messages">Message</router-link>
        <button class="unfollow-button" @click="unfollowFriend()">Unfollow</button>
      </div>
    </div>
  </section>
</template>