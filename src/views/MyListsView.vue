<script>
import router from "@/router";
import ListsView from "../components/MyListsComponent.vue";
import ListEdit from "../components/MyListEditComponent.vue";

export default {
  name: "MyLists",
  components: {
    ListsView,
    ListEdit,
  },
  data() {
    return {
      selectedWishlist: null
    };
  },
  created() {
    if (!localStorage.getItem("token")) {
      router.push("/Login");
    } else {
      this.getListFromLocalStorage();
    }
  },
  methods: {
    onEditList(wishlist) {
      this.selectedWishlist = wishlist;
      // Guardar la lista seleccionada en el local storage
      localStorage.setItem("wishlist", JSON.stringify(this.selectedWishlist));

    },
    getListFromLocalStorage() {
      this.selectedWishlist= JSON.parse(localStorage.getItem("wishlist"));
    }
  }
}
</script>

<template>

  <section class="user-lists-section">

    <!--Componente de listas-->
    <section class="my-lists-section">
      <h2>My lists</h2>
      <div class="line3"></div>

      <section class="user-list-section">
        <ListsView  @edit-list="onEditList"/>
      </section>
      <div class="line3"></div>
      <button class="create-list-button">+ create list</button>
    </section>

    <!--Lista a editar-->
    <section class="list-view">
      <ListEdit :wishlist="selectedWishlist"/>
    </section>
  </section>

</template>

<style scoped>

</style>