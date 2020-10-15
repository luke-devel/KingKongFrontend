import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Register({ serverPort }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const phoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const onRegister = async (event) => {
    event.preventDefault();
    try {
      let res = await Axios(
        `/api/register`,
        {
          method: "post",
          data: {
            name: name,
            email: email,
            phone: phoneNumber,
            password: password,
          },
        }
      );
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('img/Union.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
        }}
      >
        <Header />
        <div id="register" className="container" style={{ marginTop: 10 }}>
          {/* need to fix for different screen sizes */}
          <form
            className="card"
            style={{ marginLeft: "auto", marginRight: "auto", width: "22em" }}
          >
            <h1>Register</h1>

            <label>Full Name</label>
            <input type="text" name="fullname" onChange={nameChange} />

            <label>Phone Number</label>
            <input type="text" name="phoneno" onChange={phoneNumberChange} />

            <label>Email Address</label>
            <input type="email" name="emailadd" onChange={emailChange} />

            <label>Password</label>
            <input type="password" name="password" onChange={passwordChange} />

            <div
              className="signupbtn"
              style={{ paddingTop: 10 }}
              onClick={onRegister}
            >
              <input type="submit" name="signup" value="Sign Up" />
            </div>

            <div className="twosc" style={{paddingTop: 20}}>
              <a href="/login"style={{fontSize: 24}}>Already have an account?</a>{" "}
              <a className="log" href="/login" style={{border: "2px solid #FFFFFF", paddingTop: 10, paddingBottom: 10, paddingLeft: 30, paddingRight: 30, width: '3em', borderRadius: 5}}>
                Log In
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}