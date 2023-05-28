<script>
import router from "@/router";

export default {
  name: "FriendListView",
  props: {
    wishlist: {
      type: Object,
      required: true
    },
    showList: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    bookGift(giftId, giftBooked) {
      if (giftBooked === 1) {
        alert("Gift already booked!");
        return;
      } else {
        fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/"+ giftId +"/book", {
          method: 'POST',
          headers: {
            "accept": "application/json",
            "Authorization": 'Bearer ' + localStorage.getItem("token"),
            "Content-Type": 'application/json'
          }
        })
          .then(response => {
            if (response.ok) {
              alert("Gift booked successfully!");
            } else {
              throw new Error(response.statusText);
            }
          })
          .catch(error => {
            console.log("error: " + error);
          });
      }
    },
  }
}
</script>

<template>
    <h2 v-if="showList">{{wishlist.name}}</h2>
    <div  v-if="showList" class="description-view-friend-div">
      <p class="description-view-p">{{wishlist.description}}</p>
    </div>

    <h3 v-if="showList">Gifts</h3>

    <!--Sección de productos-->
    <section  v-if="showList" class="gifts-list-friend-section">
      <!--Regalos-->
      <div class="gifts-view-section">

        <div class="message-gifts" v-if="wishlist.gifts === 0">
          <p>There are no gifts in this list.</p>
        </div>

        <!--Gift -->
        <div class="gift-post-list-div" v-for="gift in wishlist.gifts" :key="gift.id" v-else>

          <!--Sección de datos-->
          <div class="gift-post-info-div">

            <div class="gift-post-img-div">
              <img class="gift-post-img" :src="gift.image ? gift.image : 'public/Icons/imageProduct.png'">
            </div>

            <div class="gift-post-data-div">
              <div class="gift-information-div">
                <span>Gift ID: {{gift.id}}</span>
                <span>Product url: <a :href="gift.link" target="_blank">click here</a></span>
                <span>Priority: {{gift.priority}}</span>
                <span>Booked: {{gift.booked}}</span>
                <span v-if="gift.name">Name: {{gift.name}}</span>
                <span v-if="gift.description">Description: {{gift.description}}</span>
                <span v-if="gift.price">Price: {{gift.price}}</span>
              </div>
            </div>
          </div>
          <button class="booking-button-gift-post" :class="{ 'disabled': gift.booked === 1 }" @click="bookGift(gift.id, gift.booked)"> {{ gift.booked === 1 ? 'Reserved' : 'Reserve' }}</button>

        </div>
      </div>
    </section>

    <div v-if="showList" class="date-end-list-div" >
      <span class="text-calendar-span">End date:</span>
      <span class="date-end-span">{{ wishlist.end_date.substring(0, 10).replace(/-/g, '/') }}</span>
    </div>

  <div v-if="!showList">
    <p>Select a list to see</p>
  </div>

</template>