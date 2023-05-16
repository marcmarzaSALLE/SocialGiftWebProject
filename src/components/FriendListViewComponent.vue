<script>
import router from "@/router";

export default {
  name: "FriendListView",
}
</script>

<template>
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
      </section>
    </section>

    <div class="date-end-list-div">
      <span class="text-calendar-span">End date:</span>
      <span class="date-end-span">xx/xx/xx</span>
    </div>
  </div>
</template>