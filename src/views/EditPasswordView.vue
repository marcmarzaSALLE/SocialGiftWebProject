<script>
import router from "@/router";
import EditPasswordInfo from "../components/EditUser&PasswordComponents/EditPasswordInfoComponent.vue";
import EditPasswordFields from "../components/EditUser&PasswordComponents/EditPasswordFieldsComponent.vue";

export default {
  name: "EditPasswordView",
  components: {
    EditPasswordInfo,
    EditPasswordFields,
  },
  data() {
    return {
      userInfo:{}
    };
  },
  created() {
    if(!localStorage.getItem("token")) {
      router.push({ name: "Login" });
    } else {
      this.getUserInfo();
    }
  },
  methods: {
    getUserInfo() {
      this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    }
  }
}
</script>


<template>
  <!--Section User-->
  <section class="section-user3">
    <EditPasswordInfo :userInfo="userInfo"/>
  </section>

  <!-- Section Edit User -->
  <section class="edit-user-password">
    <EditPasswordFields :userInfo="userInfo"/>
  </section>

</template>



<style scoped>

</style>