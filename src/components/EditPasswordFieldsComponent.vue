<script>
import router from "@/router";

export default {
  name: "EditPasswordFields",
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changePassword() {
      const currentPassword = document.querySelector(".input-password").value;
      const newPassword = document.querySelector(".input-new-password").value;
      const confirmPassword = document.querySelector(".input-confirm-password").value;

      if (currentPassword === "" || newPassword === "" || confirmPassword === "") {
        alert("All fields are required");
      } else if (newPassword !== confirmPassword) {
        alert("Passwords do not match");
      } else if (currentPassword !== this.userInfo.password) {
        alert("Incorrect current password")
      } else {
        const requestBody = {
          password: newPassword
        };

        fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/users", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify(requestBody),
        })
        .then(response => {
          if (response.ok) {
            alert("Password changed successfully");
            window.location.reload();
          } else {
            throw new Error("Failed to change password");
          }
        })
        .catch(error => {
          console.log(error);
        });
      }
    }
  }
}
</script>

<template>
  <h2>Edit password</h2>
  <div class="line3"></div>

  <div class="password-div">
    <span class="password-span">Current password:</span>
    <input type="password" class="input-password" name="password" placeholder="Current password">
  </div>

  <div class="new-password-div">
    <span class="new-password-span">New password:</span>
    <input type="password" class="input-new-password" name="new-password" placeholder="New password">
  </div>

  <div class="confirm-password-div">
    <span class="confirm-password-span">Confirm password:</span>
    <input type="password" class="input-confirm-password" name="confirm-password" placeholder="Confirm password">
  </div>

  <div class="buttons-edit-div2">
    <button class="button-save2" @click="changePassword">Save</button>
  </div>
</template>