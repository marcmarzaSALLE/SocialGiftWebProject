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
    if (!localStorage.getItem("token")) {
      router.push({ name: "Login" });
    }
  },
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
    <div class="friend-lists-div">
      <h2>Lists</h2>
      <div class="line2"></div>
      <section class="lists-section">
        <FriendLists/>
      </section>
      <div class="line2"></div>
    </div>

    <!--Componente de lista en vista-->
    <FriendListView/>
  </section>
</template>

<style scoped>

</style>