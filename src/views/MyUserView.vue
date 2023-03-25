<template xmlns:align-content="http://www.w3.org/1999/xhtml">

  <section className="sectionUser">
    <div>
      <img className="userImg"
           src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png">
    </div>

    <div className="userText">
      <h2>Username</h2>
      <h3>Firstname Secondname</h3>
      <div className="buttonEditProfile">
        <RouterLink to="/EditUser">
          <button className="editProfile">
            <p className="textButton">Edit profile</p>
          </button>
        </RouterLink>
      </div>

    </div>
  </section>
  <section className="sectionUserItems">

    <!--Listas de amigos-->
    <div className="templateList">
      <h2>Friends</h2>
      <section className="templateSection">

        <div className="friend">
          <img className="friendImg"
               src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png">
          <div className="friendText">
            <h3>username</h3>
            <h3>Firstname Secondname</h3>
          </div>
        </div>

      </section>
    </div>

    <!--Listas de reservas-->
    <div className="templateList">
      <h2>Bookings</h2>
      <section className="templateSection">
      </section>
    </div>

    <!--Listas de listas-->
    <div className="templateList">
      <h2>Lists</h2>
      <section className="templateSection">
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