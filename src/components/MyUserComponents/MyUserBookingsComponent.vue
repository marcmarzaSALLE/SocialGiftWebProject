<script>
import router from "@/router";

export default {
  name: "BookingsList",
  data() {
    return {
      bookings: [],
      defaultImage: 'https://balandrau.salle.url.edu/i3/repositoryimages/photo/779bbabc-04ad-4195-8acf-d6e55cf6f243.jpg'
    }
  },
  created() {
    if (localStorage.getItem("token")) {
      this.getBookedGifts()
    } else {
      router.push({ name: "Login" });
    }
  },
  methods: {
    getBookedGifts() {
      let id = localStorage.getItem("idUser")

      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/' + id + '/gifts/reserved', {
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
        .then(data => data.json())
        .then(json => {
          this.bookings = json
          // Hacer una solicitud para obtener información de cada regalo
          this.bookings.forEach((booking, index) => {
            fetch(booking.product_url, {
              headers: {
                "accept": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem("token"),
                "Content-Type": 'application/json'
              }
            })
              .then(response => response.json())
              .then(data => {
                // Asignar la información del regalo a la reserva correspondiente
                this.bookings[index].giftInfo = data
                if (this.bookings[index].giftInfo.photo === null) {
                  this.bookings[index].giftInfo.photo = this.defaultImage;
                }
              })
              .catch(error => {
                console.log("error: " + error)
              })

            // Hacer una solicitud para obtener el usuario de cada regalo
            fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/' + booking.id + '/user', {
              headers: {
                "accept": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem("token"),
                "Content-Type": 'application/json'
              }
            })
              .then(response => response.json())
              .then(data => {
                // Asignar la información del regalo a la reserva correspondiente
                this.bookings[index].userGift = data
              })
              .catch(error => {
                console.log("error: " + error)
              })

            // Hacer una solicitud para obtener la información de la lista de deseos de cada regalo
            fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/" + booking.wishlist_id, {
              headers: {
                "accept": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem("token"),
                "Content-Type": 'application/json'
              }
            })
              .then(response => response.json())
              .then(data => {
                // Asignar la información del regalo a la reserva correspondiente
                this.bookings[index].wishlistInfo = data
              })
              .catch(error => {
                console.log("error: " + error)
              })
          })
        })
        .catch(error => {
          console.log("error: " + error)
        })
    },

    imageError(photo) {
      photo = this.defaultImage;
    },

    unbookGift(giftId) {
      fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/" + giftId + "/book", {
        method: "DELETE",
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            alert("Gift unbooked successfully")
            this.getBookedGifts()
          } else {
            alert("Error unbooking gift")
          }
        })
        .catch(error => {
          console.log("error: " + error)
        })
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
  <section class="section-template-inside">
    <div class="message-section-div" v-if="bookings.length === 0">
      <p>Hey! You haven't booked any gifts yet</p>
    </div>

    <div v-for="booking in bookings" :key="booking.id" class="booking-div">
      <img class="booking-img" alt="NOIMG" :src="booking.giftInfo.photo" @error="imageError(booking.giftInfo.photo)">
      <div class="booking-text">
        <p>ID: {{ booking.id }}</p>
        <p>Product name: {{ booking.giftInfo.name }}</p>
        <p>WishList: {{ truncateText(booking.wishlistInfo.name,30) }}</p>
        <p>Gift for: {{truncateText(booking.userGift.name + " " + booking.userGift.last_name, 20)}}</p>
      </div>
      <button class="unbook-button" @click="unbookGift(booking.id)">Unbook</button>
    </div>
  </section>
</template>