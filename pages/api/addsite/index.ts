import { NextApiRequest, NextApiResponse } from "next";
import Axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (
    !req.body.servertype ||
    !req.body.serveraddress ||
    !req.body.serverport ||
    !req.body.serverusername ||
    !req.body.serverpassword ||
    !req.body.serverdescription
  ) {
    return res.json("Oops! An error has occured.");
  }
  switch (req.method) {
    case "POST":
      if (req.body.servertype === "ftp" || req.body.servertype === "sftp") {
        try {
          const letsResponse = await Axios(
            `${process.env.REQ_URL}/api/addsite`,
            {
              method: "POST",
              data: {
                servertype: req.body.servertype,
                serverdescription: req.body.serverdescription,
                serveraddress: req.body.serveraddress,
                serverport: req.body.serverport,
                serverusername: req.body.serverusername,
                serverpassword: req.body.serverpassword,
                token: req.cookies.usertoken,
              },
            }
          );
          if (letsResponse.data.message === "Success") {
            res.json({ message: "Success" });
          } else {
            res.json({ message: "Opps! Something went wrong" });
          }
        } catch (error) {
          console.log("heres the err", error);
          return res.json("Oops! An error has occured.");
        }
      } else {
        return res.json("Oops! An error has occured.");
      }

      break;
    default:
      res.end("you need to post");
      break;
  }
}
