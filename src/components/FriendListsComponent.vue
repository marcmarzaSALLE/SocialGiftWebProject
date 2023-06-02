<script>
import router from "@/router";

export default {
  name: "FriendLists",
  props: {
    friendId: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      wishlists: [],
      selectedListId: null
    };
  },
  created() {
    this.getFriendLists();
  },
  methods: {
    getFriendLists() {
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/' + this.friendId + '/wishlists', {
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
    },
    seeList(wishlist) {
      this.$emit('see-list', wishlist)
      this.$emit('show-list', true);
      this.selectedListId = wishlist.id
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
    <div v-for="wishlist in wishlists" :key="wishlist.id" @click="seeList(wishlist)" :class="['list-friend-div', { 'selected-list': wishlist.id === this.selectedListId }]">
      <p>{{wishlist.name}}</p>
      <div class="description-list-friend-div"><p>{{wishlist.description}}</p></div>
      <div class="dates-friend-list">
        <p>Creation: {{ wishlist.creation_date.substring(0, 10).replace(/-/g, '/') }}</p>
        <p>Ends: {{ wishlist.end_date.substring(0, 10).replace(/-/g, '/') }}</p>
      </div>
    </div>
  </section>
</template>