import { NextApiRequest, NextApiResponse } from "next";
import jwt_decode from "jwt-decode";
import Axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.cookies.usertoken) {
    res.json({ message: "Opps! An error has occured." });
  } else {
    try {
      const decodedToken = jwt_decode(req.cookies.usertoken);
      const backendRes = await Axios(
        `${process.env.REQ_URL}/api/query/${decodedToken.sub}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          data: {
            userToken: req.cookies.usertoken,
          },
        }
      );
      backendRes.status === 253 && res.json({ rowId: backendRes.data.rowId, data: backendRes.data.data });
    } catch (error) {
      res.json({ message: "No sites present." });

    }
  }
};
