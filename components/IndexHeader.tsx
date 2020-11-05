import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { withStyles } from "@material-ui/core/styles";
import { NoSsr } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Cookie from "js-cookie";
import Axios from "axios";

const StyledButton = withStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 5,
    backgroundColor:
      "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
    border: "2px solid #ffffff",
    fontSize: "2vh",
    color: "white",
    padding: "10 30px",
    fontWeight: "bold",
    minWidth: 90,
    width: "calc(1vw + 2vh)",
    minHeight: 25,
    margin: "-3vh",
    marginLeft: "1vh",
    // position: "absolute",
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

const logOut = () => {
  // set loggedIn cookie to false, and logging user out, sending them back to index
  Cookie.remove("usertoken");
  Router.push('/logout');
};

export default function IndexHeader() {
  const [menuToggle, setMenuToggle] = useState("off");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const resData = await Axios(`/api/checkauth`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      });
      if (resData.data.message === "Authenticated") {
        setAuth(true);
      }
      else{
        console.log('No Auth');
      }
    } catch (error) {
      console.log("err in auth process");
    }
  };

  const toggleMenu = () => {
    menuToggle === "off" ? setMenuToggle("on") : setMenuToggle("off");
  };

  return (
    <header >
      <nav style={{ padding: 0}}> 
        <Link href="/">
          <img
            src="/img/logo.png"
            height="70"
            width="70"
            style={{ cursor: "pointer", zIndex: 1 }}
          />
        </Link>
        <ul className="navul">
          <li>
            {!auth ? (
              <Link href="/pricing">
                <a className="price" style={{ fontSize: 20 }}>
                  Pricing
                </a>
              </Link>
            ) : (
              <Link href="/user">
                <a className="price" style={{ fontSize: 20 }}>
                  User Panel
                </a>
              </Link>
            )}
          </li>
          <li>
            <Link href="/contact">
              <a className="price">Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <a className="price" href="/faq">
                FAQ
              </a>
            </Link>
          </li>
          <li>
            <NoSsr>
              {!auth ? (
                <StyledButton onClick={() => Router.push("/login")}>
                  Login
                </StyledButton>
              ) : (
                <StyledButton onClick={logOut}>Logout</StyledButton>
              )}
            </NoSsr>
          </li>
        </ul>

        <div className="nav"style={{width: "100%"}} >
          <a
            href="#menu"
            id="toggle"
            className={menuToggle}
            onClick={toggleMenu}
            style={{
              width: "1.5em",
              float: "left",
            }}
          >
            <span></span>
          </a>
          <div id="menu" style={{ zIndex: 400 }}>
            <ul>
              <li>
                <Link href="/">
                  <a>Home </a>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <a>Pricing </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a>FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/user">
                  <a>User Panel</a>
                </Link>
              </li>
              <li>
                {!auth ? (
                  <Link href="/login">
                    <a className="logbtn">Login</a>
                  </Link>
                ) : (
                  <a onClick={logOut} className="logbtn">
                    Logout
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
