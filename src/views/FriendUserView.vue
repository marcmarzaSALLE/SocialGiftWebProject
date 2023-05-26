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
    const friendId = this.$route.params.id;
    console.log("friendId: " + friendId);
    this.getFriendInfo(friendId);
  },
  data() {
    return {
      friend: {},
    };
  },
  methods: {
    getFriendInfo(id) {
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/' + id, {
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }

      })
        .then((data) => data.json())
        .then((json) => {
          this.friend = json;
        })
        .catch((error) => {
          console.log("error: " + error);
        });
    },
  },
}
</script>

<template>
  <!--Componente del amigo-->
  <section class="section-friend">
    <FriendInfo :friend="friend"/>
  </section>

  <!--Componente de listas y regalos-->
  <section class="section-friend-items">
    <!--Componente listas-->
    <div class="friend-lists-div">
      <h2>Lists</h2>
      <div class="line2"></div>
      <section class="lists-section">
        <FriendLists :friend="friend"/>
      </section>
      <div class="line2"></div>
    </div>

    <!--Componente de lista en vista-->
    <FriendListView/>
  </section>
</template>

<style scoped>

</style>