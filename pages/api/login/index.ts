import { NextApiRequest, NextApiResponse } from 'next';

import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import Cookie from "js-cookie";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    // console.log(req.body);
    res.json("hi")
}
