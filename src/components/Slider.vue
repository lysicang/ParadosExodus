<template>
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
    </Slide>
  </Carousel>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import { slides } from "../assets/content.json";

export default {
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
