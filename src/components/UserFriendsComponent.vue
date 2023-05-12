<script>
import router from "@/router";

export default {
  name: "FriendsList",
}
</script>

<template>
  <h2>Friends</h2>
  <div class="line1"></div>
  <section class="section-template">
    <section class="section-template-inside">

      <!--Amigo 1-->
      <div class="friend-div">
        <Router-link class="friend-route-link" to="/friend">
          <img class="friend-img" src="public/Icons/imageUserPic.png">
          <div class="friend-text">
            <p class="friend-username">username</p>
            <p class="friend-name">Firstname Secondname</p>
          </div>
        </Router-link>
        <button class="friend-button">Unfollow</button>
      </div>

      <!--Amigo 2-->
      <div class="friend-div">
        <Router-link class="friend-route-link" to="/friend">
          <img class="friend-img" src="public/Icons/imageUserPic.png">
          <div class="friend-text">
            <p class="friend-username">username</p>
            <p class="friend-name">Firstname Secondname</p>
          </div>
        </Router-link>
        <button class="friend-button">Unfollow</button>
      </div>

      <!--Amigo 3-->
      <div class="friend-div">
        <Router-link class="friend-route-link" to="/friend">
          <img class="friend-img" src="public/Icons/imageUserPic.png">
          <div class="friend-text">
            <p class="friend-username">username</p>
            <p class="friend-name">Firstname Secondname</p>
          </div>
        </Router-link>
        <button class="friend-button">Unfollow</button>
      </div>

      <!--Amigo 4-->
      <div class="friend-div">
        <Router-link class="friend-route-link" to="/friend">
          <img class="friend-img" src="public/Icons/imageUserPic.png">
          <div class="friend-text">
            <p class="friend-username">username</p>
            <p class="friend-name">Firstname Secondname</p>
          </div>
        </Router-link>
        <button class="friend-button">Unfollow</button>
      </div>

      <!--Amigo 5-->
      <div class="friend-div">
        <Router-link class="friend-route-link" to="/friend">
          <img class="friend-img" src="public/Icons/imageUserPic.png">
          <div class="friend-text">
            <p class="friend-username">username</p>
            <p class="friend-name">Firstname Secondname</p>
          </div>
        </Router-link>
        <button class="friend-button">Unfollow</button>
      </div>
    </section>
  </section>
  <div class="line1"></div>
</template>