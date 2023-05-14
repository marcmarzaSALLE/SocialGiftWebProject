<script>
import UserInfo from "../components/UserInfoComponent.vue";
import FriendsList from "../components/UserFriendsComponent.vue";
import BookingsList from "../components/UserBookingsComponent.vue";
import UserLists from "../components/UserListsComponent.vue";
import router from "@/router";
export default {
  name: "MyUser",
  components: {
    UserInfo,
    FriendsList,
    BookingsList,
    UserLists,
  },
  created() {
    if(!localStorage.getItem("token")) {
      router.push({ name: "Login" });
    }
  }
}
</script>

<template class="myUser">

  <!--Componente del usuario-->
  <section class="section-user">
    <UserInfo/>
  </section>

  <!--Componente de los elementos del usuario-->
  <section class="section-user-items">

    <!--Componente listas de amigos-->
    <div class="elements-template">
      <h2>Friends</h2>
      <div class="line1"></div>
      <section class="section-template">
        <FriendsList/>
      </section>
      <div class="line1"></div>
    </div>

    <!--Componente listas de reservas-->
    <div class="elements-template">
      <h2>Bookings</h2>
      <div class="line1"></div>
      <section class="section-template">
        <BookingsList/>
      </section>
      <div class="line1"></div>
    </div>

    <!--Listas de listas-->
    <div class="elements-template">
      <h2>Lists</h2>
      <div class="line1"></div>
      <section class="section-template">
        <UserLists/>
      </section>
      <div class="line1"></div>
    </div>
  </section>

</template>

<style scoped>

</style>