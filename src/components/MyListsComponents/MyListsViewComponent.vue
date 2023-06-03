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
      this.selectedListId = wishlist.id;
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
  <section class="user-list-section-inside">
    <div class="message-section-div" v-if="wishlists.length === 0">
      <p>Hey! You haven't created any list yet</p>
    </div>

    <div v-for="wishlist in wishlists" :key="wishlist.id" :class="['list-user-div', { 'selected-user-list': wishlist.id === this.selectedListId }]">
      <p class="name-list-user-div">{{truncateText(wishlist.name, 40)}}</p>

      <div class="description-list-user-div"><p>{{ wishlist.description }}</p></div>
      <div class="dates-user-list">
        <p>Creation: {{ wishlist.creation_date.substring(0, 10).replace(/-/g, '/') }}</p>
        <p>Ends: {{ wishlist.end_date.substring(0, 10).replace(/-/g, '/') }}</p>
      </div>
      <button class="editList-button-user" @click="editList(wishlist)">Edit list</button>
    </div>
  </section>
</template>

