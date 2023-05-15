<script>
import router from "@/router";

export default {
  name: "ListEdit",

  created() {
    console.log("EDIT LIST: " + this.$route.params.id)
  },

  methods: {
    getWishlistInfo() {
      let idList = this.$route.params.id

    }

  }

}
</script>

<template>

  <!-- Información lista -->
  <div class="list-view-info">
    <input type="text" v-model="listName" name="name-list" class="name-list-input">
    <input type="text" v-model="listDescription" name="description-list" class="description-list-input">
  </div>

</template>