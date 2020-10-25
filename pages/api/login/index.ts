import { NextApiRequest, NextApiResponse } from "next";
import Axios from "axios";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if(!req.body.email || !req.body.password){
    return res.status(401).json("bad request");
  }
  switch (req.method) {
    case "POST":
      console.log("we posted");
      try {
        Axios(`${process.env.REQ_URL}/api/login`, {
          method: "POST",
          data: {
            email: req.body.email,
            password: req.body.password,
          },
        })
          .then((response) => {
            console.log(response.data);
            if(response.data.authToken){
              res.json({ authToken: response.data.authToken });
            }
            else{
              res.json({ message: "Opps! Something went wrong." });
            }
          })
          .catch((err) => {
            console.log("err");
            return res.json({ message: "Opps! Something went wrong." });
          });
      } catch (error) {
        console.log("heres the err", error);
        res.json({ message: "Opps! Something went wrong." });
      }
      break;
    default:
      res.end("you need to post");
      break;
  }
}
