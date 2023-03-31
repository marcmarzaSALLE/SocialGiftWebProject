<template >

  <section class="message-section">

    <sections class="contacts-sections">

      <!--Buscador de contactos-->
      <div class="search-contact-div">
        <form class="search-contact" method="get">
          <input class="search-contact-input" type="search" placeholder="Search contact..." />
        </form>
        <button class="search-contact-button" type="submit">
          <img class="search-contact-icon" src="public/Icons/searchIcon.png">
        </button>
      </div>

      <!--Contactos-->
      <section class="contacts-view-section">
        <!--Contacto 1-->
        <div class="contact-div">
          <img class="contact-img" src="public/Icons/imageFriend.png">
          <div class="contact-text">
            <h2>username</h2>
          </div>
        </div>

        <!--Contacto 2-->
        <div class="contact-div">
          <img class="contact-img" src="public/Icons/imageFriend.png">
          <div class="contact-text">
            <h2>username</h2>
          </div>
        </div>

        <!--Contacto 3-->
        <div class="contact-div">
          <img class="contact-img" src="public/Icons/imageFriend.png">
          <div class="contact-text">
            <h2>username</h2>
          </div>
        </div>

        <!--Contacto 4-->
        <div class="contact-div">
          <img class="contact-img" src="public/Icons/imageFriend.png">
          <div class="contact-text">
            <h2>username</h2>
          </div>
        </div>

        <!--Contacto 5-->
        <div class="contact-div">
          <img class="contact-img" src="public/Icons/imageFriend.png">
          <div class="contact-text">
            <h2>username</h2>
          </div>
        </div>

        <!--Contacto 6-->
        <div class="contact-div">
          <img class="contact-img" src="public/Icons/imageFriend.png">
          <div class="contact-text">
            <h2>username</h2>
          </div>
        </div>

        <!--Contacto 7-->
        <div class="contact-div">
          <img class="contact-img" src="public/Icons/imageFriend.png">
          <div class="contact-text">
            <h2>username</h2>
          </div>
        </div>

        <!--Contacto 8-->
        <div class="contact-div">
          <img class="contact-img" src="public/Icons/imageFriend.png">
          <div class="contact-text">
            <h2>username</h2>
          </div>
        </div>
      </section>

    </sections>

    <!--Mensajes-->
    <section class="chat-section">

      <div class="chat-contact-div">

        <!--Imagen de contacto-->
        <img class="chat-contact-img" src="public/Icons/imageFriend.png">
        <div class="chat-contact-text">
          <h2>username</h2>
        </div>
      </div>

      <!--Aquí se pondrán los mensajes-->
      <section class="chating-section">

      </section>

      <!--Enviar mensaje-->
      <div class="send-message-div">

        <button class="send-message-button" type="submit">
          <img class="send-message-icon" src="public/Icons/sendIcon.png">
        </button>

        <form class="send-message-form" method="get">
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