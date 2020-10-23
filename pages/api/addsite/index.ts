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
              token: req.headers.token,
            },
          }
        );
        console.log(letsResponse.status);
        if(letsResponse.status === 253){
          res.status(253).end();
        }
      } catch (error) {
        console.log("heres the err", error);
        res.status(401).json("bad request");
      }

      break;
    default:
      res.end("you need to post");
      break;
  }
}
