<template>

  <section class="section-user">
    <div>
      <img class="user-img" src="public/Icons/imageUserPic.png">
    </div>

    <div class="user-text">
      <h2>Username</h2>
      <h3>Firstname Secondname</h3>

      <div class="friend-buttons-div1">
        <div class="friend-buttons-div2">
          <RouterLink class="friends-button" to="/EditUser">Friends</RouterLink>
          <RouterLink class="send-friend-message-button" to="/EditUser">Send message</RouterLink>
        </div>
        <RouterLink class="unfollow-button" to="/EditUser">Unfollow</RouterLink>

      </div>
    </div>
  </section>

  <!--Sección de listas y regalos-->
  <section class="lists-gifts-section">

    <!--Sección de listas-->
    <div class="friend-lists">
      <h2>My lists</h2>

      <div class="line-div4"></div>
      <section class="lists-section3">

        <!--Lista 1-->
        <div class="list-div2">
          <h3>List name</h3>
          <div class="description2">
            <p>Description</p>
          </div>
          <div class="dates-list2">
            <p>Creation: xx/xx/xx</p>
            <p> -</p>
            <p>Ends: xx/xx/xx</p>
          </div>
        </div>

        <!--Lista 2-->
        <div class="list-div2">
          <h3>List name</h3>
          <div class="description2">
            <p>Description</p>
          </div>
          <div class="dates-list2">
            <p>Creation: xx/xx/xx</p>
            <p> -</p>
            <p>Ends: xx/xx/xx</p>
          </div>
        </div>

        <!--Lista 3-->
        <div class="list-div2">
          <h3>List name</h3>
          <div class="description2">
            <p>Description</p>
          </div>
          <div class="dates-list2">
            <p>Creation: xx/xx/xx</p>
            <p> -</p>
            <p>Ends: xx/xx/xx</p>
          </div>
        </div>

        <!--Lista 4-->
        <div class="list-div2">
          <h3>List name</h3>
          <div class="description2">
            <p>Description</p>
          </div>
          <div class="dates-list2">
            <p>Creation: xx/xx/xx</p>
            <p> -</p>
            <p>Ends: xx/xx/xx</p>
          </div>
        </div>

        <!--Lista 5-->
        <div class="list-div2">
          <h3>List name</h3>
          <div class="description2">
            <p>Description</p>
          </div>
          <div class="dates-list2">
            <p>Creation: xx/xx/xx</p>
            <p> -</p>
            <p>Ends: xx/xx/xx</p>
          </div>
        </div>

      </section>
      <div class="line-div4"></div>
    </div>

    <!--Sección de lista en vista-->
    <div class="list-view">
      <div class="data-list-div">
        <h2>List name</h2>
        <h3 class="description-h3">Description</h3>
      </div>
      <!--Sección de productos-->
      <section class="gifts-section">

        <h3>Gifts</h3>

        <!--Regalos-->
        <section class="gifts-view-section">
          <!--Gift 1-->
          <div class="gift-post-div">

            <!--Sección de datos-->
            <div class="gift-info-div">
              <div class="gift-img-div">
                <img class="gift-img" src="public/Icons/imageProduct.png">
              </div>

              <div class="gift-data-div">
                <div class="gift-information-div">
                  <span>Gift_ID</span>
                  <span>Product_ID</span>
                  <span>Priority</span>
                  <span>Price</span>
                </div>
              </div>
            </div>

            <!--Sección de botones-->
            <div class="gift-buttons-div">

              <button class="booking-button-gift">
                <span>Reserve</span>
              </button>

            </div>

          </div>

        </section>

        <!--Sección de botones-->
      </section>

      <div class="date-end-div">
          <img  class="calendar-icon" src="public/Icons/calendarIcon.png">
          <span class="text-calendar">End date:</span>
          <input type="date" placeholder="End date" name="end-date-list" class="end-date-list-input">
        </div>


    </div>





  <!--------->
  </section>

</template>

<script>
export default {
  name: "MyUserView"
}
</script>

<style scoped>

</style>