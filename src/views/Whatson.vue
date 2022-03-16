<template>
  <div class="content">
    <img class="wio" src="../assets/photos/whatson.png" />
    <div class="location">{{ location }}</div>
    <div class="performances">
      <a href="https://www.eventbrite.co.uk/e/299014017977">BUY NOW</a>
      <div class="description">
        "It is said some see, circling overhead, not angels but vultures
        instead."
      </div>
      <div class="description">
        The Black Angels are hungry for the old man's flesh, but all Peter can
        think of in his final breath is his wife's lost song. Through their
        differences, this band of punk vultures must recount the couple's story
        of love, life and music before The Man arrives and Peter's fate is
        sealed.
      </div>
      <div class="description">
        Parados, Exodus' debut play is a vibrant and heartfelt storytelling
        experience. The chorus of birds invite the audience into an immersive
        gig theatre space to clap along and bear witness to the story of the
        Angels uprising, and an old man's final memory."
      </div>
      <div class="lenght">Lenght: {{ lenght }}</div>
      <div class="disclaimer">Disclaimer: {{ disclaimer }}</div>
    </div>
  </div>
</template>

<script>
import {
  location,
  performances,
  lenght,
  disclaimer,
} from "../assets/content.json";

export default {
  name: "Home",
  data: () => {
    return {
      location,
      performances,
      lenght,
      disclaimer,
    };
  },
  methods: {
    image: (path) => require(`../assets/photos/${path}`),
  },
};
</script>
