<template>
  <section class="sectionUser">
    <div>
      <img class="userImg" src="public/Icons/imageUserPic.png">
    </div>

    <div class="userText">
      <h3>Username</h3>
      <h3>Firstname Secondname</h3>
      <RouterLink to="" class="changePassword"><h3>Cambiar contraseña</h3></RouterLink>
    </div>
  </section>
  <section class="editUser">
    <form class="formEditUser">
      <h3>Campos editables</h3>
      <div class="name">
        <label for="name">Contraseña actual:<input type="password" class="inputName" name="name" placeholder="Contraseña actual"></label>
      </div>
      <div class="username">
        <label for="username">Nueva contraseña: <input type="password" class="inputUsername" name="username" placeholder="Nueva contraseña"></label>
      </div>
      <div class="email">
        <label for="email">Repetir contraseña:<input type="password" class="inputEmail" name="email" placeholder="Repetir contraseña"></label>
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