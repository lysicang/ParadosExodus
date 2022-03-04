<template>
  <div id="app" class="app">
    <div class="header">
      <Slide class="links" :closeOnNavigation="true" width="150">
        <router-link to="/whatson">What's on</router-link>
        <router-link to="/contacts">Contact</router-link>
      </Slide>
      <router-link class="icon" to="/">
        <img class="icon_img" src="./assets/logo.jpg" />
      </router-link>
    </div>
    <router-view />
    <footer class="footer">
      <router-link to="/contacts">Contact</router-link>
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
