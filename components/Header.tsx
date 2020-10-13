import React from "react";
import Router from "next/router";

export default function index() {
  return (
    <header>
      <nav>
        <a href="http://moorent.com/" className="logo">
          <img src="img/logo.png" />
        </a>

        <ul className="navul">
          <li>
            <a className="price" href="http://moorent.com/pricing.html">
              Pricing{" "}
            </a>
          </li>
          <li>
            <a href="" className="logbtn">
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
                <a href="http://moorent.com/pricing.html">Pricing </a>
              </li>
              <li>
                <a href="http://moorent.com/contact.html">Contact</a>
              </li>
              <li>
                <a href="http://moorent.com/faq.html">FAQ</a>
              </li>
              <li>
                <a href="http://moorent.com/settings.html"> Settings</a>
              </li>
              <li>
                <a href="#" className="logbtn">
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
