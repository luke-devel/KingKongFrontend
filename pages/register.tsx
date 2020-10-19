import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import { NoSsr } from "@material-ui/core";
import Router from "next/router";
import jwt_decode from "jwt-decode";
import Cookie from "js-cookie";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [dupEmailOpen, setDupEmailOpen] = useState(false);
  const [badPassAlert, setBadPassAlert] = useState(false);
  const [isAllowed, setIsAllowed] = useState(true);

  const StyledButton2 = withStyles({
    root: {
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 5,
      backgroundColor:
        "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
      border: "1px solid #ffffff",
      fontSize: "calc(1vw + 4vh)",
      color: "white",
      padding: "0 30px",
      fontWeight: "bold",
      // position: "absolute",
      bottom: 0,
      "&:hover": {
        // fontStyle: "italic",
        fontWeight: "bold",
        backgroundColor:
          "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
        color: "#black",
        transform: "scale(1.05)",
        transitionDuration: ".5s",
      },
    },
    label: {
      textTransform: "capitalize",
    },
  })(Button);

  const StyledButton = withStyles({
    root: {
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 5,
      backgroundColor:
        "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
      border: "1px solid #ffffff",
      fontSize: "calc(1vw + 2vh)",
      color: "white",
      height: "2em",
      padding: "0 30px",
      fontWeight: "bold",
      // position: "absolute",
      bottom: 0,
      "&:hover": {
        // fontStyle: "italic",
        fontWeight: "bold",
        backgroundColor:
          "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
        color: "#black",
        transform: "scale(1.05)",
        transitionDuration: ".5s",
      },
    },
    label: {
      textTransform: "capitalize",
    },
  })(Button);

  const handleDupEmail = () => {
    setDupEmailOpen(true);
  };

  const handleDupEmailClose = (e) => {
    setDupEmailOpen(false);
    Router.reload();
  };

  const handleBadPassAlert = () => {
    setBadPassAlert(true);
  };

  const handleBadPassAlertClose = (e) => {
    setBadPassAlert(false);
    Router.reload();
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  // const phoneNumberChange = (e) => {
  //   setPhoneNumber(e.target.value);
  // };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const passwordChange2 = (e) => {
    setPassword2(e.target.value);
  };

  const onRegister = async (event) => {


    setIsAllowed(false);
    event.preventDefault();
    try {
      if (password !== password2) {
        throw "password != password2";
      }
      if (!name || !email) {
        Router.reload();
      }
      try {
        let res = await Axios(`/api/register`, {
          method: "post",
          data: {
            name: name,
            email: email,
            password: password,
          },
        });
        res.data && Cookie.set('userinfo', res.data)
        res.status === 253 && router.push("/checkout/landing");
      } catch (error) {
        if (error.response.status) {
          throw error.response.status;
        } else {
          console.log("Error in onRegister().");
        }
      }
    } catch (error) {
      // Duplicate email
      if (error === 409) {
        console.log("Duplicate email.");
        handleDupEmail();
      } else if (error === "password != password2") {
        console.log("Passwords do not match.");
        handleBadPassAlert();
      } else {
        console.log("Other Error");
        console.log(`Error: ${error}`);
      }
    }
  };
  return (
    <div>
      <Dialog
        open={dupEmailOpen}
        onClose={handleDupEmailClose}
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

      <Dialog
        open={badPassAlert}
        onClose={handleDupEmailClose}
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
          {"Passwords do not match."}
        </DialogTitle>
        <DialogActions style={{ justifyContent: "center" }}>
          <StyledButton onClick={handleBadPassAlertClose}>
            Try Again
          </StyledButton>
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
        <div id="register" className="container" style={{marginTop: '2vh'}}>
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
            <h1 style={{ textAlign: "center", marginTop: '.5em', margin: 0, width: "100%" }}>Register</h1>
            <label style={{marginTop: 5}}>Full Name</label>
            <input type="text" name="fullname" onChange={nameChange} />
            {/* <label>Phone Number</label>
            <input type="text" name="phoneno" onChange={phoneNumberChange} /> */}
            <label>Email Address</label>
            <input type="email" name="emailadd" onChange={emailChange} />
            <label>Password</label>
            <input type="password" name="password" onChange={passwordChange} />
            <label>Confirm Password</label>
            <input
              type="password"
              name="password2"
              onChange={passwordChange2}
            />
            <div
              className="signupbtn"
              style={{marginBottom: '2vh', marginTop: '3vh' }}
            >
              <NoSsr>
                <StyledButton2
                  onClick={onRegister}
                >
                  Sign Up
                </StyledButton2>
              </NoSsr>
            </div>
            <a
              href="/login"
              style={{ fontSize: '1.5em' }}
            >
              Already have an account?
            </a>
            <div className="twosc" style={{ marginTop: '2vh', marginBottom: '1.5vh' }}>
              <NoSsr>
                <StyledButton
                  onClick={() => router.push("/login")}
                >
                  Log In
                </StyledButton>
              </NoSsr>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
