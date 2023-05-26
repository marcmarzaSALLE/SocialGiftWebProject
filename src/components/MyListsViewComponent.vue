<script>
import router from "@/router";

export default {
  name: "ListsView",
  props: {
    wishlists: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedListId: null
    };
  },
  created() {
    if (!localStorage.getItem("token")) {
      router.push("/Login");
    }
  },
  methods: {
    editList(wishlist) {
      this.$emit('edit-list', wishlist);
      this.$emit('show-list', true);

      // Setear el atributo 'selected' en 'true' para la lista seleccionada
      this.selectedListId = wishlist.id;
    },

  }
}
</script>

<template>

  <div class="message-section-div" v-if="wishlists.length === 0">
    <p>Hey! You haven't created any list yet</p>
  </div>

  <section class="user-list-section-inside">
    <div v-for="wishlist in wishlists" :key="wishlist.id" :class="['list-user-div', { 'selected-list': wishlist.id === this.selectedListId }]">
      <p>{{ wishlist.name }}</p>
      <div class="description-list-user-div"><p>{{ wishlist.description }}</p></div>
      <div class="dates-user-list">
        <p>Creation: {{ wishlist.creation_date.substring(0, 10).replace(/-/g, '/') }}</p>
        <p>Ends: {{ wishlist.end_date.substring(0, 10).replace(/-/g, '/') }}</p>
      </div>

      <button class="editList-button-user" @click="editList(wishlist)">Edit list</button>
    </div>
  </section>

</template>

