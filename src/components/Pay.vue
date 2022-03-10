<template>
  <a v-on:click="handleClick">BUY NOW</a>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("");
export default {
  name: "Pay",
  methods: {
    handleClick: async function () {
      // When the customer clicks on the button, redirect them to Checkout.
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({
        lineItems: [
          {
            price: "", // Replace with the ID of your price
            quantity: 1,
          },
        ],
        mode: "payment",
        successUrl: "https://paradosexodus.pages.dev/#/success",
        cancelUrl: "https://paradosexodus.pages.dev/#/cancel",
      });
    },
  },
};
</script>
