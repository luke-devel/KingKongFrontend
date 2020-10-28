import { NextApiRequest, NextApiResponse } from "next";
import Axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const backendRes = await Axios(`${process.env.REQ_URL}/api/contact`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
      },
      data: {
        fullname: req.body.fullName,
        email: req.body.email,
        message: req.body.message,
      },
    });
    console.log("backendRes", backendRes);
    if (backendRes && backendRes.data.message === "Success") {
      // success in contact form db row
      res.json({ message: "Success" });
    } else {
      // err in contact form db row
      res.json({ message: "Opps! An error has occured." });
    }
  } catch (error) {
    console.log("the err is here ");
  }
};
