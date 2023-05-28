<script>
import router from "@/router";
import MessagesContacts from "../components/MessagesContactsComponent.vue";
import MessagesChat from "../components/MessagesChatComponent.vue";

export default {
  name: "MessagesView",
  components: {
    MessagesContacts,
    MessagesChat,
  },
  created() {
    if (!localStorage.getItem("token")) {
      router.push("/Login");
    }
  }
}
</script>

<template>

  <section class="message-section">

    <sections class="contacts-sections">
      <!--Componente de contactos-->
      <MessagesContacts/>
    </sections>


    <section class="chat-section">
      <!--Componente mensajes-->
      <MessagesChat/>
    </section>
  </section>
</template>

<style scoped>

</style>