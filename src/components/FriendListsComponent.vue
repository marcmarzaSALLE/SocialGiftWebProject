<script>
import router from "@/router";

export default {
  name: "FriendLists",
}
</script>

<template>
  <div class="friend-lists-div">
    <h2>Lists</h2>
    <div class="line2"></div>
    <section class="lists-section">
      <section class="list-section-inside">
        <!--Lista 1-->
        <div class="list-friend-div">
          <p>List name</p>
          <div class="description-list-friend-div"><p>Description</p></div>
          <div class="dates-friend-list">
            <p>Creation: xx/xx/xx</p>
            <p>Ends: xx/xx/xx</p>
          </div>
        </div>
      </section>
    </section>
    <div class="line2"></div>
  </div>
</template>