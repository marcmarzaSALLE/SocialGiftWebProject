<script>
import router from "@/router";

export default {
  name: "ListGifts",
  props: {
    gifts: {
      type: Array,
      required: true
    },
    gift: {
      type: Object,
      required: true
    }
  },
  methods:{
    async getGiftsWishlist(){
      const  idList = this.wishlist.id; // Obtener el ID de la lista desde el prop
      for(let i = 0; i < this.wishlist.gifts.length; i++){
        await fetch(this.wishlist.gifts[i].product_url,{
          headers:{
            "Content-Type": 'application/json'
          }
        })
            .then(data => data.json()) // Convertir la respuesta a JSON
            .then(json => {
              console.log("REGALO: " + json.id + " " + json.name + " " + json.price + " " + json.photo + " " + json.link);
              this.gift = json;// Asignar el regalo a la variable gift
              this.gifts.push(this.gift);
            })
            .catch(error => {
              console.log("error: " + error);
            });

      }
    }
  }

}
</script>

<template>
  <!--Gift-->
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

</template>