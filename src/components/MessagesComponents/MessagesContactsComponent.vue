<script>
export default {
  name: "MessagesContacts",
  data() {
    return {
      selectedFriend: null,
      searchText: ''
    };
  },
  props: {
    friends: {
      type: Array,
      required: true
    }
  },
  methods: {
    friendSelected(friend) {
      this.selectedFriend = friend;
      this.$emit("friend-selected", friend)
    },

    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      } else {
        return text.substring(0, maxLength) + '...';
      }
    },
  },
  computed: {
    // (computed properties) son propiedades que se calculan
    // dinámicamente en función del estado de otros datos en la instancia Vue.
    filteredFriends() {
      if (this.searchText === '') {
        return this.friends;
      } else {
        const searchTerm = this.searchText.toLowerCase();
        return this.friends.filter(friend => {
          const fullName = friend.name.toLowerCase() + ' ' + friend.last_name.toLowerCase();
          return fullName.includes(searchTerm);
        });
      }
    },
  }
}
</script>

<template>
  <!--Componente buscador de contactos-->
    <form class="search-contact-form" method="get">
      <input class="search-contact-input" type="search" v-model="searchText" />
      <button class="search-contact-button" type="submit">
        <img class="search-contact-icon" src="../../../public/Icons/searchIconGreen.png">
      </button>
    </form>

  <!--Componente contactos-->
  <section class="contacts-view-section">
      <!--Contacto -->
      <div class="contact-div" v-for="friend in filteredFriends" :key="friend.id" @click="friendSelected(friend)" :class="{ 'selected-contact': friend === selectedFriend }">
        <img class="contact-img" :src="friend.image">
        <p class="contact-name-message">{{truncateText(friend.name+" "+friend.last_name,20)}}</p>
        <img class="send-contact-icon" src="../../../public/Icons/sendContactIcon.png">
      </div>

      <div class="message-contacts" v-if="filteredFriends.length === 0">
        <p>No contacts</p>
      </div>
  </section>
</template>