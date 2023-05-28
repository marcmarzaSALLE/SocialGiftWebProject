<script>
import router from "@/router";

export default {
  name: "searchFriends",
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      showResults: false,
      friends: [],
    }
  },
  methods: {
    checkIsFriend() {
      const id = localStorage.getItem("idUser")
      fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/"+id+"/friends", {
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(response.statusText);
          }
        })
        .then(data => {
          this.friends = data; // Asignar la lista de amigos a la variable friends
        })
        .catch(error => {
          console.log("Error: " + error);
        });
    },

    isFriend(friendId) {
      return this.friends.some(friend => friend.id === friendId);
    },

    searchFriends() {
      if (this.searchQuery === '') {
        this.searchResults = []; // Vaciar los resultados si la búsqueda está vacía
        this.showResults = false;
        return;
      }

      fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/search?s="+this.searchQuery, {
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(response.statusText);
          }
        })
        .then(data => {
          this.searchResults = data.filter(friend => friend.id !== parseInt(localStorage.getItem("idUser"), 10));
          this.showResults = true;
          this.checkIsFriend();
        })
        .catch(error => {
          console.log("Error: " + error);
        });

    },

    viewFriend(friendId) {
      if (this.isFriend(friendId)) {
        router.push({ name: "friend", params: { id: friendId } });
      } else {
        alert("To see his profile you have to be his friend");
        router.push({ name: "MyUser" }); // Reemplaza "Home" con la ruta correcta de tu página principal
      }
    },

    sendRequest(friendId) {
      fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/" + friendId, {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            alert("Friend request sent");
          } else {
            throw new Error(response.statusText);
          }
        })
        .catch(error => {
          console.log("Error: " + error);
        });
    },

    unfollowFriend(friendId) {
      fetch('https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/'+ friendId, {
        method: 'DELETE',
        headers: {
          "accept": "application/json",
          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          "Content-Type": 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error(response.statusText)
          }
        })
        .catch(error => {
          console.log("error: " + error)
        })
    },

    truncateText(text, maxLength) {
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

  <!-- Buscador de amigos -->
  <div class="search-box-input">
    <form class="search-box" method="get" @submit.prevent="searchFriends">
      <input class="search-input" type="search" placeholder="Look for a friend..." v-model="searchQuery" @input="searchFriends"/>
      <button class="search-button" type="submit">
        <img class="search-icon" src="../../public/Icons/searchIcon.png">
      </button>
    </form>
  </div>


  <!-- Resultados de búsqueda -->
  <div class="search-results-div" :class="{ 'show-results': showResults }" v-if="showResults">
    <h3>Friend search results</h3>

    <nav class="friends-search-results">
      <li v-if="searchResults.length > 0" v-for="friend in searchResults" :key="friend.id" class="friend-search-li">

        <nav class="friend-search-route-link" @click="viewFriend(friend.id)">
          <img class="friend-search-img" :src="friend.image">
          <div class="friend-search-text">
            <p class="friend-search-username">{{"@"+ friend.email.substring(0, friend.email.indexOf('@'))}}</p>
            <p class="friend-search-name">{{truncateText(friend.name+" "+friend.last_name,20)}}</p>
          </div>
        </nav>
        <button class="friend-follow-button" v-if="isFriend(friend.id)">Unfollow</button>
        <button class="friend-follow-button" @click="sendRequest(friend.id)" v-else>Follow</button>
      </li>

      <p v-else class="message-search">There are no results that match the search</p>
    </nav>
  </div>

</template>