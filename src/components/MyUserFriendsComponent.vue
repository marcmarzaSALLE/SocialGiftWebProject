<script>
import router from "@/router";

export default {
  name: "FriendsList",
  data() {
    return {
      friends: [],
      message: null,
    }
  },
  created() {
    if (localStorage.getItem("token")) {
      this.getFriends()
    } else {
      router.push({ name: "Login" });
    }
  },

  methods: {
    getFriends() {
      let id = localStorage.getItem("idUser")
      console.log(id)
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/' + id + '/friends', {
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
      .then(data => data.json()) // Convertir la respuesta a JSON
      .then(json => {
        console.log("data: " + json)
        this.friends = json // Asignar la lista de amigos a la variable friends
      })
      .catch(error => {
        console.log("error: " + error)
      })
    },
    unfollowFriend(friendId) {
      console.log("unfollowFriend: " + friendId)
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/'+ friendId, {
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
  <section class="section-template-inside">
    <div class="message-section-div" v-if="friends.length === 0">
      <p>Hey! You haven't added any friends yet</p>
    </div>

    <div v-for="friend in friends" :key="friend.id" class="friend-div">
      <router-link :to="{ name: 'friend', params: { id: friend.id } }" class="friend-route-link">
        <img class="friend-img" :src="friend.image">
        <div class="friend-text">
          <p class="friend-username">{{ friend.email }}</p>
          <p class="friend-name">{{ friend.name }} {{ friend.last_name }}</p>
        </div>
      </router-link>
      <button class="friend-button" @click="unfollowFriend(friend.id)">Unfollow</button>
    </div>
  </section>
</template>