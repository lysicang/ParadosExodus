<template>
  <a v-on:click="handleClick">BUY NOW</a>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_live_51KJQPnKDuYUBhWXst6yLjS2w7JE1YCBOQy7WmDos5yF3LVQfoHfWZ5to1TngYrSmMXlUihNRgqKQP2e7XvoFSVGz005qyMJZ75"
);

export default {
  methods: {
    handleClick: async function () {
      // When the customer clicks on the button, redirect them to Checkout.
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({
        lineItems: [
          {
            price: "price_1KbX5uKDuYUBhWXsoFRltCky", // Replace with the ID of your price
            quantity: 1,
          },
        ],
        mode: "payment",
        successUrl: "<%= BASE_URL %>/#/success",
        cancelUrl: "<%= BASE_URL %>/#/cancel",
      });
    },
  },
};
</script>
