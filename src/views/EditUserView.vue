<template>
  <section class="sectionUser">
    <div>
      <img class="userImg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png">
    </div>

    <div class="userText">
      <h2>Username</h2>
      <h3>Firstname Secondname</h3>
      <RouterLink to="">Cambiar contraseña</RouterLink>
    </div>
  </section>
  <section class="editUser">
    <form class="formEditUser">
      <div class="name">
        <label for="name">Nombre:<input type="text" class="inputName" name="name"></label>
      </div>
      <div class="username">
        <label for="username">Nombre usuario: <input type="text" class="inputUsername" name="username"></label>
      </div>
      <div class="email">
        <label for="email">Email:<input type="text" class="inputEmail" name="email"></label>
      </div>
      <button class="buttonSave">Guardar cambios</button>
      <button class="buttonDelete">Eliminar cuenta</button>
    </form>

  </section>
</template>

<script>
export default {
  name: "EditUserView"
}
</script>

<style scoped>

</style>