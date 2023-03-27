<template xmlns:align-content="http://www.w3.org/1999/xhtml">

  <section class="section-user">
    <div>
      <img class="user-img" src="public/Icons/imageUserPic.png">
    </div>

    <div class="user-text">
      <h2>Username</h2>
      <h3>Firstname Secondname</h3>

      <div class="edit-profile-div">
        <RouterLink to="/EditUser">

          <button class="edit-profile-button">
            <span>EDIT PROFILE</span>
          </button>

        </RouterLink>
      </div>
    </div>
  </section>

  <section class="section-user-items">

    <!--Listas de amigos-->
    <div class="elements-template">
      <h2>Friends</h2>
      <section class="section-template">


        <!--Amigo 1-->
        <div class="friend">
          <img class="friend-img" src="public/Icons/imageFriend.png">
          <div class="friend-text">
            <h3>username</h3>
            <h3>Firstname Secondname</h3>
          </div>
          <div class="friend-button-div">
            <button class="friend-button">
              <span>Unfollow</span>
            </button>
          </div>
        </div>

        <!--Amigo 2-->
        <div class="friend">
          <img class="friend-img" src="public/Icons/imageFriend.png">
          <div class="friend-text">
            <h3>username</h3>
            <h3>Firstname Secondname</h3>
          </div>
          <div class="friend-button-div">
            <button class="friend-button">
              <span>Unfollow</span>
            </button>
          </div>
        </div>

        <!--Amigo 3-->
        <div class="friend">
          <img class="friend-img" src="public/Icons/imageFriend.png">
          <div class="friend-text">
            <h3>username</h3>
            <h3>Firstname Secondname</h3>
          </div>
          <div class="friend-button-div">
            <button class="friend-button">
              <span>Unfollow</span>
            </button>
          </div>
        </div>

        <!--Amigo 4-->
        <div class="friend">
          <img class="friend-img" src="public/Icons/imageFriend.png">
          <div class="friend-text">
            <h3>username</h3>
            <h3>Firstname Secondname</h3>
          </div>
          <div class="friend-button-div">
            <button class="friend-button">
              <span>Unfollow</span>
            </button>
          </div>
        </div>

        <!--Amigo 5-->
        <div class="friend">
          <img class="friend-img" src="public/Icons/imageFriend.png">
          <div class="friend-text">
            <h3>username</h3>
            <h3>Firstname Secondname</h3>
          </div>
          <div class="friend-button-div">
            <button class="friend-button">
              <span>Unfollow</span>
            </button>
          </div>
        </div>



      </section>
    </div>

    <!--Listas de reservas-->
    <div class="elements-template">
      <h2>Bookings</h2>
      <section class="section-template">

        <!--Reserva 1-->
        <div class="booking">
          <img class="booking-img" src="public/Icons/imageProduct.png">
          <div class="booking-text">
            <p>Gift_ID</p>
            <p>Product name</p>
            <p>Priority</p>
            <p>WishList_ID</p>
          </div>
          <div class="cancel-button-div">
            <button class="cancel-button">
              <span>Unbooking</span>
            </button>
          </div>
        </div>

        <!--Reserva 2-->
        <div class="booking">
          <img class="booking-img" src="public/Icons/imageProduct.png">
          <div class="booking-text">
            <p>Gift_ID</p>
            <p>Product name</p>
            <p>Priority</p>
            <p>WishList_ID</p>
          </div>
          <div class="cancel-button-div">
            <button class="cancel-button">
              <span>Unbooking</span>
            </button>
          </div>
        </div>

        <!--Reserva 3-->
        <div class="booking">
          <img class="booking-img" src="public/Icons/imageProduct.png">
          <div class="booking-text">
            <p>Gift_ID</p>
            <p>Product name</p>
            <p>Priority</p>
            <p>WishList_ID</p>
          </div>
          <div class="cancel-button-div">
            <button class="cancel-button">
              <span>Unbooking</span>
            </button>
          </div>
        </div>

        <!--Reserva 4-->
        <div class="booking">
          <img class="booking-img" src="public/Icons/imageProduct.png">
          <div class="booking-text">
            <p>Gift_ID</p>
            <p>Product name</p>
            <p>Priority</p>
            <p>WishList_ID</p>
          </div>
          <div class="cancel-button-div">
            <button class="cancel-button">
              <span>Unbooking</span>
            </button>
          </div>
        </div>

        <!--Reserva 5-->
        <div class="booking">
          <img class="booking-img" src="public/Icons/imageProduct.png">
          <div class="booking-text">
            <p>Gift_ID</p>
            <p>Product name</p>
            <p>Priority</p>
            <p>WishList_ID</p>
          </div>
          <div class="cancel-button-div">
            <button class="cancel-button">
              <span>Unbooking</span>
            </button>
          </div>
        </div>

      </section>
    </div>

    <!--Listas de listas-->
    <div class="elements-template">
      <h2>Lists</h2>
      <section class="section-template">

        <!--Lista 1-->
        <div class="list">
          <h3>List name</h3>
          <div class="description">
            <p>Description</p>
          </div>
          <div class="dates-list">
            <p>Creation: xx/xx/xx</p>
            <p> -</p>
            <p>Ends: xx/xx/xx</p>
          </div>

          <div class="editList-button-div">
            <button class="editList-button">
              <span>Edit list</span>
            </button>
          </div>
        </div>

        <!--Lista 2-->
        <div class="list">
          <h3>List name</h3>
          <div class="description">
            <p>Description</p>
          </div>
          <div class="dates-list">
            <p>Creation: xx/xx/xx</p>
            <p> -</p>
            <p>Ends: xx/xx/xx</p>
          </div>

          <div class="editList-button-div">
            <button class="editList-button">
              <span>Edit list</span>
            </button>
          </div>
        </div>

        <!--Lista 3-->
        <div class="list">
          <h3>List name</h3>
          <div class="description">
            <p>Description</p>
          </div>
          <div class="dates-list">
            <p>Creation: xx/xx/xx</p>
            <p> -</p>
            <p>Ends: xx/xx/xx</p>
          </div>

          <div class="editList-button-div">
            <button class="editList-button">
              <span>Edit list</span>
            </button>
          </div>
        </div>

        <!--Lista 4-->
        <div class="list">
          <h3>List name</h3>
          <div class="description">
            <p>Description</p>
          </div>
          <div class="dates-list">
            <p>Creation: xx/xx/xx</p>
            <p> -</p>
            <p>Ends: xx/xx/xx</p>
          </div>

          <div class="editList-button-div">
            <button class="editList-button">
              <span>Edit list</span>
            </button>
          </div>
        </div>









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