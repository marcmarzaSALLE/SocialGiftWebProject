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
  data() {
    return {
      friendId:"",
      selectedWishlist: {},
      showList: false,
    };
  },
  created() {
    if (localStorage.getItem("token")) {
      this.friendId = this.$route.params.id;
      console.log("friendId: " +  this.friendId);
    } else {
      router.push({ name: "Login" });
    }
  },
  methods: {
    onSeeList(wishlist) {
      this.selectedWishlist = wishlist;
      this.getGiftsInfo();
    },

    setShowList(value) {
      this.showList = value;
    },

    getGiftsInfo() {
      this.selectedWishlist.gifts.forEach(gift => {
        fetch(gift.product_url)
          .then(response => response.json())
          .then(data => {
            gift.name = data.name;
            gift.description = data.description;
            gift.link = data.link;
            gift.image = data.photo;
            gift.price = data.price;
          })
          .catch(error => {
            console.error(error);
          });
      });
    },



  },
}
</script>

<template>
  <!--Componente del amigo-->
  <section class="section-friend">
    <FriendInfo :friendId="friendId"/>
  </section>

  <!--Componente de listas y regalos-->
  <section class="section-friend-items">
    <!--Componente listas-->
    <div class="friend-lists-div">
      <h2>Lists</h2>
      <div class="line2"></div>
      <section class="lists-section">
        <FriendLists :friendId="friendId" @see-list="onSeeList" @show-list="setShowList"/>
      </section>
      <div class="line2"></div>
    </div>

    <section class="list-view-friend">
      <!--Componente de lista en vista-->
      <FriendListView :wishlist="selectedWishlist" :showList="showList"/>
    </section>
  </section>
</template>

<style scoped>

</style>