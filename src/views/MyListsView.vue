<template>

  <section class="user-lists-section">

    <div class="my-lists">
      <h2>My lists</h2>

      <div class="line-div2"></div>
      <section class="lists-section2">
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

          <div class="editList-button-div2">
            <button class="editList-button2">
              <span>Edit list</span>
            </button>
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

          <div class="editList-button-div2">
            <button class="editList-button2">
              <span>Edit list</span>
            </button>
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

          <div class="editList-button-div2">
            <button class="editList-button2">
              <span>Edit list</span>
            </button>
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

          <div class="editList-button-div2">
            <button class="editList-button2">
              <span>Edit list</span>
            </button>
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

          <div class="editList-button-div2">
            <button class="editList-button2">
              <span>Edit list</span>
            </button>
          </div>
        </div>

      </section>
      <div class="line-div2"></div>

      <button class="create-list-button">
        <span>+ create list</span>
      </button>

    </div>

    <!--Lista editar-->
    <div class="list-view">

      <input type="text" placeholder="Name list" name="name-list" class="name-list-input">
      <input type="text" placeholder="Description" name="description-list" class="description-list-input">

      <section class="gifts-section">

        <div class="gifts-div">
          <h3>Gifts</h3>

          <div class="add-gift-div">
            <input type="checkbox" id="add-gift-button" class="add-gift-button-input">
            <label for="add-gift-button" class="add-gift-button-label" >
              <span>+ add gift</span>
            </label>

            <div class="add-gift-display">

              <section class="add-gift-background">
                <section class="add-gift-search-section">
                  <input type="checkbox" id="exit-button" class="exit-button-input">
                  <!--Parte buscador-->
                  <div class="search-box-input2">
                    <div class="dropdown-categories-div">
                      <button class="categories-button">Categories</button>
                      <div class="dropdown-content">
                        <a href="#">Category 1</a>
                        <a href="#">Category 2</a>
                        <a href="#">Category 3</a>
                      </div>
                    </div>


                    <form class="search-box2" method="get">
                      <input class="search2" type="search" placeholder="Look for a gift..." />
                    </form>
                    <button class="search-button2" type="submit">
                      <img class="search-icon2" src="public/Icons/searchIcon.png">
                    </button>
                  </div>

                </section>
              </section>
            </div>

          </div>
        </div>

        <section class="gifts-view-section">
          <!--Gift 1-->
          <div class="gift-post-div">

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


            <div class="gift-buttons-div">

              <button class="move-gift-button">
                <img class="move-gift-icon" src="public/Icons/moveGiftIcon.png">
              </button>

              <button class="booking-button-gift">
                <span>Reserve</span>
              </button>

              <button class="remove-button">
                <img class="remove-gift-icon" src="public/Icons/removeGiftIcon.png">
              </button>

            </div>


          </div>

          <!--Gift 2-->
          <div class="gift-post-div">

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


            <div class="gift-buttons-div">

              <button class="move-gift-button">
                <img class="move-gift-icon" src="public/Icons/moveGiftIcon.png">
              </button>

              <button class="booking-button-gift">
                <span>Reserve</span>
              </button>

              <button class="remove-button">
                <img class="remove-gift-icon" src="public/Icons/removeGiftIcon.png">
              </button>

            </div>


          </div>

          <!--Gift 3-->
          <div class="gift-post-div">

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


            <div class="gift-buttons-div">

              <button class="move-gift-button">
                <img class="move-gift-icon" src="public/Icons/moveGiftIcon.png">
              </button>

              <button class="booking-button-gift">
                <span>Reserve</span>
              </button>

              <button class="remove-button">
                <img class="remove-gift-icon" src="public/Icons/removeGiftIcon.png">
              </button>

            </div>


          </div>

          <!--Gift 4-->
          <div class="gift-post-div">

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


            <div class="gift-buttons-div">

              <button class="move-gift-button">
                <img class="move-gift-icon" src="public/Icons/moveGiftIcon.png">
              </button>

              <button class="booking-button-gift">
                <span>Reserve</span>
              </button>

              <button class="remove-button">
                <img class="remove-gift-icon" src="public/Icons/removeGiftIcon.png">
              </button>

            </div>


          </div>
        </section>




      </section>

      <div class="list-buttons-div">

        <div class="save-delete-div">
          <button class="save-list-button">
            <span>Save list</span>
          </button>

          <button class="delete-list-button">
            <span>Delete list</span>
          </button>
        </div>

        <div class="date-end-div">
          <img  class="calendar-icon" src="public/Icons/calendarIcon.png">
          <span class="text-calendar">End date:</span>
          <input type="date" placeholder="End date" name="end-date-list" class="end-date-list-input">
        </div>

      </div>













    </div>
  </section>




</template>


<style scoped>

</style>