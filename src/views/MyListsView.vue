<script>
import router from "@/router";
import ListsView from "../components/MyListsComponents/MyListsViewComponent.vue";
import ListEdit from "../components/MyListsComponents/MyListEditComponent.vue";

export default {
  name: "MyLists",
  components: {
    ListsView,
    ListEdit,
  },
  data() {
    return {
      wishlists: [],
      selectedWishlist: {},
      createdWishlist: {
        name: "Add new list name",
        description: "Add a description",
        end_date: "",
      },
      showListEdit: false,
    }
  },
  created() {
    if (!localStorage.getItem("token")) {
      router.push("/Login");
    } else {
      this.getWishlists();
    }
  },
  methods: {
    getWishlists() {
      let id = localStorage.getItem("idUser")
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
          this.wishlists = json
          localStorage.setItem("wishlistsSaved", JSON.stringify(this.wishlists))
        })
        .catch(error => {
          console.log("error: " + error)
        })
    },

    createList() {
      fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.createdWishlist)
      })
        .then(response => {
          if (response.ok) {
            alert("Wishlist created successfully in your lists");
            this.getWishlists();
            return response.json();
          } else {
            throw new Error("Error creating the wishlist");
          }
        })
    },

    deleteSelectedWishList() {
      if (!this.selectedWishlist) {
        return; // Salir de la función si no hay una lista seleccionada
      }

      if (this.selectedWishlist.gifts.length > 0) {
       this.deleteAllGifts();
      }

      if (confirm("Are you sure you want to delete this list? Deleting this list will also delete all the associated gifts.")) {
        console.log("delete");
        fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/" + this.selectedWishlist.id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token"),
          },
        })
          .then(response => {
            console.log("DELETE RESPONSE: " + response)
            if (response.ok) {
              alert("List deleted successfully");
              this.getWishlists();
            } else {
              throw new Error("Failed to delete list");
            }
          })
          .catch(error => {
            console.log(error);
          })
      }
    },

    deleteAllGifts() {
      const giftIds = this.selectedWishlist.gifts.map(gift => gift.id);
      Promise.all(
        giftIds.map(giftId =>
          fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/" + giftId, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.getItem("token"),
            },
          })
        )
      )
        .then(responses => {
          if (responses.every(response => response.ok)) {
            console.log("All gifts deleted successfully");
            this.deleteWishlist();
          } else {
            console.log("Some gifts failed to delete");
            throw new Error("Failed to delete some gifts");
          }
      })
        .catch(error => {
          console.log(error);
        });
    },

    onEditList(wishlist) { // Selecciona una lista para editar
      this.selectedWishlist = wishlist
      this.getGiftsInfo();
    },

    getGiftsInfo() {
      this.selectedWishlist.gifts.forEach(gift => {
        fetch(gift.product_url)
          .then(response => response.json())
          .then(data => {
            gift.name = data.name;
            gift.description = data.description;
            gift.image = data.photo;
            gift.price = data.price;
          })
          .catch(error => {
            console.error(error);
          });
      });
    },

    setShowListEdit(value) {
      this.showListEdit = value;
    },
  }
}
</script>

<template>
  <section class="user-lists-section">
    <!--Componente de listas-->
    <section class="my-lists-section">
      <h2>My Wishlists</h2>
      <div class="line2"></div>
      <section class="user-list-section">
        <ListsView :wishlists="wishlists" @edit-list="onEditList" @show-list="setShowListEdit"/>
      </section>
      <div class="line2"></div>
      <button class="create-list-button" @click="createList">+ create list</button>
    </section>

    <!--Lista a editar-->
    <section class="list-view">
      <ListEdit :wishlist="selectedWishlist" :wishlists="wishlists" :showList="showListEdit" @list-deleted="deleteSelectedWishList" @show-list="setShowListEdit" @gift-change="getWishlists"/>
    </section>
  </section>
</template>
