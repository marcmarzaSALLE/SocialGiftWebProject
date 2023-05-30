<script>
import router from "@/router";

export default {
  name: "NotificationsComponent",
  data() {
    return {
      friends: [],
      showResults: false,
    }
  },
  created() {
    if (localStorage.getItem("token")) {
      this.getNofiticationFriends()
    } else {
      router.push({name: "Login"});
    }
  },

  methods: {
    getNofiticationFriends() {
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/requests', {
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
    acceptRequest(friendId) {
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/' + friendId, {
        method: 'PUT',
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
          .then(data => data.json()) // Convertir la respuesta a JSON
          .then(json => {
            if (json.success === true) {
              this.friends = this.friends.filter(friend => friend.id !== friendId);
              console.log("data: " + "AMIGO REGISTRADO")
            }

          })
    },
    declineRequest(friendId) {
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/' + friendId, {
        method: 'DELETE',
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
      .then(data => data.json()) // Convertir la respuesta a JSON
      .then(json => {
          if (json.success === true) {this.friends = this.friends.filter(friend => friend.id !== friendId);
              console.log("data: " + "AMIGO ELIMINADO")
          }
      })
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Invertir el estado del menú al hacer clic en el checkbox
      this.showResults = !this.showResults;
    },

    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      } else {
        return text.substring(0, maxLength) + '...';
      }
    },
  }
}
</script>
<template>
  <div class="notifications">
    <input type="checkbox" id="notifications" class="notifications-input" @click="toggleMenu">
    <label for="notifications" class="notifications-label"><img class="notifications-icon" src="public/Icons/notificationIcon.png"></label>

    <nav class="notifications-items-list" :class="{ 'hide-results-notifications': !showResults, 'show-results-menu-notifications': showResults}">
      <h2 class="notifications-title">Notifications</h2>

      <div class="notification-message-section-div" v-if="friends.length === 0">
        <p>Hey! No friends requests yet</p>
      </div>
      <!--Notificacion -->
      <div class="notification-banner" v-if="friends.length!==0" v-for="friends in friends" :key="friends.id">
        <p class="friend-banner-name">{{truncateText(friend.name+" "+friend.last_name,20)}}</p>
        <div class="notification-banner-buttons">
          <button class="notification-banner-button-accept" @click="acceptRequest(friends.id)">Accept</button>
          <button class="notification-banner-button-decline" @click="declineRequest(friends.id)">Decline</button>
        </div>
      </div>

    </nav>
  </div>
</template>

<style scoped>

</style>