<script>
import router from "@/router";

export default {
  name: "AddGift",
  data() {
    return {
      products:[],
      categories:[],
    };
  },

  created() {
      this.getAllProducts();
  },

  methods: {
    getAllProducts() {
      fetch("https://balandrau.salle.url.edu/i3/mercadoexpress/api/v1/products", {
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
      .then(data => data.json()) // Convertir la respuesta a JSON
      .then(json => {
        console.log("data: " + json)
        this.products = json // Asignar la lista de deseos a la variable wishlists
      })
      .catch(error => {
        console.log("error: " + error)
      })
    },
    getAllCategories() {
      fetch("https://balandrau.salle.url.edu/i3/mercadoexpress/api/v1/categories", {
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
      .then(data => data.json()) // Convertir la respuesta a JSON
      .then(json => {
        console.log("data: " + json)
        this.categories = json // Asignar la lista de deseos a la variable wishlists
      })
      .catch(error => {
        console.log("error: " + error)
      })
    }
  }

}
</script>

<template>
  <div class="add-gift-div" >
    <div class="add-gift-button-div">
      <a class="add-gift-button" href="#gifts-products-screen">+ add gift</a>
    </div>

    <!--Sección overlay AddGift-->
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
                  <a v-for="category in categories" :key="category.id" href="#">{{category.name}}</a>
                </div>
              </div>

              <input class="search-gift" type="search" placeholder="Look for a gift..." />
              <!--Botón de búsqueda-->
              <button class="search-button-gift" type="submit">
                <img class="search-icon-gift" src="../../../public/Icons/searchIcon.png">
              </button>
            </form>
          </div>
        </div>

        <!--Componentes parte de productos-->
        <div class="products-results-div">
          <h3>Results</h3>
          <section class="products-section">

            <!--Producto -->
            <div  v-for="product in products" :key="product.id" class="product-div">
              <div class="product-data-div">
                <span>Product: {{ product.name }}</span>
                <span>Description: {{ product.description }}</span>
                <span>Link: <a :href="product.link" target="_blank">Click here!</a></span>
                <span>Price: {{ product.price }}</span>
                <span>Acitve: {{ product.isActive }}</span>
              </div>

              <button class="add-product-button">Add</button>
            </div>

          </section>
        </div>
      </div>
    </div>
  </div>
</template>