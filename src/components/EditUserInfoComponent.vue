<script>
import router from "@/router";

export default {
    name: "EditUserInfo",
    props: {
        userInfo: {
            type: Object,
            required: true,
        }
    },
}
</script>

<template>
    <div class="user-profile-pic">
        <img class="user-img2" :src="userInfo.image">
        <a class="change-pic-button" href="#change-pic-screen">Profile picture</a>
    </div>

  <!--Sección overlay poner imagen perfil-->
    <div id="change-pic-screen" class="change-pic-div">
        <div class="change-pic-main-div">
            <a class="close-button" href="#">&times;</a>
            <h3>Choose a new profile pic (PNG, JPG):</h3>
            <div class="new-pic-bar">
                <!--Select pic-->
                <input type="file" class="new-pic-input" name="user-pic" placeholder="Update a new pic..." accept="image/png, image/jpg">
                <!--Botón de update-->
                <button class="update-button">Update</button>
            </div>
        </div>
    </div>

    <div class="user-text2">
        <h2 class="user-username">{{ userInfo.name +" "+userInfo.last_name }}</h2>
        <h3 class="user-email">{{ userInfo.email }}</h3>

        <div class="change-password-div">
            <RouterLink to="/EditPassword" class="change-password-button"><h3>Change password</h3></RouterLink>
        </div>
    </div>

</template>