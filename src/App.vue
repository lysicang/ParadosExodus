<template>
  <div id="app" class="app">
    <header>
      <Slide
        burgerIcon
        crossIcon
        class="links"
        :closeOnNavigation="true"
        width="150"
      >
        <router-link to="/whatson">What's on</router-link>
        <router-link to="/contacts">Contact</router-link>
      </Slide>
      <router-link class="l" to="/">
        <img class="icon" src="./assets/logo.jpg" />
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
  mounted: function () {
    const bm = document.querySelector(".bm-burger-button");
    bm.style.height = "30px";
    bm.style.top = 0;
    bm.style.left = 0;
    bm.style.position = "relative";
    bm.style.width = "36px";
    bm.style.margin = "0.7rem";
  },
};
</script>
<style lang="scss">
// .bm-burger-button {
//   height: 30px;
//   top: 0;
//   left: 0;
//   position: relative;
//   width: 36px;
//   margin: 0.7rem;
// }
</style>
