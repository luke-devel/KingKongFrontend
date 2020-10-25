import Axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2020-08-27",
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.cookies.usertoken) {
    return res.json({ message: "Opps! An error has occured." });
  } else {
    const { id } = req.query;
    const { payment_status } = await stripe.checkout.sessions.retrieve(
      id as string
    );
    if (payment_status === "paid") {
      const addPaidUserRes = await Axios(`${process.env.REQ_URL}/api/checkauth`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        data: {
          userToken: req.cookies.usertoken,
        },
      });
    }
    res.status(200).json({ payment_status });
  }
};
