<template>
  <div>
    <h3>Payment</h3>
    <button v-on:click="handleClick">Pay</button>
  </div>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KJQPnKDuYUBhWXs9HFLuy8XeMxOV7WqG00k6BoLMDEyg2ivltkbOaxCmJ8piiAv49b89uMVpokEDsEBhznbQlVI00lYrmLCEL"
);

export default {
  name: "Pay",
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
        successUrl: "https://example.com/success",
        cancelUrl: "https://example.com/cancel",
      });
    },
  },
};
</script>
