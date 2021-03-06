import React, { useState, useEffect } from "react";
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
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
import Cookie from "js-cookie";

export default function Register() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badPassAlert, setBadPassAlert] = useState(false);
  const [badEmailAlert, setBadEmailAlert] = useState(false);
  const [otherErrorAlert, setOtherErrorAlert] = useState(false);
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
        fontStyle: "italic",
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

  const handleBadPassAlert = () => {
    setBadPassAlert(true);
  };

  const handleBadPassAlertClose = (e: ButtonEvent) => {
    setBadPassAlert(false);
    Router.reload();
  };

  const handleBadEmailAlert = () => {
    setBadEmailAlert(true);
  };

  const handleBadEmailAlertClose = (e: ButtonEvent) => {
    setBadEmailAlert(false);
    Router.reload();
  };

  const handleOtherErrorAlertClose = (e: ButtonEvent) => {
    setOtherErrorAlert(false);
    Router.reload();
  };

  const emailChange = (e: InputEvent) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e: InputEvent) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (event: ButtonEvent) => {
    setIsAllowed(false);
    console.log("in submit");
    console.log(email, password);
    try {
      Axios("/api/login", {
        method: "POST",
        data: {
          email: email,
          password: password,
        },
      })
        .then((response) => {
          // success
          if (response.data.authToken) {
            console.log("in success");
            Cookie.set("usertoken", response.data.authToken,{ sameSite: 'strict' });
            Router.push("/user");
          } else {
            console.log("in fail");
            Router.reload();
          }
        })
        .catch((err) => {
          //err handling
          console.log(err.response.status);
          err.response.status === 401 && setOtherErrorAlert(true);
          err.response.status === 404 && setBadEmailAlert(true);
          err.response.status === 405 && setBadPassAlert(true);
        });
    } catch (error) {
      console.log("caught error");
    }
  };

  return (
    <div>
      <Dialog
        open={otherErrorAlert}
        onClose={handleOtherErrorAlertClose}
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
          {"An error occured."}
        </DialogTitle>
        <DialogActions style={{ justifyContent: "center" }}>
          <StyledButton
            onClick={handleBadPassAlertClose}
            style={{ marginBottom: "2vh" }}
          >
            Try Again
          </StyledButton>
        </DialogActions>
      </Dialog>

      <Dialog
        open={badEmailAlert}
        onClose={handleBadEmailAlertClose}
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
          {"Email does not exist."}
        </DialogTitle>
        <DialogActions style={{ justifyContent: "center" }}>
          <StyledButton
            onClick={handleBadPassAlertClose}
            style={{ marginBottom: "2vh" }}
          >
            Try Again
          </StyledButton>
        </DialogActions>
      </Dialog>

      <Dialog
        open={badPassAlert}
        onClose={handleBadPassAlertClose}
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
          {"Incorrect Password."}
        </DialogTitle>
        <DialogActions style={{ justifyContent: "center" }}>
          <StyledButton
            onClick={handleBadPassAlertClose}
            style={{ marginBottom: "2vh" }}
          >
            Try Again
          </StyledButton>
        </DialogActions>
      </Dialog>

      <div
        style={{
          backgroundImage: `url('/img/Union.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
        }}
      >
        <Header />
        <div
          id="register"
          className="container"
          style={{ transform: "scale(0.9)", marginTop: "0vh" }}
        >
          {/* need to fix for different screen sizes */}
          <form
            className="card"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: 10,
            }}
          >
            <h1
              style={{
                textAlign: "center",
                marginTop: "4vh",
                margin: 0,
                marginBottom: "-1vh",
                fontSize: "5vh",
                width: "100%",
              }}
            >
              Log In
            </h1>
            <label>Email Address</label>
            <input type="email" name="emailadd" onChange={emailChange} />
            <label>Password</label>
            <input type="password" name="password" onChange={passwordChange} />
            <div
              className="signupbtn"
              style={{ marginBottom: "2vh", marginTop: "5vh" }}
            >
              <NoSsr>
                <StyledButton2 onClick={onSubmit}>Log In</StyledButton2>
              </NoSsr>
            </div>
            <a
              href="/register"
              style={{
                fontSize: "1.5em",
                paddingTop: "1vh",
                paddingBottom: "3vh",
                textDecoration: "underline",
              }}
            >
              Need to register?
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
