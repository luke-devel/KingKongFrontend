import React from "react";
import Router from "next/router";

export default function index() {
  return (
    <footer>
      <div className="logo">
        <a href="/" className="logo">
          <img src="/img/logo.png" />
        </a>
      </div>

      <div className="footmenu">
        <ul>
          <li>
            <a href="/pricing">Pricing </a>
          </li>
          <li>
            <a href="/contact">Contact </a>
          </li>
          <li>
            <a href="/faq">FAQ </a>
          </li>
          <li>
            <a href="login/" className="logoutbtn">
              Login
            </a>
          </li>
        </ul>
      </div>

      <div className="footabt">
        <p>+33-78-774300</p>
        <p>contact@kingkongbackups.com</p>
        <p className="lastone">
          7 Rue d'Antin Lille - 59800
          <br />
          <span
            style={{
              color: "white",
              float: "left",
              fontWeight: 500,
              lineHeight: "1.5em",
            }}
          >
            FRANCE{" "}
          </span>
        </p>

        <p className="last">7 Rue d'Antin Lille 59800 FRANCE </p>
      </div>
    </footer>
  );
}
