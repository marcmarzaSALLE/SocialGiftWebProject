<script>
export default {
  name: "EditUserInfo",
  props: {
    userInfo: {
      type: Object,
      required: true,
    }
  },
  methods: {
    async updateImage() {
      const url = 'https://balandrau.salle.url.edu/i3/repositoryimages/uploadfile';
      const fileInput = document.querySelector(".new-photo-input");
      const file = fileInput.files[0];

      const formData = new FormData();
      formData.append('myFile', file);

      try {
        const response = await fetch(url, {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          const responseData = await response.json();
          this.userInfo.image = responseData.data.url;
          this.updateImageSocialGift();
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },

    updateImageSocialGift(){
      const requestPutBody = {
        image: this.userInfo.image
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
            localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
            window.location.reload();
          } else {
            throw new Error("Failed to save changes");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>

<template>
  <section class="user-info-container2">
    <div class="user-profile-photo">
      <img class="user-img2" :src="userInfo.image">
      <a class="change-photo-button" href="#change-photo-screen">Profile picture</a>
    </div>

    <!--Sección overlay poner imagen perfil-->
    <div id="change-photo-screen" class="change-photo-div">
      <div class="change-photo-main-div">
        <a class="close-button" href="#">&times;</a>
        <h3>Choose a new profile pic (PNG, JPG):</h3>
        <div class="new-photo-bar">
          <!--Select pic-->
          <input type="file" class="new-photo-input" name="user-pic" placeholder="Update a new pic..."
                 accept="image/png, image/jpeg, image/jpg">
          <!--Botón de update-->
          <button class="update-button" @click="updateImage">Update</button>
        </div>
      </div>
    </div>

    <div class="user-data2">
      <span class="user-username2">{{ userInfo.name +" "+userInfo.last_name }}</span>
      <span class="user-email2">{{ userInfo.email }}</span>

      <div class="change-password-div">
        <RouterLink to="/EditPassword" class="change-password-button"><h3>Change password</h3></RouterLink>
      </div>
    </div>
</section>
</template>
