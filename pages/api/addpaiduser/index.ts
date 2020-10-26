import { NextApiRequest, NextApiResponse } from "next";
import jwt_decode from "jwt-decode";
import Axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.cookies.usertoken) {
    return res.json({ message: "Opps! An error has occured." });
  } else {
    const decodedToken = jwt_decode(req.cookies.usertoken);
    const addPaidUserRes = await Axios(`${process.env.REQ_URL}/api/addpaiduser`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      data: {
        userToken: req.cookies.usertoken,
      },
    });
    console.log('addPaidUserRes', addPaidUserRes);
    if (addPaidUserRes && addPaidUserRes.data.message === "Success") {
      return res.json({ message: "Success" });
    } else {
      return res.json({ message: "Opps! Something went wrong." });
    }
  }
};
