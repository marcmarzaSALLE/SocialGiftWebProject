<script>
import router from "@/router";

export default {
  name: "ListGifts",
  props: {
      gifts: {
          type: Array,
          required: true
      },
      wishlistToEdit: {
          type: Object,
          required: true
      }
  },
  created() {
      if (localStorage.getItem("token")) {
          this.getWishlistsFromLocalStorage();
      } else {
          router.push({ name: "Login" });
      }
  },
  data() {
      return {
        wishlists:[],
        selectedWishlist: ""
      };
  },
  methods: {
      getWishlistsFromLocalStorage() {
          this.wishlists = JSON.parse(localStorage.getItem("wishlistsSaved"));
      },

      selectWishlist(wishlist) {
          this.selectedWishlist = wishlist;
      },

      moveGift(wishlistToMoveId, giftToMoveId) {
          //Cambiamos el ID del regalo de lista
          fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/" + giftToMoveId, {
              method: "PUT",
              headers: {
                  "accept": "application/json",
                  "Authorization": 'Bearer ' + localStorage.getItem("token"),
                  "Content-Type": 'application/json'
              }
          })
          .then(response => {
              if (response.ok) {
                  // Cambio de lista exitoso, eliminar el regalo de la lista actual
                  this.gifts = this.gifts.filter(gift => gift.id !== giftToMoveId);
                  // Mostrar un mensaje de éxito en la interfaz de usuario
                  alert("Gift moved successfully")
              } else {
                  // Error al cambiar de lista el regalo, mostrar un mensaje de error en la interfaz de usuario
                  throw new Error("Failed to move gift");
              }
          })

      },
      deleteGift(giftDeletedId) {
          console.log("giftDeletedId: " + giftDeletedId)
          fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/"+ giftDeletedId, {
              method: "DELETE",
              headers: {
                  "accept": "application/json",
                  "Authorization": 'Bearer ' + localStorage.getItem("token"),
                  "Content-Type": 'application/json'
              }
          })
          .then(response => {
              if (response.ok) {
                  // Eliminación exitosa, eliminar el regalo de la lista actual
                  this.gifts = this.gifts.filter(gift => gift.id !== giftDeletedId);
                  // Mostrar un mensaje de éxito en la interfaz de usuario
                  alert("Gift deleted successfully");
              } else {
                  // Error al eliminar el regalo, mostrar un mensaje de error en la interfaz de usuario
                  throw new Error("Failed to delete gift");
              }
          })
          .catch(error => {
              // Mostrar un mensaje de error en la interfaz de usuario
              alert("An error occurred while deleting the gift");
              console.error(error);
          });
      }
  },
  computed: {
      filteredWishlists() {
          return this.wishlists.filter(
              (wishlist) => wishlist.id !== this.wishlistToEdit.id
          );
      }
  }

}
</script>

<template>
  <!--Gift-->
  <div class="gift-post-div" v-for="gift in gifts" :key="gift.id">

    <!--Sección de datos-->
    <div class="gift-info-div">
      <div class="gift-img-div">
        <img class="gift-img" src="public/Icons/imageProduct.png">
      </div>

      <div class="gift-data-div">
        <div class="gift-information-div">
          <span>Gift ID: {{gift.id}}</span>
          <span>Product url: <a :href="gift.url" target="_blank">click here!</a></span>
          <span>Priority: {{gift.priority}}</span>
          <span>Booked: {{gift.booked}}</span>
        </div>
      </div>
    </div>

    <!--Sección de botones-->
    <div class="gift-buttons-div">

      <!--Sección overlay mover regalo-->
      <div class="move-gift-button">
        <a class="move-gift-icon-anchor" href="#move-gift-screen"><img class="move-gift-icon" src="public/Icons/moveGiftIcon.png"></a>
      </div>

      <div id="move-gift-screen" class="move-gift-div">
        <div class="move-gift-main-div">
          <a class="close-button" href="#">&times;</a>
          <h3>Move to:</h3>
          <div class="move-gift-bar">

            <!--Dropdown list to move-->
            <div class="dropdown-list-div">
              <button class="list-button">Lists</button>
              <div class="dropdown-list">
                  <a class="dropdown-lists-names" v-for="wishlist in filteredWishlists" :key="wishlist.id" @click="selectWishlist(wishlist)">{{ wishlist.name }}</a>
              </div>
            </div>

            <!--Select list-->
            <input v-model="selectedWishlist.name" type="text" class="list-moved-input" placeholder="Select list...">
            <!--Botón de mover-->
            <button class="move-button" @click="moveGift(selectWishlist)">Move</button>
          </div>
        </div>
      </div>

      <button class="remove-button" @click="deleteGift(gift.id)">
        <img class="remove-gift-icon" src="public/Icons/removeGiftIcon.png">
      </button>
    </div>
  </div>

</template>