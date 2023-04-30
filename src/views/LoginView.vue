<template class="login">

  <section class="background-login" >

    <div class="title-login">
      <h1>Social Gift</h1>
    </div>
    <div class="line4"></div>

    <section class="login-section">
      <input type="email" class="inputEmail-login" name="email" placeholder="Email or Username">
      <input type="password" class="inputPassword-login" name="password" placeholder="Password">

      <RouterLink to="/MyUser" class="routerLink-login-button">
        <button class="login-button">Log In</button>
      </RouterLink>
    </section>

    <h3 class="new-user-text">Are you new in Social Gift?</h3>
    <div class="line4"></div>


    <section class="section-signin">
      <RouterLink to="/Register" class="routerLink-login-button">
        <button class="signin-button">Create your account</button>
      </RouterLink>
    </section>

  </section>

</template>

<script>
export default {
  name: "LoginView",
  created() {
    this.$parent.hideHeader = true; // establece la variable hideHeader en true en el componente padre (App.vue)
  }
}
</script>

<style scoped>

</style>