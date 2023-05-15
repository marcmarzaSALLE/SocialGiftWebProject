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
      <!--Notificacion 1-->
      <div className="notification-banner" v-if="friends.length!==0">
        <!--Aqui van la información de la notificacion-->
      </div>
      <div class="message-section-div" v-if="friends.length === 0">
        <p>Hey! You don't have any friend requests</p>
      </div>
    </nav>
  </div>
</template>

<style scoped>

</style>