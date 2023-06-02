<script>
import router from "@/router";
import MessagesContacts from "../components/MessagesComponents/MessagesContactsComponent.vue";
import MessagesChat from "../components/MessagesComponents/MessagesChatComponent.vue";

export default {
  name: "MessagesView",
  components: {
    MessagesContacts,
    MessagesChat,
  },
  data() {
    return {
      friends: [],
      friendSelected: null,
    }
  },
  created() {
    if (!localStorage.getItem("token")) {
      router.push("/Login");
    } else {
      this.getFriends()
    }
  },
  methods: {
    getFriends() {
      let id = localStorage.getItem("idUser")
      console.log(id)
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/' + id + '/friends', {
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
        .then(data => data.json())
        .then(json => {
          console.log("data: " + json)
          this.friends = json
        })
        .catch(error => {
          console.log("error: " + error)
        })
    },

    setFriendSelected(value) {
      this.friendSelected = value
    },
  }
}
</script>

<template>
  <section class="message-section">
    <sections class="contacts-sections">
      <!--Componente de contactos-->
      <MessagesContacts :friends="friends" @friend-selected="setFriendSelected"/>
    </sections>

    <section class="chat-section">
      <!--Componente mensajes-->
      <MessagesChat :friendSelected="friendSelected"/>
    </section>
  </section>
</template>