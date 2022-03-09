<template>
  <a v-on:click="handleClick">BUY NOW</a>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KJQPnKDuYUBhWXs9HFLuy8XeMxOV7WqG00k6BoLMDEyg2ivltkbOaxCmJ8piiAv49b89uMVpokEDsEBhznbQlVI00lYrmLCEL"
);

export default {
  methods: {
    handleClick: async function () {
      // When the customer clicks on the button, redirect them to Checkout.
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({
        lineItems: [
          {
            price: "price_1KJQR4KDuYUBhWXszLPFFQfU", // Replace with the ID of your price
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
