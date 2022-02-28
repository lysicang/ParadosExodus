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
          <router-link class="cr_l" :to="'/pay?' + slide.price">
            Buy now!
          </router-link>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { slides } from "../assets/content.json";

export default {
  name: "Home",
  data: () => {
    return { slides };
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
