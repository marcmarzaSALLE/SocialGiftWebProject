<script>
import router from "@/router";
import EditUserInfo from "../components/EditUser&PasswordComponents/EditUserInfoComponent.vue";
import EditUserFields from "../components/EditUser&PasswordComponents/EditUserFieldsComponent.vue";
export default {
    name: "EditUserView",
    components: {
        EditUserInfo,
        EditUserFields,
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
  <!--Componente del usuario-->
  <section class="section-user2">
   <EditUserInfo :userInfo="userInfo"/>
  </section>

  <!--Section Edit User-->
  <section class="edit-user-section">
    <EditUserFields  :userInfo="userInfo"/>
  </section>
</template>
