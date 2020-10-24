import { NextApiRequest, NextApiResponse } from "next";
import jwt_decode from "jwt-decode";
import Axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.cookies.usertoken) {
    return res.json({ message: "Opps! An error has occured." });
  } else {
    const decodedToken = jwt_decode(req.cookies.usertoken);
    const authRes = await Axios(`${process.env.REQ_URL}/api/checkauth`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      data: {
        userToken: req.cookies.usertoken,
      },
    });
    if (authRes && authRes.data.message === "Authenticated") {
      return res.json({ message: "Authenticated" });
    } else {
      return res.json({ message: "Opps! Something went wrong." });
    }
  }
};
