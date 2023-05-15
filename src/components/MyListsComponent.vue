<script>
import router from "@/router";

export default {
  name: "ListsView",
  data() {
    return {
      wishlists: [],
    }
  },
  created() {
    if (localStorage.getItem("token")) {
      this.getWishlists()
    } else {
      router.push({ name: "Login" });
    }
  },
  methods: {
    getWishlists() {
      let id = localStorage.getItem("idUser")
      console.log(id)
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/' + id + '/wishlists', {
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

    saveListId(id) {
      console.log("11111111idList: " + id)
      localStorage.setItem("idList", id)
      console.log("22222222idList: " + localStorage.getItem("idList"))
    }
  }
}
</script>

<template class="listsView">

  <div class="message-section-div" v-if="wishlists.length === 0">
    <p>Hey! You haven't created any list yet</p>
  </div>

  <section class="user-list-section-inside">
    <div v-for="wishlist in wishlists" :key="wishlist.id" class="list-user-div">
      <p>{{wishlist.name}}</p>
      <div class="description-list-user-div"><p>{{wishlist.description}}</p></div>
      <div class="dates-user-list">
        <p>Creation: {{ wishlist.creation_date.substring(0, 10).replace(/-/g, '/') }}</p>
        <p>Ends: {{ wishlist.end_date.substring(0, 10).replace(/-/g, '/') }}</p>
      </div>

      <button class="editList-button-user" onclick=saveListId(wishlist.id)>Edit list</button>
    </div>
  </section>

</template>

