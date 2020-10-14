import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Register() {
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
  const onRegister = (event) => {
    event.preventDefault();
    console.log(name, phoneNumber, email, password);
    // Axios("http://localhost:3000/api/register", {
    //   method: "post",
    //   data: {
    //     name: name,
    //     username: username,
    //     email: email,
    //     password: password,
    //   },
    // })
    console.log('hello world');
  }
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
        <div id="register" className="container" style={{marginTop: 10}}>
          {/* need to fix for different screen sizes */}
          <form className="card" style={{marginLeft: 'auto', marginRight: 'auto', width: "25em"}}> 
            <h1>Register</h1>

            <label>Full Name</label>
            <input type="text" name="fullname" onChange={nameChange}/>

            <label>Phone Number</label>
            <input type="text" name="phoneno" onChange={phoneNumberChange}/>

            <label>Email Address</label>
            <input type="email" name="emailadd"  onChange={emailChange}/>

            <label>Password</label>
            <input type="password" name="password" onChange={passwordChange}/>

            <div className="signupbtn" style={{paddingTop: 10}} onClick={onRegister}>
              <input type="submit" name="signup" value="Sign Up" />
            </div>

            <div className="twosc">
              <a href="#">Already have an account?</a>{" "}
              <a className="log" href="#">
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
