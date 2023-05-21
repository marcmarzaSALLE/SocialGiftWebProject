<script>
import router from "@/router";

export default {
    name: "EditUserFields",
    props: {
        userInfo: {
            type: Object,
            required: true,
        }
    }
}
</script>

<template>
    <h2>Edit fields</h2>
    <div class="line3"></div>

    <div class="name-div">
        <span class="name-span">Name:</span>
        <input type="text" class="input-name" name="name" :placeholder="userInfo.name">

    </div>

    <div class="secondname-div">
        <span class="secondname-span">Second name:</span>
        <input type="text" class="input-secondname" name="name" :placeholder="userInfo.last_name">
    </div>

    <div class="email-div">
        <span class="email-span">Email:</span>
        <input type="text" class="input-email" name="email" :placeholder="userInfo.email">
    </div>

    <div class="username-div">
        <span class="username-span">Username:</span>
        <input type="text" class="input-username" name="username" placeholder="username">
    </div>

    <div class="buttons-edit-div">
        <button class="button-save">Save</button>
        <button class="button-delete">Delete account</button>
    </div>


</template>