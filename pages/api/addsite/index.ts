import { NextApiRequest, NextApiResponse } from "next";
import Axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  // console.log(req.headers);

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
      console.log("we posted");
      try {
        Axios(`${process.env.REQ_URL}/api/addsite`, {
          method: "post",
          headers: {
            serverdescription: req.headers.serverdescription,
            serveraddress: req.headers.serveraddress,
            serverport: req.headers.serverport,
            serverusername: req.headers.serverusername,
            serverpassword: req.headers.serverpassword,
            token: req.headers.token,
          },
        })
          .then((response) => {
            console.log("response, ", response.status);
            response.status === 253 && res.status(253).json("appended");
            response.status === 250 && res.status(250).json("created");
          })
          .catch((err) => {
            console.log("err", err);
            // err.response.status === 404 && res.status(404).json("no email"); // no email exists
            // err.response.status === 405 &&
            //   res.status(405).json("incorrect password"); // wrong pasword
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
