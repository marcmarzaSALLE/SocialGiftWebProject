<template class="login">
  <div class="title-login">
    <h1>Iniciar Sesión</h1>
  </div>
  <section class="section-login">
    <form class="form-login">
      <div class="email-login">
        <label for="email">Email:<input type="text" class="inputEmail-login" name="email"
                                        placeholder="Correo electrónico"></label>
      </div>
      <div class="password-login">
        <label for="password">Contraseña:<input type="password" class="inputPassword-login" name="password"
                                                placeholder="Contraseña"></label>
      </div>
      <div class="button-login">
        <RouterLink to="/" class="routerLink-login">
          <button class="btn-login">Iniciar Sesión</button>
        </RouterLink>
      </div>
      <p class="text-info">Al identificarte aceptas nuestras <u>Condiciones de uso y venta</u>.<br>Consulta nuestro <u>Aviso de privacidad</u> y nuestras <u>Aviso de Cookies y Aviso sobre publicidad basada en los intereses del usuario.</u></p>

    </form>
  </section>

  <section class="section-register-login">
    <form class="form-register">
      <div class="register">
        <hr>
        <span class="pregunta">¿No tienes cuenta?</span>
        <hr>
      </div>
      <RouterLink to="/Register" class="routerLink-register">
        <button class="btn-register">Regístrate</button>
      </RouterLink>
    </form>

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