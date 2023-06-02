<script>
import router from "@/router";

export default {
  name: "UserLists",
  data() {
    return {
      wishlists: [],
      showListEdit: true,
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
      .then(data => data.json())
      .then(json => {
        console.log("data: " + json)
        this.wishlists = json
      })
      .catch(error => {
        console.log("error: " + error)
      })
    },

    truncateText(text, maxLength) { // Acorta el texto
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
  <section class="section-template-inside">
    <div class="message-section-div" v-if="wishlists.length === 0">
      <p>Hey! You haven't created any list yet</p>
    </div>

    <div v-for="wishlist in wishlists" :key="wishlist.id" class="list-div">
      <p class="name-list-p">{{truncateText(wishlist.name, 40)}}</p>
      <div class="description-list-div"><p>{{wishlist.description}}</p></div>
      <div class="dates-list">
        <p>Creation: {{ wishlist.creation_date.substring(0, 10).replace(/-/g, '/') }}</p>
        <p>Ends: {{ wishlist.end_date.substring(0, 10).replace(/-/g, '/') }}</p>
      </div>
    </div>
  </section>
</template>