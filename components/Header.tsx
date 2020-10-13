import React from "react";
import Router from "next/router";

export default function index() {
  return (
    <header>
      <nav>
        <a href="/" className="logo">
          <img src="img/logo.png" />
        </a>

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
          <a href="#menu" id="toggle">
            <span></span>
          </a>
          <div id="menu">
            <ul>
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
