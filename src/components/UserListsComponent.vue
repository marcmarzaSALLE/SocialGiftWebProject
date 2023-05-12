<script>
import router from "@/router";

export default {
  name: "UserLists",
}
</script>

<template>
  <h2>Lists</h2>
  <div class="line1"></div>
  <section class="section-template">
    <section class="section-template-inside">
      <!--Lista 1-->
      <div class="list-div">
        <p>List name</p>
        <div class="description-list-div"><p>Description</p></div>
        <div class="dates-list">
          <p>Creation: xx/xx/xx</p>
          <p>Ends: xx/xx/xx</p>
        </div>

        <div class="editList-button-div">
          <RouterLink class="editList-button" to="/MyLists">Edit list</RouterLink>
        </div>
      </div>

      <!--Lista 2-->
      <div class="list-div">
        <p>List name</p>
        <div class="description-list-div"><p>Description</p></div>
        <div class="dates-list">
          <p>Creation: xx/xx/xx</p>
          <p>Ends: xx/xx/xx</p>
        </div>

        <div class="editList-button-div">
          <RouterLink class="editList-button" to="/MyLists">Edit list</RouterLink>
        </div>
      </div>

      <!--Lista 3-->
      <div class="list-div">
        <p>List name</p>
        <div class="description-list-div"><p>Description</p></div>
        <div class="dates-list">
          <p>Creation: xx/xx/xx</p>
          <p>Ends: xx/xx/xx</p>
        </div>

        <div class="editList-button-div">
          <RouterLink class="editList-button" to="/MyLists">Edit list</RouterLink>
        </div>
      </div>

      <!--Lista 4-->
      <div class="list-div">
        <p>List name</p>
        <div class="description-list-div"><p>Description</p></div>
        <div class="dates-list">
          <p>Creation: xx/xx/xx</p>
          <p>Ends: xx/xx/xx</p>
        </div>

        <div class="editList-button-div">
          <RouterLink class="editList-button" to="/MyLists">Edit list</RouterLink>
        </div>
      </div>
    </section>

  </section>
  <div class="line1"></div>
</template>