<script>

export default {
  name: "MessagesContacts",
}

</script>

<template>
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
      <!--Contacto -->
      <div class="contact-div">
        <img class="contact-img" src="public/Icons/imageUserPic.png">
        <h2>username</h2>
      </div>
    </section>
  </section>
</template>