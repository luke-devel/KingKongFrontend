import { NextApiRequest, NextApiResponse } from "next";
import Axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  console.log('yeah we got i t', id);
  // if (!req.dat.id || !req.headers.email) {
  //   res.status(405).json("no headers");
  // }
    res.status(253).json("hi");

  const backendRes = await Axios(`${process.env.REQ_URL}/api/query/${id}`, {
    method: "GET",
    headers:{
      Accept: "application/json"
    }
  });
  console.log(backendRes.status);

  backendRes.status === 253 && res.status(253).json(JSON.parse(backendRes.data));
};
