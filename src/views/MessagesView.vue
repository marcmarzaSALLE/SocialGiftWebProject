<template >

  <section class="message-section">

    <sections class="contacts-sections">

      <!--Componente buscador de contactos-->
      <div class="search-contact-div">
        <form class="search-contact" method="get">
          <input class="search-contact-input" type="search"/>
          <button class="search-contact-button" type="submit">
            <img class="search-contact-icon" src="public/Icons/searchIconGreen.png">
          </button>
        </form>
      </div>

      <!--Componente contactos-->
      <section class="contacts-view-section">

        <section class="contacts-view-section-inside">
          <!--Contacto 1-->
          <div class="contact-div">
            <img class="contact-img" src="public/Icons/imageUserPic.png">
            <h2>username</h2>
          </div>

          <!--Contacto 2-->
          <div class="contact-div">
            <img class="contact-img" src="public/Icons/imageUserPic.png">
            <h2>username</h2>
          </div>

          <!--Contacto 3-->
          <div class="contact-div">
            <img class="contact-img" src="public/Icons/imageUserPic.png">
            <h2>username</h2>
          </div>

          <!--Contacto 4-->
          <div class="contact-div">
            <img class="contact-img" src="public/Icons/imageUserPic.png">
            <h2>username</h2>
          </div>

          <!--Contacto 5-->
          <div class="contact-div">
            <img class="contact-img" src="public/Icons/imageUserPic.png">
            <h2>username</h2>
          </div>

          <!--Contacto 6-->
          <div class="contact-div">
            <img class="contact-img" src="public/Icons/imageUserPic.png">
            <h2>username</h2>
          </div>

          <!--Contacto 7-->
          <div class="contact-div">
            <img class="contact-img" src="public/Icons/imageUserPic.png">
            <h2>username</h2>
          </div>


        </section>
      </section>
    </sections>

    <!--Componente mensajes-->
    <section class="chat-section">

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

    </section>
  </section>


</template>
<script>
export default {
  name: "MessagesView",
}
</script>
<style scoped>

</style>