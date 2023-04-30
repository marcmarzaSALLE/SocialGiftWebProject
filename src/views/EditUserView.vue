<template>

  <!--Section User-->
  <section class="section-user2">
    <div class="user-profile-pic">
      <img class="user-img2" src="public/Icons/imageUserPic.png">
      <a class="change-pic-button" href="#change-pic-screen">Profile picture</a>
    </div>

    <!--Sección overlay poner imagen perfil-->
    <div id="change-pic-screen" class="change-pic-div">
      <div class="change-pic-main-div">
        <a class="close-button" href="#">&times;</a>
        <h3>Choose a new profile pic (PNG, JPG):</h3>
        <div class="new-pic-bar">
          <!--Select pic-->
          <input type="file" class="new-pic-input" name="user-pic" placeholder="Update a new pic..." accept="image/png, image/jpg">
          <!--Botón de update-->
          <button class="update-button">Update</button>
        </div>
      </div>
    </div>

    <div class="user-text2">
      <h2 class="user-username">Username</h2>
      <h3 class="user-complete-name">Firstname Secondname</h3>
      <p class="user-email">username@email.com</p>

      <div class="change-password-div">
        <RouterLink to="/EditPassword" class="change-password-button"><h3>Change password</h3></RouterLink>
      </div>
    </div>
  </section>

  <!--Section Edit User-->
  <section class="edit-user-section">

    <h2>Edit fields</h2>
    <div class="line3"></div>

    <div class="name-div">
      <span class="name-span">Name:</span>
      <input type="text" class="input-name" name="name" placeholder="Name">
    </div>

    <div class="secondname-div">
      <span class="secondname-span">Second name:</span>
      <input type="text" class="input-secondname" name="name" placeholder="Secondname">
    </div>

    <div class="username-div">
      <span class="username-span">Username:</span>
      <input type="text" class="input-username" name="username" placeholder="Username">
    </div>

    <div class="email-div">
      <span class="email-span">Email:</span>
      <input type="text" class="input-email" name="email" placeholder="Email">
    </div>

    <div class="buttons-edit-div">
      <button class="button-save">Save</button>
      <button class="button-delete">Delete account</button>
    </div>

  </section>

</template>

<script>
export default {
  name: "EditUserView"
}
</script>

<style scoped>

</style>