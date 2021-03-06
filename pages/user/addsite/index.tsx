import React, { useState, useEffect } from "react";
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
import { useRouter } from "next/router";
import Axios from "axios";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
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

  const [serverType, setServerType] = useState("");
  const [serverDescription, setServerDescription] = useState("");
  const [serverAddress, setServerAddress] = useState("");
  const [serverPort, setServerPort] = useState("");
  const [serverUsername, setServerUsername] = useState("");
  const [serverPassword, setServerPassword] = useState("");
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

  const handleOtherErrorAlertClose = (e: ButtonEvent) => {
    setOtherErrorAlert(false);
    Router.reload();
  };

  const serverAddressChange = (e: InputEvent) => {
    setServerAddress(e.target.value);
  };

  const serverTypeChange = (e: InputEvent) => {
    setServerType(e.target.value);
  };

  const serverPortChange = (e: InputEvent) => {
    setServerPort(e.target.value);
  };

  const serverDescriptionChange = (e: InputEvent) => {
    setServerDescription(e.target.value);
  };

  const serverUsernameChange = (e: InputEvent) => {
    setServerUsername(e.target.value);
  };

  const serverPasswordChange = (e: InputEvent) => {
    setServerPassword(e.target.value);
  };

  const onSubmit = async (event: ButtonEvent) => {
    setIsAllowed(false);
    console.log(
      serverType.toLowerCase(),
      serverAddress,
      serverPort,
      serverUsername,
      serverPassword
    );
    Axios(`/api/addsite`, {
      method: "POST",
      data: {
        servertype: serverType.toLowerCase(),
        serverdescription: serverDescription,
        serveraddress: serverAddress,
        serverport: serverPort,
        serverusername: serverUsername,
        serverpassword: serverPassword,
      },
    })
      .then((res) => {
        if (res.data.message === "Success") {
          Router.push("/user");
        } else {
          setOtherErrorAlert(true);
        }
      })
      .catch((err) => {
        //! to handle err here
        console.log("handle errerr addsite main,", err.response.status);
        if (err.response.status === 401) {
          setOtherErrorAlert(true);
        }
      });
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
          style={{ transform: "scale(0.85)", marginTop: "-15vh", zIndex: 100 }}
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
                fontSize: "4vh",
              }}
            >
              Submit your FTP/SFTP server information below, then sit back and
              relax.
            </h4>
            <h5
              style={{
                fontStyle: "italic",
                fontSize: "3vh",
                marginTop: 0,
                marginBottom: "3vh",
              }}
            >
              And let us handle the rest.
            </h5>
            <label style={{ fontSize: 30 }}>Server type (FTP or SFTP)</label>
            <input type="email" name="servertype" onChange={serverTypeChange} />
            <label style={{ fontSize: 30 }}> Server Name</label>
            <input
              type="email"
              name="description"
              onChange={serverDescriptionChange}
            />
            <label style={{ fontSize: 30 }}>Server IP or URL</label>
            <input type="email" name="address" onChange={serverAddressChange} />
            <label style={{ fontSize: 30 }}>Server Port</label>
            <input type="email" name="port" onChange={serverPortChange} />
            <label style={{ fontSize: 30 }}>Server Username</label>
            <input
              type="email"
              name="username"
              onChange={serverUsernameChange}
            />
            <label style={{ fontSize: 30 }}>Server Password</label>
            <input
              type="email"
              name="serverpassword"
              onChange={serverPasswordChange}
            />
            <div
              className="signupbtn"
              style={{ marginBottom: "2vh", marginTop: "5vh" }}
            >
              <NoSsr>
                <StyledButton2 onClick={onSubmit}>Add Site</StyledButton2>
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
              Need Help?
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
