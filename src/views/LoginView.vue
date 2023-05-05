<script>
import LoginView from "../components/LoginView.vue";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
  components: {
    LoginView,
  },
};

</script>

<template class="login">
  <LoginView/>

</template>

<style scoped>

</style>