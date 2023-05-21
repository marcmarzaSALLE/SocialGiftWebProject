<script>
import router from "@/router";
import AddGift from "./MyListOtherComponents/AddGiftComponent.vue";
import ListGifts from "./MyListOtherComponents/ListGiftsComponent.vue";


export default {
  name: "ListEdit",
  components: {
    AddGift,
    ListGifts,
  },
  props: {
    wishlist: {
      type: Object,
      required: true
    }
  },
  created() {
    if (localStorage.getItem("token")) {
      this.getWishlistInfo();

    } else {
      router.push({ name: "Login" });
    }
  },
  methods: {
    getWishlistInfo() {
        const idList = this.wishlist.id; // Obtener el ID de la lista desde el prop
        fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/' + idList, {
          headers: {
            "accept": "application/json",
            "Authorization": 'Bearer ' + localStorage.getItem("token"),
            "Content-Type": 'application/json'
          }
        })
          .then(data => data.json()) // Convertir la respuesta a JSON
          .then(json => {
            console.log("data: " + json);
            this.wishlist = json; // Asignar la lista de deseos a la variable wishlists
          })
          .catch(error => {
            console.log("error: " + error);
          });
    },
  }
}
</script>

<template>

  <!-- Información lista -->
  <div class="list-view-info" v-if="wishlist">
    <input v-model="wishlist.name" type="text" placeholder="Enter name" name="name-list" class="name-list-input">
    <input v-model="wishlist.description" type="text" placeholder="Enter description" name="description-list" class="description-list-input">
  </div>

  <!--Componente sección de productos-->
  <section class="gifts-section" v-if="wishlist">

    <div class="gifts-div">
      <h3>Gifts</h3>
      <!-- Componente añadir regalo -->
      <AddGift/>
    </div>

    <!--Regalos-->
    <section class="gifts-view-section">
        <ListGifts :gifts="wishlist.gifts" :wishlistToEdit="wishlist" />
    </section>

  </section>

  <!--Sección de botones-->
  <div class="list-buttons-div" v-if="wishlist">

    <div class="save-delete-div">
      <button class="save-list-button">Save list</button>
      <button class="delete-list-button">Delete list</button>
    </div>

    <div class="date-end-div">
      <span class="text-calendar">End date:</span>
      <input type="date" placeholder="End date" name="end-date-list" class="end-date-list-input">
    </div>
  </div>

  <div v-else>
    <p>Select a list to edit</p>
  </div>
</template>