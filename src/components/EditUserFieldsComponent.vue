<script>
import router from "@/router";

export default {
    name: "EditUserFields",
    props: {
        userInfo: {
            type: Object,
            required: true,
        }
    },
    methods: {
      saveChanges() {
        const nameInput = document.querySelector(".input-name");
        const lastNameInput = document.querySelector(".input-secondname");
        const emailInput = document.querySelector(".input-email");

        // Si los valores estan vacíos, se quedan con el valor anterior
        const newName = nameInput.value.trim() || this.userInfo.name;
        const newLastName = lastNameInput.value.trim() || this.userInfo.last_name;
        const newEmail = emailInput.value.trim() || this.userInfo.email;

        this.userInfo.name = newName;
        this.userInfo.last_name = newLastName;
        this.userInfo.email = newEmail;

        const requestPutBody = {
          name: newName,
          last_name: newLastName,
          email: newEmail
        };

        fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/users", {
         method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(requestPutBody),
         })
        .then(response => {
          if (response.ok) {
            alert("Changes saved successfully");
            localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
            window.location.reload();
          } else {
            throw new Error("Failed to save changes");
          }
        })
        .catch(error => {
          console.log(error);
        });
      },
      deleteAccount() {
        if (confirm("Are you sure you want to delete your account?")) {
          const password = prompt("Please enter your password to delete your account:");

          if (password) {
            const requestBody = {
              password: password
            };

            fetch("https://balandrau.salle.url.edu/i3/socialgift/api/v1/users", {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: JSON.stringify(requestBody)
            })
                .then(response => {
                  if (response.ok) {
                    alert("Account deleted successfully");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userInfo");
                    router.push({ name: "Login" });
                  } else {
                    throw new Error("Failed to delete account");
                  }
                })
                .catch(error => {
                  console.log(error);
                });
          }
        }
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
        <button class="button-save" @click="saveChanges">Save</button>
        <button class="button-delete" @click="deleteAccount">Delete account</button>
    </div>
</template>