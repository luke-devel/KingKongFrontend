import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { withStyles } from "@material-ui/core/styles";
import { NoSsr } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const StyledButton = withStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 5,
    backgroundColor:
      "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
    border: "1px solid #ffffff",
    fontSize: "calc(1vw + 1vh)",
    color: "white",
    padding: "0 30px",
    fontWeight: "bold",
    width: '8vw',
    margin: '-3vh',
    marginLeft: '1vh',
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

export default function Header() {
  const [menuToggle, setMenuToggle] = useState("off");

  const toggleMenu = () => {
    menuToggle === "off" ? setMenuToggle("on") : setMenuToggle("off");
  };

  return (
    <header style={{ margin: 0 }}>
      <nav style={{padding: '1em'}}>
        <Link href="/">
            <img src="/img/logo.png" height="60" width="60"/>
        </Link>

        <ul className="navul">
          <li>
            <a className="price" href="/pricing">
              Pricing{" "}
            </a>
          </li>
          <li>
            <a className="price" href="/contact">
              Contact{" "}
            </a>
          </li>
          <li>
            <a className="price" href="/faq">
              FAQ{" "}
            </a>
          </li>
          <li>
            <NoSsr>
              <StyledButton onClick={()=>Router.push('/login')}>Login</StyledButton>
            </NoSsr>
          </li>
        </ul>

        <div className="nav">
          <a
            href="#menu"
            id="toggle"
            className={menuToggle}
            onClick={toggleMenu}
            style={{
              width: "1.5em",
              float: "left"
            }}
          >
            <span></span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <a href="/">Home </a>
              </li>
              <li>
                <a href="/pricing">Pricing </a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/settings"> Settings</a>
              </li>
              <li>
                <a href="/login" className="logbtn">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
