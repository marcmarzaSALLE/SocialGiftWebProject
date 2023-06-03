<script>
export default {
  name: "EditPasswordInfo",
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <section class="user-info-container3">
    <img class="user-img" :src="userInfo.image">
    <div class="user-data">
      <span class="user-username">{{ userInfo.name +" "+userInfo.last_name }}</span>
      <span class="user-email">{{ userInfo.email }}</span>

      <nav class="edit-profile-nav">
        <RouterLink class="edit-profile-button" to="/EditUser">Edit profile</RouterLink>
      </nav>
    </div>
  </section>
</template>