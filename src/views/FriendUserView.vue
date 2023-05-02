<template>

  <!--Componente del amigo-->
  <section class="section-friend">
    <img class="friend-profile-img" src="public/Icons/imageUserPic.png">

    <div class="friend-data">
      <div class="friend-info">
        <h2 class="friend-username">Username</h2>
        <h3 clas="friend-name">Firstname Secondname</h3>
      </div>

      <div class="friend-info-mobile">
        <p class="friend-username">Username</p>
      </div>

      <!--Componente botones del amigo-->
      <div class="friend-buttons-div">
        <RouterLink class="message-button" to="/Messages">Message</RouterLink>
        <button class="unfollow-button">Unfollow</button>
      </div>
    </div>
  </section>

  <!--Componente de listas y regalos-->
  <section class="section-friend-items">

    <!--Sección de listas-->
    <div class="friend-lists-div">
      <h2>Lists</h2>
      <div class="line2"></div>
      <section class="lists-section">
        <section class="list-section-inside">
          <!--Lista 1-->
          <div class="list-friend-div">
            <p>List name</p>
            <div class="description-list-friend-div"><p>Description</p></div>
            <div class="dates-friend-list">
              <p>Creation: xx/xx/xx</p>
              <p>Ends: xx/xx/xx</p>
            </div>
          </div>

          <!--Lista 2-->
          <div class="list-friend-div">
            <p>List name</p>
            <div class="description-list-friend-div"><p>Description</p></div>
            <div class="dates-friend-list">
              <p>Creation: xx/xx/xx</p>
              <p>Ends: xx/xx/xx</p>
            </div>
          </div>

          <!--Lista 3-->
          <div class="list-friend-div">
            <p>List name</p>
            <div class="description-list-friend-div"><p>Description</p></div>
            <div class="dates-friend-list">
              <p>Creation: xx/xx/xx</p>
              <p>Ends: xx/xx/xx</p>
            </div>
          </div>

          <!--Lista 4-->
          <div class="list-friend-div">
            <p>List name</p>
            <div class="description-list-friend-div"><p>Description</p></div>
            <div class="dates-friend-list">
              <p>Creation: xx/xx/xx</p>
              <p>Ends: xx/xx/xx</p>
            </div>
          </div>

          <!--Lista 5-->
          <div class="list-friend-div">
            <p>List name</p>
            <div class="description-list-friend-div"><p>Description</p></div>
            <div class="dates-friend-list">
              <p>Creation: xx/xx/xx</p>
              <p>Ends: xx/xx/xx</p>
            </div>
          </div>
        </section>
      </section>
      <div class="line2"></div>
    </div>

    <!--Componente de lista en vista-->
    <div class="list-view-friend-div">

      <h2>List name</h2>
      <div class="description-view-friend-div">
        <p class="description-view-p">Description</p>
      </div>

      <h3>List gifts</h3>
      <!--Sección de productos-->
      <section class="gifts-list-friend-section">
        <!--Regalos-->
        <section class="gifts-view-section">
          <!--Gift 1-->
          <div class="gift-post-list-div">
            <!--Sección de datos-->
            <div class="gift-post-info-div">

              <div class="gift-post-img-div">
                <img class="gift-post-img" src="public/Icons/imageProduct.png">
              </div>

              <div class="gift-post-data-div">
                <div class="gift-information-div">
                  <span>Gift_ID</span>
                  <span>Product_ID</span>
                  <span>Priority</span>
                  <span>Price</span>
                </div>
              </div>
            </div>
            <button class="booking-button-gift-post">Reserve</button>
          </div>

          <!--Gift 2-->
          <div class="gift-post-list-div">
            <!--Sección de datos-->
            <div class="gift-post-info-div">

              <div class="gift-post-img-div">
                <img class="gift-post-img" src="public/Icons/imageProduct.png">
              </div>

              <div class="gift-post-data-div">
                <div class="gift-information-div">
                  <span>Gift_ID</span>
                  <span>Product_ID</span>
                  <span>Priority</span>
                  <span>Price</span>
                </div>
              </div>
            </div>
            <button class="booking-button-gift-post">Reserve</button>
          </div>

          <!--Gift 3-->
          <div class="gift-post-list-div">
            <!--Sección de datos-->
            <div class="gift-post-info-div">

              <div class="gift-post-img-div">
                <img class="gift-post-img" src="public/Icons/imageProduct.png">
              </div>

              <div class="gift-post-data-div">
                <div class="gift-information-div">
                  <span>Gift_ID</span>
                  <span>Product_ID</span>
                  <span>Priority</span>
                  <span>Price</span>
                </div>
              </div>
            </div>
            <button class="booking-button-gift-post">Reserve</button>
          </div>

          <!--Gift 4-->
          <div class="gift-post-list-div">
            <!--Sección de datos-->
            <div class="gift-post-info-div">

              <div class="gift-post-img-div">
                <img class="gift-post-img" src="public/Icons/imageProduct.png">
              </div>

              <div class="gift-post-data-div">
                <div class="gift-information-div">
                  <span>Gift_ID</span>
                  <span>Product_ID</span>
                  <span>Priority</span>
                  <span>Price</span>
                </div>
              </div>
            </div>
            <button class="booking-button-gift-post">Reserve</button>
          </div>

        </section>
      </section>

      <div class="date-end-list-div">
        <span class="text-calendar-span">End date:</span>
        <span class="date-end-span">xx/xx/xx</span>
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