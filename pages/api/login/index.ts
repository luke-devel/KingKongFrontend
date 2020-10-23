import { NextApiRequest, NextApiResponse } from "next";
import Axios from "axios";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if(!req.headers.email || !req.headers.password){
    res.status(401).json("bad request");
  }
  switch (req.method) {
    case "POST":
      console.log("we posted");
      try {
        Axios(`${process.env.REQ_URL}/api/login`, {
          method: "post",
          headers: {
            email: req.headers.email,
            password: req.headers.password,
          },
        })
          .then((response) => {
            console.log(res.status);
            response.status === 253 && res.status(253).json(response.data); // good res, user is logged in
          })
          .catch((err) => {
            console.log("err", err);
            err.response.status === 404 && res.status(404).json("no email"); // no email exists
            err.response.status === 405 &&
              res.status(405).json("incorrect password"); // wrong pasword
          });
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
