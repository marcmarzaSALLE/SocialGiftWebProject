<template>

  <section class="section-user3">
    <div>
      <img class="user-img3" src="public/Icons/imageUserPic.png">
    </div>

    <div class="user-text3">
      <h2>Username</h2>
      <h3>Firstname Secondname</h3>

      <div class="friend-buttons-div1">
        <div class="friend-buttons-div2">

          <!--Sección overlay para ver amigos -->
          <a class="friends-anchor" href="#friends-screen">Friends</a>

          <div id="friends-screen" class="friends-div">
            <div class="friends-main-div">
              <a class="close-button" href="#">&times;</a>
              <h3>Friends</h3>

              <section class="friends-list-div">

                <!--Amigo 1-->
                <div class="friend-div2" >
                  <Router-link  class="friend-route-link2" to="/friend">
                    <img class="friend-img2" src="public/Icons/imageFriend.png">
                    <div class="friend-text2">
                      <h3>username</h3>
                      <h3>Firstname Secondname</h3>
                    </div>
                  </Router-link>
                  <div class="friend-button-div2">
                    <button class="friend-button2">Unfollow</button>
                  </div>
                </div>

                <!--Amigo 2-->
                <div class="friend-div2" >
                  <Router-link  class="friend-route-link2" to="/friend">
                    <img class="friend-img2" src="public/Icons/imageFriend.png">
                    <div class="friend-text2">
                      <h3>username</h3>
                      <h3>Firstname Secondname</h3>
                    </div>
                  </Router-link>
                  <div class="friend-button-div2">
                    <button class="friend-button2">Unfollow</button>
                  </div>
                </div>

                <!--Amigo 3-->
                <div class="friend-div2" >
                  <Router-link  class="friend-route-link2" to="/friend">
                    <img class="friend-img2" src="public/Icons/imageFriend.png">
                    <div class="friend-text2">
                      <h3>username</h3>
                      <h3>Firstname Secondname</h3>
                    </div>
                  </Router-link>
                  <div class="friend-button-div2">
                    <button class="friend-button2">Unfollow</button>
                  </div>
                </div>

                <!--Amigo 4-->
                <div class="friend-div2" >
                  <Router-link  class="friend-route-link2" to="/friend">
                    <img class="friend-img2" src="public/Icons/imageFriend.png">
                    <div class="friend-text2">
                      <h3>username</h3>
                      <h3>Firstname Secondname</h3>
                    </div>
                  </Router-link>
                  <div class="friend-button-div2">
                    <button class="friend-button2">Unfollow</button>
                  </div>
                </div>

                <!--Amigo 5-->
                <div class="friend-div2" >
                  <Router-link  class="friend-route-link2" to="/friend">
                    <img class="friend-img2" src="public/Icons/imageFriend.png">
                    <div class="friend-text2">
                      <h3>username</h3>
                      <h3>Firstname Secondname</h3>
                    </div>
                  </Router-link>
                  <div class="friend-button-div2">
                    <button class="friend-button2">Unfollow</button>
                  </div>
                </div>


              </section>




            </div>
          </div>

          <!------------------->

          <RouterLink class="send-friend-message-button" to="/Messages">Send message</RouterLink>
        </div>
        <button class="friend-button3">Unfollow</button>

      </div>
    </div>
  </section>

  <!--Sección de listas y regalos-->
  <section class="lists-gifts-section">

    <!--Sección de listas-->
    <div class="friend-lists">
      <h2>Lists</h2>

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
    <div class="list-view2">
      <div class="data-list-div">
        <h2>List name</h2>
        <div class="description-div">
          <p class="description-p">Description</p>
        </div>
      </div>

      <!--Sección de productos-->
      <section class="gifts-section2">

        <h3>List gifts</h3>

        <!--Regalos-->
        <section class="gifts-view-section2">
          <!--Gift 1-->
          <div class="gift-post-div2">

            <!--Sección de datos-->
            <div class="gift-info-div2">
              <div class="gift-img-div2">
                <img class="gift-img2" src="public/Icons/imageProduct.png">
              </div>

              <div class="gift-data-div2">
                <div class="gift-information-div2">
                  <span>Gift_ID</span>
                  <span>Product_ID</span>
                  <span>Priority</span>
                  <span>Price</span>
                </div>
              </div>
            </div>

            <!--Sección de botones-->
            <div class="gift-buttons-div2">
              <button class="booking-button-gift2">Reserve</button>
            </div>

          </div>

          <!--Gift 2-->
          <div class="gift-post-div2">

            <!--Sección de datos-->
            <div class="gift-info-div2">
              <div class="gift-img-div2">
                <img class="gift-img2" src="public/Icons/imageProduct.png">
              </div>

              <div class="gift-data-div2">
                <div class="gift-information-div2">
                  <span>Gift_ID</span>
                  <span>Product_ID</span>
                  <span>Priority</span>
                  <span>Price</span>
                </div>
              </div>
            </div>

            <!--Sección de botones-->
            <div class="gift-buttons-div2">
              <button class="booking-button-gift2">Reserve</button>
            </div>

          </div>

          <!--Gift 3-->
          <div class="gift-post-div2">

            <!--Sección de datos-->
            <div class="gift-info-div2">
              <div class="gift-img-div2">
                <img class="gift-img2" src="public/Icons/imageProduct.png">
              </div>

              <div class="gift-data-div2">
                <div class="gift-information-div2">
                  <span>Gift_ID</span>
                  <span>Product_ID</span>
                  <span>Priority</span>
                  <span>Price</span>
                </div>
              </div>
            </div>

            <!--Sección de botones-->
            <div class="gift-buttons-div2">
              <button class="booking-button-gift2">Reserve</button>
            </div>

          </div>

          <!--Gift 4-->
          <div class="gift-post-div2">

            <!--Sección de datos-->
            <div class="gift-info-div2">
              <div class="gift-img-div2">
                <img class="gift-img2" src="public/Icons/imageProduct.png">
              </div>

              <div class="gift-data-div2">
                <div class="gift-information-div2">
                  <span>Gift_ID</span>
                  <span>Product_ID</span>
                  <span>Priority</span>
                  <span>Price</span>
                </div>
              </div>
            </div>

            <!--Sección de botones-->
            <div class="gift-buttons-div2">
              <button class="booking-button-gift2">Reserve</button>

            </div>

          </div>

        </section>

        <!--Sección de botones-->
      </section>

      <div class="date-end-div2">
        <img  class="calendar-icon2" src="public/Icons/calendarIcon.png">
        <span class="text-calendar2">End date:</span>
        <span class="date-end2">xx/xx/xx</span>
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