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
        console.log("ok: " + response.ok)
        console.log("status: " + response.status)
        if (response.status === 201) {
          router.push({ name: "Login" });
          //console.log("OK: " + response.text());
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .catch(error => {
        alert("There is incorrect data: " + error)
      })
    },
  },
};

</script>

<template>
  <section class="background-signin" >

    <div class="title-create-account">
      <h1 class="tite-text">Join Social Gift</h1>
    </div>

    <div class="line4"></div>

    <section class="register-section">
      <input type="text" class="name-account" name="name" placeholder="Name" v-model="name">
      <input type="text" class="secondname-account" name="secondname" placeholder="Last name" v-model="last_name">
      <input type="email" class="email-account" name="email" placeholder="Email" v-model="email">
      <input type="password" class="password-account" name="password" placeholder="Password" v-model="password">
      <input type="password" class="password2-account" name="password2" placeholder="Confirm password" v-model="password_confirm">


      <button class="register-button" @click="register">Create account</button>

    </section>
  </section>
</template>