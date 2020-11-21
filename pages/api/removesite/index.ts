import { NextApiRequest, NextApiResponse } from "next";
import jwt_decode from "jwt-decode";
import Axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.cookies.usertoken) {
    res.json({ message: "Opps! An error has occured." });
  } else {
    try {
      const decodedToken = jwt_decode(req.cookies.usertoken);
      const backendRes = await Axios(`${process.env.REQ_URL}/api/removesite`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        data: {
          serverRowID: req.body.serverRowID,
          userToken: req.cookies.usertoken,
        },
      });
      backendRes.data === 'Success' && res.json({ message: "Success" });
    } catch (error) {
      console.log(error);
      res.json({ message: "No sites present." });
    }
  }
};
