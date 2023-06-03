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
      },
      wishlists: {
          type: Array,
          required: true
      },
  },
  created() {
      if (localStorage.getItem("token")) {

      } else {
        router.push({ name: "Login" });
      }
  },
  data() {
      return {
        wishlistToMove: "",
      };
  },
  methods: {
    deleteGift(giftDeleted) {
      console.log("giftDeletedId: " + giftDeleted.id);
      fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/" + giftDeleted.id, {
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
            const index = this.gifts.findIndex(gift => gift.id === giftDeleted.id);
            if (index !== -1) {
              this.gifts.splice(index, 1);
            }
            this.$emit("gift-change");
            alert("Gift deleted successfully");
          } else {
            throw new Error("Failed to delete gift");
          }
        })
        .catch(error => {
          alert("An error occurred while deleting the gift");
          console.error(error);
        });
    },

    selectedWishlist(wishlist) {
      this.wishlistToMove = wishlist;
    },

    moveGift(selectedWishlist, giftToMove) {
      // Cambiar el ID de la lista del regalo
      giftToMove.wishlist_id = selectedWishlist.id;

      fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/" + giftToMove.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(giftToMove)
      })
        .then(response => {
          if (response.ok) {
            // Eliminación exitosa, eliminar el regalo de la lista actual
            const index = this.gifts.findIndex(gift => gift.id === giftToMove.id);
            if (index !== -1) {
              this.gifts.splice(index, 1);
            }
            alert("Gift moved successfully");
            this.$emit("gift-change");
          } else {
            throw new Error("Failed to move gift");
          }
        })
        .catch(error => {
          alert("An error occurred while moving the gift");
          console.error(error);
        });
    },

    truncateText(text, maxLength) { // Acorta el texto
      if (text.length <= maxLength) {
        return text;
      } else {
        return text.substring(0, maxLength) + '...';
      }
    },
  },
  computed: {
    filteredWishlists() {
      return this.wishlists.filter(
        (wishlist) => wishlist.id !== this.wishlistToEdit.id
      );
    },
  }
}
</script>

<template>
  <section class="gifts-list-section-inside">
    <div class="message-gifts" v-if="gifts.length === 0">
      <p>There are no gifts in this list.</p>
    </div>

    <!--Gift-->
    <div class="gift-post-div" v-for="gift in gifts" :key="gift.id" v-else>
      <!--Sección de datos-->
      <img class="gift-img" :src="gift.image ? gift.image : 'public/Icons/imageProduct.png'">

        <div class="gift-data-div">
          <span class="gift-info-text">Gift ID: {{gift.id}}</span>
          <span class="gift-info-text">Product url: <a :href="gift.product_url" target="_blank">click here</a></span>
          <span class="gift-info-text" v-if="gift.name">Name: {{gift.name}}</span>
          <span class="gift-info-text" v-if="gift.description">Description: {{truncateText(gift.description, 60)}}</span>
          <span class="gift-info-text" v-if="gift.price">Price: {{gift.price}}</span>

          <span class="gift-info-text" v-if="gift.booked === 1">This gift is booked</span>
          <span class="gift-info-text" v-if="gift.booked === 0">This gift is not booked</span>
        </div>
      <!--Sección de botones-->
      <div class="gift-buttons-div">

        <!--Boton mover regalo-->
        <div class="move-gift-button">
          <a class="move-gift-icon-anchor" href="#move-gift-screen"><img class="move-gift-icon" src="../../../../public/Icons/moveGiftIcon.png"></a>
        </div>

        <!--Sección overlay mover regalo-->
        <div id="move-gift-screen" class="move-gift-background-div">
          <div class="move-gift-main-div">
            <a class="close-button" href="#">&times;</a>
            <h3>Move to:</h3>
            <div class="move-gift-bar">

              <!--Dropdown list to move-->
              <div class="dropdown-list-div">
                <button class="list-button">Lists</button>
                <div class="dropdown-list">
                    <a class="dropdown-lists-names" v-for="wishlist in filteredWishlists" :key="wishlist.id" @click="selectedWishlist(wishlist)">{{truncateText( wishlist.name, 35)}}</a>
                </div>
              </div>

              <!--Select list-->
              <input v-model="wishlistToMove.name" type="text" class="list-moved-input" placeholder="Select list...">
              <!--Botón de mover-->
              <button class="move-button" @click="moveGift(wishlistToMove, gift)">Move</button>
            </div>
          </div>
        </div>

        <!--Boton eliminar regalo-->
        <button class="remove-button" @click="deleteGift(gift)">
          <img class="remove-gift-icon" src="../../../../public/Icons/removeGiftIcon.png">
        </button>
      </div>
    </div>
  </section>
</template>