import axios from 'axios';
import bcrypt from "bcrypt";

export default async function (req, res) {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const response = await axios({
      method: "POST",
      url: `${process.env.REQ_URL}/registeruser`,
      headers: {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: hash,
      },
    });
    console.log(response.status );
    // Success returned from Database
    response.status === 253 ?
      res.status(253) : res.status(400)
    res.end();
  } catch (err) {
    // error
    console.log("err in api/regiter/index.js sequelize,", err)
    res.status(400);
    res.end();
  }
}
