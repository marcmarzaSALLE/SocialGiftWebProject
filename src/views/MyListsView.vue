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
  created() {
    if (!localStorage.getItem("token")) {
      router.push("/Login");
    }
  }
}
</script>

<template class="myLists">

  <section class="user-lists-section">

    <!--Componente de listas-->
    <section class="my-lists-section">
      <h2>My lists</h2>
      <div class="line3"></div>

      <section class="user-list-section">
        <ListsView/>
      </section>
      <div class="line3"></div>
      <button class="create-list-button">+ create list</button>
    </section>

    <!--Lista a editar-->
    <section class="list-view">
      <ListEdit/>
    </section>
  </section>

</template>

<style scoped>

</style>