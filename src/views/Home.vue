<template>
  <div class="content">
    <Slider />
    <div class="description">{{ description }}</div>
    <p class="member">Members</p>
    <div class="members">
      <p v-for="member in members" :key="member">{{ member }}</p>
    </div>
    <img class="actors" src="../assets/photos/actors.jpg" />
  </div>
</template>

<script>
import { description, members } from "../assets/content.json";
import Slider from "../components/Slider.vue";

export default {
  name: "Home",
  data: () => {
    return { description, members };
  },
  components: { Slider },
};
</script>
