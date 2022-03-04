<template>
  <div class="content">
    <Carousel
      autoplay
      scrollPerPage
      loop
      :perPageCustom="[
        [0, 1],
        [1000, 1],
        [1024, 3],
      ]"
      autoplayHoverPause
      :paginationPadding="0"
    >
      <Slide v-for="slide in slides" :key="slide.name">
        <img class="carosel_image" :src="image(slide.photo)" />
        <div class="carosel_text">
          <router-link class="cr_l" to="/whatson"> Buy now! </router-link>
        </div>
      </Slide>
    </Carousel>
    <div class="description">{{ description }}</div>
    <div class="members">
      Members:
      <p v-for="member in members" :key="member">{{ member }}</p>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { slides, description, members } from "../assets/content.json";

export default {
  name: "Home",
  data: () => {
    return { slides, description, members };
  },
  components: {
    Carousel,
    Slide,
  },
  methods: {
    image: (path) => require(`../assets/photos/${path}`),
  },
};
</script>
