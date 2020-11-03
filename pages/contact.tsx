import React, { useState, useEffect } from "react";
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
import { useRouter } from "next/router";
import Axios from "axios";
import Header from "../components/ContactHeader";
import Footer from "../components/Footer";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import { NoSsr } from "@material-ui/core";
import Router from "next/router";
import Cookie from "js-cookie";

export default function AddSite() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [otherErrorAlert, setOtherErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

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

  const handleOtherErrorAlertClose = (e: ButtonEvent) => {
    setOtherErrorAlert(false);
    Router.reload();
  };

  const handleSuccessAlertClose = (e: ButtonEvent) => {
    setSuccessAlert(false);
    Router.reload();
  };

  const fullNameChange = (e: InputEvent) => {
    setFullName(e.target.value);
  };

  const emailChange = (e: InputEvent) => {
    setEmail(e.target.value);
  };

  const messageChange = (e: InputEvent) => {
    setMessage(e.target.value);
  };

  const onSubmit = async (event: ButtonEvent) => {
    const apiRes = await Axios(`/api/contact`, {
      method: "POST",
      data: {
        fullName,
        email,
        message,
      },
    });
    if (apiRes && apiRes.data.message === "Success") {
      // success in contact form db row
      setSuccessAlert(true);
    } else {
      // err in contact form db row
      setOtherErrorAlert(true);
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
            onClick={() => Router.reload()}
            style={{ marginBottom: "2vh" }}
          >
            Try Again
          </StyledButton>
        </DialogActions>
      </Dialog>

      <Dialog
        open={successAlert}
        onClose={handleSuccessAlertClose}
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
          style={{ color: "white", fontSize: "", textAlign: "center" }}
        >
          {"Thank You!"}
        </DialogTitle>
        <DialogTitle
          id="alert-dialog-title"
          style={{ color: "white", fontSize: "", textAlign: "center" }}
        >
          {
            "Your contact form was successfully submitted. We will get back to you via email shortly."
          }
        </DialogTitle>
        <DialogActions style={{ justifyContent: "center" }}>
          <StyledButton
            onClick={() => Router.reload()}
            style={{ marginBottom: "2vh", fontSize: "calc(1.5vh + 2vh)" }}
          >
            Close
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
          style={{ marginTop: "-5vh", zIndex: 100 }}
        >
          {/* need to fix for different screen sizes */}
          <form
            className="card"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "5vh",
              zIndex: 100,
            }}
          >
            <h4
              style={{
                textAlign: "center",
                marginTop: "3vh",
                marginBottom: "2vh",
                width: "100%",
                fontSize: 40 ,
              }}
            >
              Contact Us
            </h4>
            <label style={{ fontSize: 30 }}>Full Name</label>
            <input type="email" name="fullname" onChange={fullNameChange} />
            <label style={{ fontSize: 30 }}>Email Address</label>
            <input type="email" name="email" onChange={emailChange} />
            <label style={{ fontSize: 30 }}>Message</label>
            <input type="email" name="port" onChange={messageChange} />

            <div
              className="signupbtn"
              style={{ marginBottom: "2vh", marginTop: "5vh" }}
            >
              <NoSsr>
                <StyledButton2 onClick={onSubmit}>Submit</StyledButton2>
              </NoSsr>
            </div>
            <a
              href="/faq"
              style={{
                fontSize: "1.5em",
                paddingTop: "1vh",
                paddingBottom: "3vh",
                textDecoration: "underline",
              }}
            >
              Check out our FAQ
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
