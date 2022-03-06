<template>
  <div id="app" class="app">
    <header>
      <Slide class="links" :closeOnNavigation="true" width="150">
        <router-link to="/whatson">What's on</router-link>
        <router-link to="/contacts">Contact</router-link>
      </Slide>
      <router-link class="icon" to="/">
        <img class="icon_img" src="./assets/logo.jpg" />
      </router-link>
    </header>
    <router-view />
    <footer class="footer">
      <router-link class="m" to="/contacts">Contact</router-link>
      <a
        class="link"
        href="https://www.instagram.com/parados.exodus/?utm_medium=copy_link&fbclid=IwAR23kbsBspJXvltY1_VosTJXVjrk-q382k6b7616h45aZKKe8G75N-Fcf2g"
      >
        <img class="icon l" src="./assets/icons/ig.png" />
      </a>
      <a
        class="link"
        href="https://www.facebook.com/Parados-Exodus-103039302184087/"
      >
        <img class="icon r" src="./assets/icons/fb.png" />
      </a>
    </footer>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";

export default {
  components: {
    Slide,
  },
};
</script>
