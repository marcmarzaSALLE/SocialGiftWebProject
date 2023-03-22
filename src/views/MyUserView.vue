<template xmlns:align-content="http://www.w3.org/1999/xhtml">
  <body>

  <section class="sectionUser">
    <div>
      <img class="userImg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png">
    </div>

    <div class="userText">
      <h2>Username</h2>
      <h3>Firstname Secondname</h3>
      <div class="buttonEditProfile">
        <RouterLink to="/EditUser">
          <button class="editProfile">
            <p class="textButton">Edit profile</p>
          </button>
        </RouterLink>
      </div>
    </div>
  </section>

  <section class="sectionUserItems">

    <div class="friendsList">
      <h2>Friends</h2>
      <section class="friendsSection">
        <div class="friend">
          <img class="friendImg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png">
          <h3>Username</h3>
        </div>

      </section>
    </div>

    <div class="bookingsList">
      <h2>Bookings</h2>
      <section class="bookingsSection">
      </section>
    </div>

    <div class="listsList">
      <h2>Lists</h2>
      <section class="listSection">
      </section>
    </div>


  </section>

  </body>


</template>

<script>
export default {
  name: "MyUserView"
}
</script>

<style scoped>

</style>