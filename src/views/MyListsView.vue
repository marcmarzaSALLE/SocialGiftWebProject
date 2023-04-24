<template>

  <section class="user-lists-section">

    <!--Sección de listas-->
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
            <button class="editList-button2">Edit list</button>
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
            <button class="editList-button2">Edit list</button>

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
            <button class="editList-button2">Edit list</button>

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
            <button class="editList-button2">Edit list</button>

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
            <button class="editList-button2">Edit list</button>
          </div>
        </div>

      </section>
      <div class="line-div2"></div>

      <button class="create-list-button">+ create list</button>
    </div>

    <!--Lista a editar-->
    <div class="list-view">
      <input type="text" placeholder="Name list" name="name-list" class="name-list-input">
      <input type="text" placeholder="Description" name="description-list" class="description-list-input">

      <!--Sección de productos-->
      <section class="gifts-section">

        <div class="gifts-div">
          <h3>Gifts</h3>
          <div class="add-gift-div">

            <div class="add-gift-button-div">
              <a class="add-gift-button" href="#gifts-products-screen">+ add gift</a>
            </div>

            <!--Sección overlay productos-->
            <div id="gifts-products-screen" class="gifts-products-div">
              <div class="gift-products-main-div">
                <a class="close-button" href="#">&times;</a>

                <!--Parte buscador-->
                <div class="search-bar-div">
                  <div class="search-box-input2">
                    <!--Dropdown-->
                    <div class="dropdown-categories-div">
                      <button class="categories-button">Categories</button>
                      <div class="dropdown-content">
                        <a href="#">Category 1</a>
                        <a href="#">Category 2</a>
                        <a href="#">Category 3</a>
                      </div>
                    </div>

                    <!--Buscador-->
                    <form class="search-box2" method="get">
                      <input class="search2" type="search" placeholder="Look for a gift..." />
                    </form>

                    <!--Botón de búsqueda-->
                    <button class="search-button2" type="submit">
                      <img class="search-icon2" src="public/Icons/searchIcon.png">
                    </button>
                  </div>
                </div>

                <!--Parte de productos-->
                <div class="products-results-div">
                  <h3>Results</h3>
                  <section class="products-section">

                    <!--Producto 1-->
                    <div class="product-div">
                      <div class="product-data-div">
                        <span>Product_Name</span>
                        <span>Description</span>
                        <span>Link</span>
                        <span>Price</span>
                        <span>Is_active</span>
                      </div>

                      <button class="add-product-button">Add</button>
                    </div>

                    <!--Producto 2-->
                    <div class="product-div">
                      <div class="product-data-div">
                        <span>Product_Name</span>
                        <span>Description</span>
                        <span>Link</span>
                        <span>Price</span>
                        <span>Is_active</span>
                      </div>

                      <button class="add-product-button">Add</button>

                    </div>

                    <!--Producto 3-->
                    <div class="product-div">
                      <div class="product-data-div">
                        <span>Product_Name</span>
                        <span>Description</span>
                        <span>Link</span>
                        <span>Price</span>
                        <span>Is_active</span>
                      </div>

                      <button class="add-product-button">Add</button>

                    </div>

                    <!--Producto 4-->
                    <div class="product-div">
                      <div class="product-data-div">
                        <span>Product_Name</span>
                        <span>Description</span>
                        <span>Link</span>
                        <span>Price</span>
                        <span>Is_active</span>
                      </div>

                      <button class="add-product-button">Add</button>

                    </div>

                    <!--Producto 5-->
                    <div class="product-div">
                      <div class="product-data-div">
                        <span>Product_Name</span>
                        <span>Description</span>
                        <span>Link</span>
                        <span>Price</span>
                        <span>Is_active</span>
                      </div>

                      <button class="add-product-button">Add</button>

                    </div>

                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>

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

              <!--Sección overlay mover regalo-->
              <div class="move-gift-button">
                <a class="move-gift-icon-anchor" href="#move-gift-screen"><img class="move-gift-icon" src="public/Icons/moveGiftIcon.png"></a>
              </div>

              <div id="move-gift-screen" class="move-gift-div">
                <div class="move-gift-main-div">
                  <a class="close-button" href="#">&times;</a>
                  <h3>Move to:</h3>
                  <div class="move-gift-bar">

                    <!--Dropdown list to move-->
                    <div class="dropdown-list-div">
                      <button class="list-button">Lists</button>
                      <div class="dropdown-list">
                        <a href="#">List 1</a>
                        <a href="#">List 2</a>
                        <a href="#">List 3</a>
                      </div>
                    </div>

                    <!--Select list-->
                    <input type="text" class="list-moved-input" placeholder="Select list...">
                    <!--Botón de mover-->
                    <button class="move-button">Move</button>

                  </div>
                </div>
              </div>

              <button class="booking-button-gift">Reserve</button>

              <button class="remove-button">
                <img class="remove-gift-icon" src="public/Icons/removeGiftIcon.png">
              </button>

            </div>

          </div>

          <!--Gift 2-->
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

              <!--Sección overlay mover regalo-->
              <div class="move-gift-button">
                <a class="move-gift-icon-anchor" href="#move-gift-screen"><img class="move-gift-icon" src="public/Icons/moveGiftIcon.png"></a>
              </div>

              <div id="move-gift-screen" class="move-gift-div">
                <div class="move-gift-main-div">
                  <a class="close-button" href="#">&times;</a>
                  <h3>Move to:</h3>
                  <div class="move-gift-bar">

                    <!--Dropdown list to move-->
                    <div class="dropdown-list-div">
                      <button class="list-button">Lists</button>
                      <div class="dropdown-list">
                        <a href="#">List 1</a>
                        <a href="#">List 2</a>
                        <a href="#">List 3</a>
                      </div>
                    </div>

                    <!--Select list-->
                    <input type="text" class="list-moved-input" placeholder="Select list...">
                    <!--Botón de mover-->
                    <button class="move-button">Move</button>

                  </div>
                </div>
              </div>

              <button class="booking-button-gift">Reserve</button>

              <button class="remove-button">
                <img class="remove-gift-icon" src="public/Icons/removeGiftIcon.png">
              </button>

            </div>

          </div>

          <!--Gift 3-->
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

              <!--Sección overlay mover regalo-->
              <div class="move-gift-button">
                <a class="move-gift-icon-anchor" href="#move-gift-screen"><img class="move-gift-icon" src="public/Icons/moveGiftIcon.png"></a>
              </div>

              <div id="move-gift-screen" class="move-gift-div">
                <div class="move-gift-main-div">
                  <a class="close-button" href="#">&times;</a>
                  <h3>Move to:</h3>
                  <div class="move-gift-bar">

                    <!--Dropdown list to move-->
                    <div class="dropdown-list-div">
                      <button class="list-button">Lists</button>
                      <div class="dropdown-list">
                        <a href="#">List 1</a>
                        <a href="#">List 2</a>
                        <a href="#">List 3</a>
                      </div>
                    </div>

                    <!--Select list-->
                    <input type="text" class="list-moved-input" placeholder="Select list...">
                    <!--Botón de mover-->
                    <button class="move-button">Move</button>

                  </div>
                </div>
              </div>

              <button class="booking-button-gift">Reserve</button>

              <button class="remove-button">
                <img class="remove-gift-icon" src="public/Icons/removeGiftIcon.png">
              </button>

            </div>

          </div>

          <!--Gift 4-->
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

              <!--Sección overlay mover regalo-->
              <div class="move-gift-button">
                <a class="move-gift-icon-anchor" href="#move-gift-screen"><img class="move-gift-icon" src="public/Icons/moveGiftIcon.png"></a>
              </div>

              <div id="move-gift-screen" class="move-gift-div">
                <div class="move-gift-main-div">
                  <a class="close-button" href="#">&times;</a>
                  <h3>Move to:</h3>
                  <div class="move-gift-bar">

                    <!--Dropdown list to move-->
                    <div class="dropdown-list-div">
                      <button class="list-button">Lists</button>
                      <div class="dropdown-list">
                        <a href="#">List 1</a>
                        <a href="#">List 2</a>
                        <a href="#">List 3</a>
                      </div>
                    </div>

                    <!--Select list-->
                    <input type="text" class="list-moved-input" placeholder="Select list...">
                    <!--Botón de mover-->
                    <button class="move-button">Move</button>

                  </div>
                </div>
              </div>

              <button class="booking-button-gift">Reserve</button>

              <button class="remove-button">
                <img class="remove-gift-icon" src="public/Icons/removeGiftIcon.png">
              </button>

            </div>

          </div>
        </section>

        <!--Sección de botones-->
      </section>
      <div class="list-buttons-div">

        <div class="save-delete-div">
          <button class="save-list-button">
            <span>Save list</span>
          </button>

          <button class="delete-list-button">Delete list</button>
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
<script>
export default {
  name: "MyListView"
}
</script>
<style scoped>

</style>