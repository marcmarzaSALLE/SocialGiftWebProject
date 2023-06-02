<script>
export default {
  name: "MessagesChat",
  data() {
    return {
      userId: localStorage.getItem("idUser"),
      messageInput: "",
      messages: [],
    };
  },
  props: {
    friendSelected: {
      type: Object,
      required: true,
    },
  },
  created() {
    if (!localStorage.getItem("token")) {
      router.push("/Login");
    }
    setInterval(this.getMessages, 1000); // Actualizar mensajes cada X tiempo
  },
  methods: {
    sendMessage() {
      fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/messages", {
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id_recived: this.friendSelected.id,
          user_id_send: this.userId,
          content: this.messageInput,
        }),
      })
        .then(response => {
          if (response.ok) {
            this.messageInput = "";
          } else {
            console.error("Error in response", response);
          }
      })
        .catch((error) => {
          console.error("Error sending message", error);
        });
    },

    getMessages() {
      if (!this.friendSelected) {
        return;
      }

      fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/messages/" + this.friendSelected.id, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Mensajes:", data);
          this.messages = data;
        })
        .catch((error) => {
          console.error("Error to get messages", error);
        });
    },

    formatTime(timeStamp) {
      const date = new Date(timeStamp);
      const hour = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const formattedTime = `${hour}:${minutes}`;

      return formattedTime;
    },
  },
};
</script>

<template>
    <div class="chat-contact-div" v-if="friendSelected">
      <h2 class="contact-name-h">{{ friendSelected.name + " " + friendSelected.last_name}}</h2>
    </div>

    <section class="chating-section" v-if="friendSelected">
      <div  v-for="message in messages.slice().reverse()" :key="message.id">
        <div class="user-messages-div" v-if="message.user_id_send === parseInt(userId)">
          <p class="time-stamp">{{ formatTime(message.timeStamp) }}</p>
          <p class="message-content-user">{{ message.content }}</p>
        </div>

        <div class="friend-messages-div" v-else-if="message.user_id_send === friendSelected.id">
          <p class="message-content-friend">{{ message.content }}</p>
          <p class="time-stamp">{{ formatTime(message.timeStamp) }}</p>
        </div>
      </div>
    </section>

    <form class="send-message-form" @submit.prevent="sendMessage" v-if="friendSelected">
      <button class="send-message-button" type="submit">
        <img class="send-message-icon" src="../../../public/Icons/sendIcon.png">
      </button>
      <input class="send-message-input" type="text" v-model="messageInput">
     </form>

    <div v-if="!friendSelected">
      <p>No chat selected</p>
    </div>
</template>

