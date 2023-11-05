const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51O8gw8SJ1VpRftu2ML0itXL3bvDWKsdt3QvdkbYlBiJhmRmTKNiquedgGHikOJxg7t8Monn2t7bYSlShs526EqfG00FTpLTNMY');

router.post('/create-payment-intent', async (req, res) => {
    const { amount, currency } = req.body;

    
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
      });
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  module.exports = router;