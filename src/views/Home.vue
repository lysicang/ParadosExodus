<template>
  <div class="content">
    <Carousel
      :autoplay="true"
      :scrollPerPage="false"
      :loop="true"
      :perPageCustom="[[0, 1]]"
    >
      <Slide v-for="slide in slides" :key="slide.name">
        <router-link :to="'/pay?' + slide.price">
          <img class="carosel_image" :src="image(slide.photo)" />
        </router-link>
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
