import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      try {
        let res = await Axios(`/api/register`, {
          method: "post",
          data: {
            name: name,
            email: email,
            phone: phoneNumber,
            password: password,
          },
        });
        console.log(res.status);
        res.status === 253 && router.push("/checkout");
      } catch (error) {
        throw error.response.status;
      }
    } catch (error) {
      // Duplicate email
      if (error === 409) {
        console.log("duplicate email");
        handleClickOpen();
      } else {
        console.log("Other Error");
        console.log(`Error: ${error}`);
      }
    }
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "#212121",
            boxShadow:
              "-25px -20px 300px rgba(44, 44, 44, 0.5), 10px 10px 22px rgba(28, 26, 26, 0.5)",
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ color: "white", fontSize: "" }}
        >
          {"Your email has already been registered."}
        </DialogTitle>
        <DialogActions style={{ justifyContent: "center" }}>
          <a
            className="log"
            href="/login"
            style={{
              border: "2px solid #FFFFFF",
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 30,
              paddingRight: 30,
              marginBottom: 20,
              width: "3em",
              borderRadius: 5,
            }}
          >
            Log In
          </a>
        </DialogActions>
      </Dialog>
      <div
        style={{
          backgroundImage: `url('img/Union.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
        }}
      >
        <Header />
        <div id="register" className="container">
          {/* need to fix for different screen sizes */}
          <form
            className="card"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "25em",
              paddingTop: 10,
            }}
          >
            <h1 style={{ textAlign: "center" }}>Register</h1>

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

            <div className="twosc" style={{ paddingTop: 20 }}>
              <a href="/login" style={{ fontSize: 24 }}>
                Already have an account?
              </a>{" "}
              <a
                className="log"
                href="/login"
                style={{
                  border: "2px solid #FFFFFF",
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 30,
                  paddingRight: 30,
                  width: "3em",
                  borderRadius: 5,
                }}
              >
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
