import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";

export default function Header() {
  // TODO: set click to toggle className for #menu on and off
  const [menuToggle, setMenuToggle] = useState("off");

  const toggleMenu = () => {
    menuToggle === "off" ? setMenuToggle("on") : setMenuToggle("off");
  };

  return (
    <header style={{ marginBottom: 0 }}>
      <nav>
        <Link href="/">
          <a className="logo">
            <img src="/img/logo.png" />
          </a>
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
            <a href="/login" className="logbtn">
              Login
            </a>
          </li>
        </ul>

        <div className="nav">
          <a
            href="#menu"
            id="toggle"
            className={menuToggle}
            onClick={toggleMenu}
            style={{
              marginTop: "2em",
              marginRight: ".5em",
              width: "1.5em",
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
