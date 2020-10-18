import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_PRIVATE, {
  apiVersion: "2020-08-27",
});

/**
 * Async Function():
 * Api route to handle creating a Stripe API session for a user.
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{ price: process.env.PRICE_ID_MONTHLY_USD, quantity: 1 }],
    mode: "payment",
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/?cancelled_order=true`,
  });
  res.status(253).json({ session: session.id });
};
