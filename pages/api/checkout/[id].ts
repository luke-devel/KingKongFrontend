import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: "2020-08-27",
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const {payment_status} = await stripe.checkout.sessions.retrieve(id as string);
  console.log(payment_status);
  res.status(200).json({ payment_status });
};
