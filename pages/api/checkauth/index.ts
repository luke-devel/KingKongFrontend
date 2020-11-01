import { NextApiRequest, NextApiResponse } from "next";
import jwt_decode from "jwt-decode";
import Axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.cookies.usertoken) {
    return res.json({ message: "Opps! An error has occured." });
  } else {
    try {
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
        if (req.body.checkMember === "true") {
          // user page, check for member status
          const checkPaidRes = await Axios(
            `${process.env.REQ_URL}/api/checkpaiduser`,
            {
              method: "POST",
              headers: {
                Accept: "application/json",
              },
              data: {
                userToken: req.cookies.usertoken,
              },
            }
          );
          if (checkPaidRes.data.message === "Authenticated Paid Member") {
            return res.json({ message: "Authenticated Paid Member" });
          } else {
            return res.json({ message: "Opps! Something went wrong." });
          }
        } else if (req.body.checkAdmin === "true") {
          // admin page, check for admin status
          const checkPaidRes = await Axios(
            `${process.env.REQ_URL}/api/checkadmin`,
            {
              method: "POST",
              headers: {
                Accept: "application/json",
              },
              data: {
                userToken: req.cookies.usertoken,
              },
            }
          );
          if (checkPaidRes.data.message === "Authenticated") {
            return res.json({ message: "Authenticated" });
          } else {
            return res.json({ message: "Opps! Something went wrong." });
          }
        } else {
          // Authed, but not paid user
          return res.json({ message: "Authenticated" });
        }
      } else {
        return res.json({ message: "Opps! Something went wrong." });
      }
      if (req.body.checkMember === "true") {
      }
    } catch (error) {
      console.log("Error in checkauth api route: ", error);
      return res.json({ message: "Opps! Something went wrong." });
    }
  }
};
