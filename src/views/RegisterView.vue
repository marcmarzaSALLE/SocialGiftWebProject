<template>

  <section class="background-signin" >

    <div class="title-create-account">
      <h1>Join Social Gift</h1>
    </div>

    <div class="line-div5"></div>

    <section class="signin-section">

      <div class="data-login-div">
        <input type="text" class="name-account" name="name" placeholder="Name">
        <input type="text" class="secondname-account" name="secondname" placeholder="Second name">
        <input type="text" class="username-account" name="username" placeholder="Username">
        <input type="email" class="email-account" name="email" placeholder="Email">
        <input type="password" class="password-account" name="password" placeholder="Password">
        <input type="password" class="password2-account" name="password2" placeholder="Repeat password">
      </div>

      <RouterLink to="/MyUser" class="routerLink-register">
        <button class="register-button">Create account</button>
      </RouterLink>

    </section>
  </section>

</template>

<script>
export default {
  name: "RegisterView"
}
</script>

<style scoped>

</style>