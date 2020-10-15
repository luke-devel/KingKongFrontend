import axios from 'axios';
import bcrypt from "bcrypt";

export default async function (req, res) {
  try {
    // console.log(req.body);
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
    // console.log(response); 
    res.status(200);
    res.json('hi')
    res.end();
  } catch (err) {
    console.log("err in api/regiter/index.js sequelize,", err)
    // res.json(JSON.stringify(err))
    res.status(400);
    res.end();
  }
}
