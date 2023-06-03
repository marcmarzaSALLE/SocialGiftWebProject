<script>
import router from "@/router";

export default {
  name: "Register",
  created() {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token")
    }
  },
  data() {
    return {
      name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
    }
  },
  methods: {
    register() {
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users', {
        method: 'POST',
        body: JSON.stringify({
          name: this.name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          image: "https://balandrau.salle.url.edu/i3/repositoryimages/photo/47601a8b-dc7f-41a2-a53b-19d2e8f54cd0.png"
        }), headers: {
          'Content-Type': 'application/json'
        }
      })
      // Si el register es correcto, se guarda el token y se redirige a la página de MyUser
      .then(response => {
        if (response.ok) {
          this.login()
          router.push({ name: "MyUser" });
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .catch(error => {
        alert("There is incorrect data: " + error)
      })
    },

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
  <section class="background-signin">
    <div class="title-create-account">
      <h1 class="tite-text">Join Social Gift</h1>
    </div>

    <div class="line4"></div>

    <section class="register-section">
      <input type="text" class="name-account" name="name" placeholder="Name" v-model="name" minlength="2" maxlength="20">
      <input type="text" class="secondname-account" name="secondname" placeholder="Last name" v-model="last_name" minlength="2" maxlength="30">
      <input type="email" class="email-account" name="email" placeholder="Email" v-model="email">
      <input type="password" class="password-account" name="password" placeholder="Password" v-model="password" minlength="8">
      <input type="password" class="password2-account" name="password2" placeholder="Confirm password" v-model="password_confirm" minlength="8">

      <button class="register-button" @click="register">Create account</button>
    </section>
  </section>
</template>