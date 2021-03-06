import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import axios from "axios";
import bcrypt from "bcrypt";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    try {
      try {
        console.log("made it here");

        const hash = await bcrypt.hash(req.body.password, 10);
        axios({
          method: "POST",
          url: `${process.env.REQ_URL}/api/registeruser`,
          headers: {
            fullname: req.body.name,
            email: req.body.email,
            password: hash,
          },
        })
          .then((response) => {
            if (response.data.authToken) {
              res.json({ authToken: response.data.authToken });
            } else {
              res.json({ message: "Opps! Something went wrong." });
            }
          })
          .catch((err) => {
            console.log("we3 here", err);
            if (err.response.status === 409) {
              res.status(409).end();
            }
          });
        // Success returned from Database successfully
      } catch (error) {
        console.log(process.env.REQ_URL);
        console.log("err here", error);
        console.log(`${process.env.REQ_URL}/api/registeruser`);
        error.response.status === 409 && res.status(409);
        res.end();
      }
    } catch (err) {
      console.log(`${process.env.REQ_URL}/api/registeruser`);
      console.log({
        fullname: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      !err.response.status && res.end();
      err && err.response.status === 409 && res.status(409);
      res.end();
    }
  } catch (err) {
    // error
    console.log(err);
    console.log("Error in register API, bad request. Sending res.status(400)");
    res.status(400);
    res.end();
  }
}
