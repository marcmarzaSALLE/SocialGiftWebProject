<script>
export default {
  name: "SearchUserComponent",
  methods: {
    searchFriend() {
      var input = document.getElementById(".search-input").value;
      if (input.trim() === "") {
        alert("Please enter a valid username");
        return false;
      } else {
        return true;
      }
    }
  }
}
</script>
<template>
  <div className="search-box-input">
    <form className="search-box" method="get">
      <input className="search-input" type="search" placeholder="Look for a friend..."/>
      <button className="search-button" type="submit" @click="searchFriend">
        <img className="search-icon" src="public/Icons/searchIcon.png">
      </button>
    </form>
  </div>
</template>


<style scoped>

</style>