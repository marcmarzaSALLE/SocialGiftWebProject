<script>

export default {
  name: "MessagesChat",
}

</script>

<template>
  <div class="chat-contact-div">
    <img class="chat-contact-img" src="public/Icons/imageUserPic.png">
    <h2>username</h2>
  </div>

  <!--Aquí se pondrán los mensajes-->
  <section class="chating-section">
  </section>

  <!--Componente enviar mensaje-->
  <div class="send-message-div">
    <form class="send-message-form" method="get">
      <button class="send-message-button" type="submit">
        <img class="send-message-icon" src="public/Icons/sendIcon.png">
      </button>
      <input class="send-message-input" type="text"/>
    </form>
  </div>
</template>