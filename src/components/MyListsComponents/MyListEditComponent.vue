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
    },
    wishlists: {
      type: Array,
      required: true
    },
    showList: {
      type: Boolean,
      required: true
    }
  },
  created() {
    if (localStorage.getItem("token")) {
      this.getWishlistInfo()
    } else {
      router.push({ name: "Login" });
    }
  },
  methods: {
    getWishlistInfo() {
      const idList = this.wishlist.id;
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/' + idList, {
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
        .then(data => data.json()) // Convertir la respuesta a JSON
        .then(json => {
          this.wishlist.name = json.name;
          this.wishlist.description = json.description;
          this.wishlist.end_date = json.end_date;
          this.wishlist.gifts = json.gifts;

          this.$emit("gift-change");
        })
        .catch(error => {
          console.log("error: " + error);
        });
    },

    giftChange() {
      this.$emit("gift-change");
    },

    deleteWishlist() {
      this.$emit("list-deleted");
      this.$emit('show-list', false);
    },

    saveWishlist() {
      const idList = this.wishlist.id;
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/' + idList, {
        method: "PUT",
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(this.wishlist)
      })
        .then(response => {
          if (response.ok) {
            alert("Wishlist saved successfully");
          } else {
            throw new Error("Failed to save wishlist");
          }
        })
        .catch(error => {
          alert("An error occurred while saving the wishlist");
          console.error(error);
        });
    },
  },
}
</script>

<template>
  <!-- Información lista -->
  <div class="list-view-info" v-if="showList">
    <p>Wishlist name:</p>
    <input v-model="wishlist.name" type="text" placeholder="Enter name" name="name-list" class="name-list-input">
    <p>Wishlist description:</p>
    <input v-model="wishlist.description" type="text" placeholder="Enter description" name="description-list" class="description-list-input">
  </div>

  <!--Componente sección de productos-->
  <section class="gifts-section" v-if="showList">
    <div class="gifts-div">
      <h3>Gifts</h3>
      <!-- Componente añadir regalo -->
      <AddGift :wishlist="wishlist" @gift-added="getWishlistInfo"/>
    </div>

    <!--Regalos-->
    <section class="gifts-list-view-section">
      <ListGifts :gifts="wishlist.gifts" :wishlistToEdit="wishlist" :wishlists="wishlists" @gift-change="giftChange"/>
    </section>
  </section>

  <!--Sección de botones-->
  <div class="list-buttons-div" v-if="showList">

    <div class="save-delete-div">
      <button class="save-list-button" @click="saveWishlist">Save list</button>
      <button class="delete-list-button" @click="deleteWishlist">Delete list</button>
    </div>

    <div class="date-end-div">
      <span class="text-calendar">End date</span>
      <input v-model="wishlist.end_date" type="date" placeholder="End date" name="end-date-list" class="end-date-list-input">
    </div>
  </div>

  <div v-if="!showList">
    <p>Select a list to edit</p>
  </div>
</template>