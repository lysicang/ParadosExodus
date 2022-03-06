<template>
  <div class="content">
    <img src="../assets/photos/whatson.png" />
    <div class="location">{{ location }}</div>
    <div class="performances">
      <div
        class="performance"
        v-for="performance in performances"
        :key="performance.date"
      >
        <div class="performance_date">{{ performance.date }}</div>
        <router-link class="performance_link" :to="'/pay?' + performance.price">
          BUY NOW
        </router-link>
      </div>
    </div>
    <div class="description">{{ playDescription }}</div>
    <div class="lenght">Lenght: {{ lenght }}</div>
    <div class="disclaimer">Disclaimer: {{ disclaimer }}</div>
  </div>
</template>

<script>
import {
  location,
  performances,
  playDescription,
  lenght,
  disclaimer,
} from "../assets/content.json";

export default {
  name: "Home",
  data: () => {
    return {
      location,
      performances,
      playDescription,
      lenght,
      disclaimer,
    };
  },
  methods: {
    image: (path) => require(`../assets/photos/${path}`),
  },
};
</script>
