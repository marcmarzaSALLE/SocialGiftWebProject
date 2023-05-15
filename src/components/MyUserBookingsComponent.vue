<script>
import router from "@/router";

export default {
  name: "BookingsList",
  data() {
    return{
      bookings: [],
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
        console.log(id)
        fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/'+ id + '/gifts/reserved',  {
          headers: {
            "accept": "application/json",
            "Authorization": 'Bearer ' + localStorage.getItem("token"),
            "Content-Type": 'application/json'
          }
        })
        .then(data => data.json()) // Convertir la respuesta a JSON
        .then(json => {
          this.bookings = json // Asignar la lista de reservas a la variable bookings
          // Hacer una solicitud para obtener información de cada regalo
          this.bookings.forEach((booking, index) => {
            fetch(booking.product_url, {
              headers: {
                "Content-Type": 'application/json'
              }
            })
            .then(response => response.json())
            .then(data => {
              // Asignar la información del regalo a la reserva correspondiente
              this.bookings[index].giftInfo = data
              console.log("ID DEL PRODUCTO: " + this.bookings[index].giftInfo.name)
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
          })
        })
        .catch(error => {
          console.log("error: " + error)
        })
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
      <img class="booking-img" src="booking.giftInfo.photo">
      <div class="booking-text">
        <p>Gift_ID: {{ booking.id }}</p>
        <p>Product name: {{ booking.giftInfo.name }}</p>
        <p>Priority: {{ booking.priority }}</p>
        <p>WishList_ID: {{ booking.wishlist_id }}</p>
        <p>Friend_id: {{booking.userGift.name + " " + booking.userGift.last_name}}</p>
      </div>
      <button class="unbook-button">Unbook</button>
    </div>
  </section>
</template>