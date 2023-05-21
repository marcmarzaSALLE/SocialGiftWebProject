<script>
import router from "@/router";
import EditUserInfo from "../components/EditUserInfoComponent.vue";
import EditUserFields from "../components/EditUserFieldsComponent.vue";
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

  <!--Section User-->
  <section class="section-user2">
   <EditUserInfo :userInfo="userInfo"/>
  </section>

  <!--Section Edit User-->
  <section class="edit-user-section">
    <EditUserFields  :userInfo="userInfo"/>
  </section>

</template>

<style scoped>

</style>