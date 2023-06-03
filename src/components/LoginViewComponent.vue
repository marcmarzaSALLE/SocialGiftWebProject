<script>
import router from "@/router";

export default {
  name: "Login",
  created() {
    if (localStorage.getItem("token")) {
      router.push({ name: "MyUser" });
    }
  },
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    login() {
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/login', {
        method: 'POST',
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }), headers: {
          'Content-Type': 'application/json'
        }
      })
      // Si el login es correcto, se guarda el token y se redirige a la página de MyLists
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .then(data => {
        localStorage.setItem("token", data.accessToken)
        this.getIdUser()
      })
      .catch(error => {
        alert("Usuario o contraseña incorrectos: " + error)
      })
    },

    getIdUser(){
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/search?s='+this.email,{
        headers:{
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .then(data => {
        console.log("data: " + data[0].id)
        //console.log(data.accessToken)
        localStorage.setItem("idUser", data[0].id)
        //Guardar password encryptada
        router.push({name:"MyUser"})
      })
    },
  },
};
</script>

<template>
  <section class="background-login">
    <img class="socialGift-img-login" src="public/icons/socialGiftBlack.png">

    <div class="line4"></div>

    <section class="login-section">
      <input type="email" class="inputEmail-login" name="email" placeholder="Email or Username" v-model="email">
      <input type="password" class="inputPassword-login" name="password" placeholder="Password" v-model="password">

      <button class="login-button" @click="login">Log In</button>
    </section>

    <h3 class="new-user-text">Are you new in Social Gift?</h3>
    <div class="line4"></div>

    <section class="section-signin">
      <RouterLink to="/Register" class="routerLink-login-button">
        <button class="signin-button">Create account</button>
      </RouterLink>
    </section>
  </section>
</template>
