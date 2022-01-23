<template>
  <div>
    <Carousel
      :autoplay="true"
      :scrollPerPage="false"
      :loop="true"
      :perPageCustom="[[0, 1]]"
    >
      <Slide v-for="slide in slides" :key="slide.name">
        <h3>
          <router-link :to="'/pay?' + slide.price">{{
            slide.name
          }}</router-link>
        </h3>
        <img :src="image(slide.photo)" />
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { slides } from "../assets/slide.json";

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
