<template>
  <div class="title-register">
    <h1>Crear cuenta</h1>
  </div>
  <section class="section-register">
    <form class="form-register">
      <div class="name-register">
        <label for="name">Nombre:<input type="text" class="inputName-register" name="name"
                                        placeholder="Nombre"></label>
      </div>
      <div class="username-register">
        <label for="username">Nombre de usuario:<input type="text" class="inputUsername-register" name="username"
                                              placeholder="Nombre de usuario"></label>
      </div>
      <div class="email-register">
        <label for="email">Email:<input type="text" class="inputEmail-register" name="email"
                                        placeholder="Correo electrónico"></label>
      </div>
      <div class="password-register">
        <label for="password">Contraseña:<input type="password" class="inputPassword-register" name="password"
                                                placeholder="Contraseña"></label>
      </div>
      <div class="password2-register">
        <label for="password2">Confirmar contraseña:<input type="password" class="inputPassword2-register" name="password2"
                                                placeholder="Confirmar contraseña"></label>
      </div>
      <div class="button-register">
        <RouterLink to="/" class="routerLink-register">
          <button class="btn-login">Crear cuenta</button>
        </RouterLink>
      </div>
      <p class="text-info">Al identificarte aceptas nuestras <u>Condiciones de uso y venta</u>.<br>Consulta nuestro <u>Aviso de privacidad</u> y nuestras <u>Aviso de Cookies y Aviso sobre publicidad basada en los intereses del usuario.</u></p>

    </form>
  </section>
</template>

<script>
export default {
  name: "RegisterView"
}
</script>

<style scoped>

</style>