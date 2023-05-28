<script>
import router from "@/router";

export default {
  name: "AddGift",
  props: {
    wishlist: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      products:[],
      categories:[],
      selectedCategory: null,
      selectedPriority: null,
      searchInput: null,
    };
  },
  created() {
      this.getAllProducts();
      this.getAllCategories();
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

    getProductsBySearch() {
      fetch("https://balandrau.salle.url.edu/i3/mercadoexpress/api/v1/products/search?s=" + this.searchInput, {
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
      this.searchInput = null;
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
    },

    selectCategory(category) {
      this.selectedCategory = category;
      this.searchInput = category.name;
    },

    addGiftToList(product) {
      const priority = window.prompt("Please enter the priority of the gift:\n(1 - High, 2 - Medium, 3 - Low)");

      // Validar y asignar la prioridad ingresada por el usuario
      let giftPriority;
      if (priority === null) {
        return; // El usuario ha cancelado la operación, salir del método
      } else if (priority === "1" || priority === "2" || priority === "3") {
        giftPriority = parseInt(priority);
      } else {
        alert("Invalid priority. Please enter a valid priority \n(1 - High, 2 - Medium, 3 - Low).");
        return; // Salir del método si la prioridad ingresada es inválida
      }

      // Crear el objeto gift
      const gift = {
        wishlist_id: this.wishlist.id,
        product_url: "https://balandrau.salle.url.edu/i3/mercadoexpress/api/v1/products/" + product.id,
        priority: giftPriority
      };

      fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(gift)
      })
      .then(response => {
        if (response.ok) {
          alert("Gift added successfully!");
          this.$emit("gift-added");
        } else {
          alert("Error adding gift. Please try again.");
        }
      })
      .catch(error => {
        console.log("error: " + error)
      })
    },
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
        <a class="close-button" href="#" @click="getAllProducts">&times;</a>

        <!--Parte buscador-->
        <div class="search-bar-div">
          <div class="search-box-gift-input">
            <!--Buscador-->
            <div class="search-box-gift" >
              <!--Dropdown-->
              <div class="dropdown-categories-div">
                <button class="categories-button">Categories</button>
                <div class="dropdown-content">
                  <a class="category-name" v-for="category in categories" :key="category.id" @click="selectCategory(category)">{{category.name}}</a>
                </div>
              </div>

              <input class="search-gift" type="text" v-model="searchInput" placeholder="Look for a gift..."/>
              <!--Botón de búsqueda-->
              <button class="search-button-gift" @click="getProductsBySearch()">
                <img class="search-icon-gift" src="../../../public/Icons/searchIcon.png">
              </button>
            </div>
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
                <span>Link: <a :href="product.link" target="_blank">click here</a></span>
                <span>Price: {{ product.price }}</span>
              </div>

              <button class="add-product-button" @click="addGiftToList(product)">Add</button>
            </div>

          </section>
        </div>
      </div>
    </div>
  </div>
</template>