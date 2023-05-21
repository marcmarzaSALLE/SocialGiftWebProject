<script>
import router from "@/router";

export default {
  name: "NotificationsComponent",
  data() {
    return {
      friends: [],
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
    }
  }
}
</script>
<template>
  <div className="notifications">
    <input type="checkbox" id="notifications" className="notifications-input">
    <label htmlFor="notifications" className="notifications-label"><img className="notifications-icon"
                                                                        src="public/Icons/notificationIcon.png"></label>

    <nav className="notifications-items-list">
      <h2 className="notifications-title">Notifications</h2>

      <div class="notification-message-section-div" v-if="friends.length === 0">
        <p>Hey! No friend requests yet</p>
      </div>
      <!--Notificacion -->
      <div className="notification-banner" v-if="friends.length!==0" v-for="friends in friends" :key="friends.id">
        <p>{{ friends.name + " " + friends.last_name }}</p>
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