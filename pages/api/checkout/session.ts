import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_PRIVATE, {
  apiVersion: "2020-08-27",
});
console.log(
  "in session, pub, priv",
  process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
  process.env.STRIPE_SECRET_KEY_PRIVATE
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const stripe = await stripePromise;

  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: process.env.PRICE_ID_MONTHLY_USD, quantity: 1 }],
    mode: "subscription",
    successUrl: `${process.env.PUB_HOST_NAME}/checkout/pending?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: `${process.env.PUB_HOST_NAME}/pricing`,
  });

  res.status(200).json({ hello: "world" });
};
