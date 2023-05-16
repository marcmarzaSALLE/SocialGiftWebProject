<script>
import FriendInfo from "../components/FriendInfoComponent.vue";
import FriendLists from "../components/FriendListsComponent.vue";
import FriendListView from "../components/FriendListViewComponent.vue";

import router from "@/router";
export default {
  name: "FriendUser",
  components: {
    FriendInfo,
    FriendLists,
    FriendListView,
  },
  created() {
    if(!localStorage.getItem("token")) {
      router.push({ name: "Login" });
    }
  }
}
</script>

<template>
  <!--Componente del amigo-->
  <section class="section-friend">
    <FriendInfo/>
  </section>

  <!--Componente de listas y regalos-->
  <section class="section-friend-items">
    <!--Componente listas-->
    <FriendLists/>
    <!--Componente de lista en vista-->
    <FriendListView/>
  </section>
</template>

<style scoped>

</style>