<script>
import router from "@/router";

export default {
  name: "ListEdit",
  created() {
    if (localStorage.getItem("token")) {
      console.log("ID LISTA: " + localStorage.getItem("idList"))
      this.getWishlistInfo()
    } else {
      router.push({ name: "Login" });
    }
  },
  methods: {
    getWishlistInfo() {
      let idList = localStorage.getItem("idList")
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/' + idList, {
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
        .then(data => data.json()) // Convertir la respuesta a JSON
        .then(json => {
          console.log("data: " + json)
          this.wishlist = json // Asignar la lista de deseos a la variable wishlist
        })
        .catch(error => {
          console.log("error: " + error)
        })
    }
  }
}
</script>

<template>

  <!-- Información lista -->
  <div class="list-view-info">
    <input type="text" placeholder="{{wishlist.name}}" name="name-list" class="name-list-input">
    <input type="text" placeholder="{{wishlist.description}}" name="description-list" class="description-list-input">
  </div>

  <!--Componente sección de productos-->
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
              <div class="search-box-gift-input">
                <!--Buscador-->
                <form class="search-box-gift" method="get">
                  <!--Dropdown-->
                  <div class="dropdown-categories-div">
                    <button class="categories-button">Categories</button>
                    <div class="dropdown-content">
                      <a href="#">Category 1</a>
                      <a href="#">Category 2</a>
                      <a href="#">Category 3</a>
                    </div>
                  </div>

                  <input class="search-gift" type="search" placeholder="Look for a gift..." />
                  <!--Botón de búsqueda-->
                  <button class="search-button-gift" type="submit">
                    <img class="search-icon-gift" src="public/Icons/searchIcon.png">
                  </button>
                </form>
              </div>
            </div>

            <!--Componentes parte de productos-->
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

          <button class="remove-button">
            <img class="remove-gift-icon" src="public/Icons/removeGiftIcon.png">
          </button>
        </div>
      </div>
    </section>

  </section>

  <!--Sección de botones-->
  <div class="list-buttons-div">

    <div class="save-delete-div">
      <button class="save-list-button">Save list</button>
      <button class="delete-list-button">Delete list</button>
    </div>

    <div class="date-end-div">
      <span class="text-calendar">End date:</span>
      <input type="date" placeholder="End date" name="end-date-list" class="end-date-list-input">
    </div>
  </div>

</template>