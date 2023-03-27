<template xmlns:align-content="http://www.w3.org/1999/xhtml">

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

    <!--Listas de amigos-->
    <div class="templateList">
      <h2>Friends</h2>
      <section class="templateSection">

        <div class="friend">
          <img class="friendImg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png">
          <div class="friendText">
            <h3>username</h3>
            <h3>Firstname Secondname</h3>
          </div>
        </div>

      </section>
    </div>

    <!--Listas de reservas-->
    <div class="templateList">
      <h2>Bookings</h2>
      <section class="templateSection">
      </section>
    </div>

    <!--Listas de listas-->
    <div class="templateList">
      <h2>Lists</h2>
      <section class="templateSection">
      </section>
    </div>


  </section>


</template>

<script>
export default {
  name: "MyUserView"
}
</script>

<style scoped>

</style>