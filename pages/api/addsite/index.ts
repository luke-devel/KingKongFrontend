import { NextApiRequest, NextApiResponse } from "next";
import Axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (
    !req.headers.serveraddress ||
    !req.headers.serverport ||
    !req.headers.serverusername ||
    !req.headers.serverpassword ||
    !req.headers.serverdescription
  ) {
    res.status(401).json("bad request");
  }
  switch (req.method) {
    case "POST":
      try {
        const letsResponse = await Axios(
          `${process.env.REQ_URL}/api/addsite`,
          {
            method: "POST",
            headers: {
              serverdescription: req.headers.serverdescription,
              serveraddress: req.headers.serveraddress,
              serverport: req.headers.serverport,
              serverusername: req.headers.serverusername,
              serverpassword: req.headers.serverpassword,
              token: req.cookies.usertoken,
            },
          }
        );
        if(letsResponse.data.message === 'Success'){
          res.json({ message: "Success" });
        }
        else{
          res.json({ message: "Opps! Something went wrong" });
        }
      } catch (error) {
        console.log("heres the err");
        res.status(401).json("bad request");
      }

      break;
    default:
      res.end("you need to post");
      break;
  }
}
