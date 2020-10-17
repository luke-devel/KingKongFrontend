import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' })
}