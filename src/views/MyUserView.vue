<template>

  <!--Componente del usuario-->
  <section class="section-user">
    <img class="user-img" src="public/Icons/imageUserPic.png">

    <div class="user-data">
      <div class="user-info">
        <h2 class="user-username">Username</h2>
        <h3 class="user-complete-name">Firstname Secondname</h3>
        <p class="user-email">username@email.com</p>
      </div>

      <div class="user-info-mobile">
        <p class="user-username">Username</p>
      </div>

      <nav class="edit-profile-nav">
        <RouterLink class="edit-profile-button" to="/EditUser">Edit profile</RouterLink>
      </nav>
    </div>
  </section>

  <!--Componente de los elementos del usuario-->
  <section class="section-user-items">

    <!--Componente listas de amigos-->
    <div class="elements-template">
      <h2>Friends</h2>
      <div class="line1"></div>
      <section class="section-template">
        <section class="section-template-inside">

          <!--Amigo 1-->
          <div class="friend-div">
            <Router-link class="friend-route-link" to="/friend">
              <img class="friend-img" src="public/Icons/imageUserPic.png">
              <div class="friend-text">
                <p class="friend-username">username</p>
                <p class="friend-name">Firstname Secondname</p>
              </div>
            </Router-link>
            <button class="friend-button">Unfollow</button>
          </div>

          <!--Amigo 2-->
          <div class="friend-div">
            <Router-link class="friend-route-link" to="/friend">
              <img class="friend-img" src="public/Icons/imageUserPic.png">
              <div class="friend-text">
                <p class="friend-username">username</p>
                <p class="friend-name">Firstname Secondname</p>
              </div>
            </Router-link>
            <button class="friend-button">Unfollow</button>
          </div>

          <!--Amigo 3-->
          <div class="friend-div">
            <Router-link class="friend-route-link" to="/friend">
              <img class="friend-img" src="public/Icons/imageUserPic.png">
              <div class="friend-text">
                <p class="friend-username">username</p>
                <p class="friend-name">Firstname Secondname</p>
              </div>
            </Router-link>
            <button class="friend-button">Unfollow</button>
          </div>

          <!--Amigo 4-->
          <div class="friend-div">
            <Router-link class="friend-route-link" to="/friend">
              <img class="friend-img" src="public/Icons/imageUserPic.png">
              <div class="friend-text">
                <p class="friend-username">username</p>
                <p class="friend-name">Firstname Secondname</p>
              </div>
            </Router-link>
            <button class="friend-button">Unfollow</button>
          </div>

          <!--Amigo 5-->
          <div class="friend-div">
            <Router-link class="friend-route-link" to="/friend">
              <img class="friend-img" src="public/Icons/imageUserPic.png">
              <div class="friend-text">
                <p class="friend-username">username</p>
                <p class="friend-name">Firstname Secondname</p>
              </div>
            </Router-link>
            <button class="friend-button">Unfollow</button>
          </div>
        </section>
      </section>
      <div class="line1"></div>
    </div>

    <!--Componente listas de reservas-->
    <div class="elements-template">
      <h2>Bookings</h2>
      <div class="line1"></div>
      <section class="section-template">
        <section class="section-template-inside">
          <!--Reserva 1-->
          <div class="booking-div">
            <img class="booking-img" src="public/Icons/imageProduct.png">
            <div class="booking-text">
              <p>Gift_ID</p>
              <p>Product name</p>
              <p>Priority</p>
              <p>WishList_ID</p>
              <p>Friend_id</p>
            </div>
            <button class="unbook-button">Unbook</button>
          </div>

          <!--Reserva 2-->
          <div class="booking-div">
            <img class="booking-img" src="public/Icons/imageProduct.png">
            <div class="booking-text">
              <p>Gift_ID</p>
              <p>Product name</p>
              <p>Priority</p>
              <p>WishList_ID</p>
              <p>Friend_id</p>
            </div>
            <button class="unbook-button">Unbook</button>
          </div>

          <!--Reserva 3-->
          <div class="booking-div">
            <img class="booking-img" src="public/Icons/imageProduct.png">
            <div class="booking-text">
              <p>Gift_ID</p>
              <p>Product name</p>
              <p>Priority</p>
              <p>WishList_ID</p>
              <p>Friend_id</p>
            </div>
            <button class="unbook-button">Unbook</button>
          </div>

          <!--Reserva 4-->
          <div class="booking-div">
            <img class="booking-img" src="public/Icons/imageProduct.png">
            <div class="booking-text">
              <p>Gift_ID</p>
              <p>Product name</p>
              <p>Priority</p>
              <p>WishList_ID</p>
              <p>Friend_id</p>
            </div>
            <button class="unbook-button">Unbook</button>
          </div>
        </section>
      </section>
      <div class="line1"></div>
    </div>

    <!--Listas de listas-->
    <div class="elements-template">
      <h2>Lists</h2>
      <div class="line1"></div>
      <section class="section-template">
        <section class="section-template-inside">
          <!--Lista 1-->
          <div class="list-div">
            <p>List name</p>
            <div class="description-list-div"><p>Description</p></div>
            <div class="dates-list">
              <p>Creation: xx/xx/xx</p>
              <p>Ends: xx/xx/xx</p>
            </div>

            <div class="editList-button-div">
              <RouterLink class="editList-button" to="/MyLists">Edit list</RouterLink>
            </div>
          </div>

          <!--Lista 2-->
          <div class="list-div">
            <p>List name</p>
            <div class="description-list-div"><p>Description</p></div>
            <div class="dates-list">
              <p>Creation: xx/xx/xx</p>
              <p>Ends: xx/xx/xx</p>
            </div>

            <div class="editList-button-div">
              <RouterLink class="editList-button" to="/MyLists">Edit list</RouterLink>
            </div>
          </div>

          <!--Lista 3-->
          <div class="list-div">
            <p>List name</p>
            <div class="description-list-div"><p>Description</p></div>
            <div class="dates-list">
              <p>Creation: xx/xx/xx</p>
              <p>Ends: xx/xx/xx</p>
            </div>

            <div class="editList-button-div">
              <RouterLink class="editList-button" to="/MyLists">Edit list</RouterLink>
            </div>
          </div>

          <!--Lista 4-->
          <div class="list-div">
            <p>List name</p>
            <div class="description-list-div"><p>Description</p></div>
            <div class="dates-list">
              <p>Creation: xx/xx/xx</p>
              <p>Ends: xx/xx/xx</p>
            </div>

            <div class="editList-button-div">
              <RouterLink class="editList-button" to="/MyLists">Edit list</RouterLink>
            </div>
          </div>
        </section>

      </section>
      <div class="line1"></div>
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