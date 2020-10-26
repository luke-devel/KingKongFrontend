import { NextApiRequest, NextApiResponse } from "next";
import Axios from "axios";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      try {
        const letsResponse = await Axios(`${process.env.REQ_URL}/api/addbackup`, {
          method: "POST",
          data: {
            serverRowID: req.body.serverRowID,
            ftpListCount: req.body.ftpListCount,
            userToken: req.cookies.usertoken
          },
        });
        if (letsResponse.data.message === "Success") {
          res.json({ message: "Success" });
        } else {
          res.json({ message: "Opps! Something went wrong" });
        }
      } catch (error) {
        console.log("heres the err");
        res.json({ message: "Opps! Something went wrong" });
    }
      break;
    default:
      res.end("you need to post");
      break;
  }
}
