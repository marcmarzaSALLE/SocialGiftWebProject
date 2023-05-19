<script>
import router from "@/router";

export default {
  name: "ListEdit",
  props: {
    wishlist: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editedName: "",
      editedDescription: ""
    };
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
      if (this.wishlist && this.wishlist.id) {
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
            // Realizar acciones con los datos de la lista, como actualizar variables o mostrarlos en la interfaz

          })
          .catch(error => {
            console.log("error: " + error);
          });
      }
    },
    saveChanges() {
      // Aquí puedes implementar la lógica para guardar los cambios realizados por el usuario
      const updatedName = this.editedName;
      const updatedDescription = this.editedDescription;

      // Realiza una llamada a la API para actualizar los datos de la lista con los valores actualizados
    }
  }
}
</script>

<template>

  <!-- Información lista -->
  <div class="list-view-info" v-if="wishlist">
    <input v-model="editedName"  type="text" placeholder="wishlist.name" name="name-list" class="name-list-input">
    <input  v-model="editedDescription" type="text" placeholder="wishlist.description" name="description-list" class="description-list-input">
    <p>{{wishlist.name}}</p>
  </div>
  <div v-else>
    <p>Select a list to edit</p>
  </div>

</template>