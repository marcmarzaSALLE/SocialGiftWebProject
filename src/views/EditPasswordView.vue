<template>

  <!--Section User-->
  <section class="section-user3">
    <div class="user-profile-pic">
      <img class="user-img3" src="public/Icons/imageUserPic.png">
    </div>

    <div class="user-text3">
      <h3>Username</h3>
      <h3>Firstname Secondname</h3>

      <nav class="edit-profile-nav3">
        <RouterLink class="edit-profile-button3" to="/EditUser">Edit profile</RouterLink>
      </nav>

    </div>
  </section>

  <!-- Section Edit User -->
  <section class="edit-user-password">

    <h2>Edit password</h2>
    <div class="line-div3"></div>

    <div class="password-div">
      <span class="password-span">Current password:</span>
      <input type="password" class="input-password" name="password" placeholder="Current password">
    </div>

    <div class="new-password-div">
      <span class="new-password-span">New password:</span>
      <input type="password" class="input-new-password" name="new-password" placeholder="New password">
    </div>

    <div class="confirm-password-div">
      <span class="confirm-password-span">Confirm password:</span>
      <input type="password" class="input-confirm-password" name="confirm-password" placeholder="Confirm password">
    </div>

    <div class="buttons-edit-div2">
      <button class="button-save2">Save</button>
    </div>

  </section>

</template>

<script>

</script>

<style scoped>

</style>