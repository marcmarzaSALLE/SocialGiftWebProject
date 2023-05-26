<script>
import router from "@/router";

export default {
  name: "FriendLists",
  props: {
    friend: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      wishlists: [],
    };
  },
  created() {
    this.getFriendLists();
  },

  methods: {
    getFriendLists() {
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/' + this.friend.id + '/wishlists', {
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
        .then(data => data.json()) // Convertir la respuesta a JSON
        .then(json => {
          console.log("data: " + json)
          this.wishlists = json // Asignar la lista de deseos a la variable wishlists
        })
        .catch(error => {
          console.log("error: " + error)
        })
    }
  }
}
</script>

<template>
  <section class="list-section-inside">

    <div class="message-section-div" v-if="wishlists.length === 0">
      <p>Hey! Your friend doesn't have lists yet</p>
    </div>

    <!--Lista -->
    <div v-for="wishlist in wishlists" :key="wishlist.id" class="list-friend-div">
      <p>{{wishlist.name}}</p>
      <div class="description-list-friend-div"><p>{{wishlist.description}}</p></div>
      <div class="dates-friend-list">
        <p>Creation: {{ wishlist.creation_date.substring(0, 10).replace(/-/g, '/') }}</p>
        <p>Ends: {{ wishlist.end_date.substring(0, 10).replace(/-/g, '/') }}</p>
      </div>
    </div>
  </section>
</template>