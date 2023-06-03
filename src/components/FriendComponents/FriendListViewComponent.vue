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

    truncateText(text, maxLength) { // Acorta el texto
      if (text.length <= maxLength) {
        return text;
      } else {
        return text.substring(0, maxLength) + '...';
      }
    },
  }
}
</script>

<template>
    <h2 v-if="showList" class="name-view-friend-div">{{wishlist.name}}</h2>
    <div  v-if="showList" class="description-view-friend-div">
      <p class="description-view-p">{{wishlist.description}}</p>
    </div>

    <h3 v-if="showList">Gifts</h3>

    <!--Sección de productos-->
    <section v-if="showList" class="gifts-list-friend-section">
      <section class="gifts-list-friend-section-inside">
        <div class="message-gifts"  v-if="wishlist.gifts.length === 0">
          <p>There are no gifts in this list.</p>
        </div>

          <!--Gift -->
          <div class="gift-post-div" v-for="gift in wishlist.gifts" :key="gift.id" v-else>
            <!--Sección de datos-->
            <img class="gift-img" :src="gift.image ? gift.image : 'public/Icons/imageProduct.png'">

            <div class="gift-data-div">
              <span class="gift-info-text">Gift ID: {{gift.id}}</span>
              <span class="gift-info-text">Product url: <a :href="gift.link" target="_blank">click here</a></span>

              <span class="gift-info-text" v-if="gift.name">Name: {{gift.name}}</span>
              <span class="gift-info-text" v-if="gift.description">Description: {{truncateText(gift.description, 60)}}</span>
              <span class="gift-info-text" v-if="gift.price">Price: {{gift.price}}</span>
              <span class="gift-info-text" v-if="gift.priority === 1">Priority: high</span>
              <span class="gift-info-text" v-if="gift.priority === 2">Priority: medium</span>
              <span class="gift-info-text" v-if="gift.priority === 3">Priority: low</span>

              <span class="gift-info-text" v-if="gift.booked === 1">This gift is booked</span>
              <span class="gift-info-text" v-if="gift.booked === 0">This gift is not booked</span>
            </div>

            <button class="booking-button-gift-post" :class="{ 'disabled': gift.booked === 1 }" @click="bookGift(gift.id, gift.booked)"> {{ gift.booked === 1 ? 'Reserved' : 'Reserve' }}</button>
          </div>
      </section>
    </section>
    <div v-if="showList" class="date-end-list-div" >
      <span class="text-calendar-span">End date:</span>
      <span class="date-end-span">{{ wishlist.end_date.substring(0, 10).replace(/-/g, '/') }}</span>
    </div>

  <div v-if="!showList">
    <p>Select a list to see</p>
  </div>

</template>