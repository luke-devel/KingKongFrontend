import React from "react";
import Link from "next/link";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export default function index() {
  return (
    <>
      <BrowserView>
        <footer style={{ bottom: 0 }}>
          <div className="logo">
            <a href="/" className="logo">
              <img src="/img/logo.png" />
            </a>
          </div>

          <div className="footmenu">
            <ul>
              <Link href="/pricing">
                <li>
                  <a style={{ cursor: "pointer" }}>Pricing </a>
                </li>
              </Link>
              <Link href="/contact">
                <li>
                  <a href="/contact">Contact </a>
                </li>
              </Link>
              <Link href="/faq">
                <li>
                  <a style={{ cursor: "pointer" }}>FAQ </a>
                </li>
              </Link>
              <Link href="/login">
                <li>
                  <a className="logoutbtn">Login</a>
                </li>
              </Link>
            </ul>
          </div>

          <div className="footabt">
            <Link href="tel:123-456-7890">
              <p>+33-78-774300</p>
            </Link>
            <Link href="mailto:contact@kingkongbackups.com">
              <p style={{ cursor: "pointer" }}>contact@kingkongbackups.com</p>
            </Link>
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
      </BrowserView>
      <MobileView>
        <footer style={{ bottom: 0 }}>
          <div className="logo">
            <a href="/" className="logo">
              <img src="/img/logo.png" />
            </a>
          </div>

          <div className="footmenu" style={{marginTop: "-30vh"}}>
            <ul >
              <Link href="/pricing">
                <li>
                  <a style={{ cursor: "pointer" }}>Pricing </a>
                </li>
              </Link>
              <Link href="/contact">
                <li>
                  <a href="/contact">Contact </a>
                </li>
              </Link>
              <Link href="/faq">
                <li>
                  <a style={{ cursor: "pointer" }}>FAQ </a>
                </li>
              </Link>
              <Link href="/login" >
                <li>
                  <a className="logoutbtn">Login</a>
                </li>
              </Link>
            </ul>
          </div>

          <div className="footabt" style={{marginTop: "-20vh"}}>
            <Link href="tel:123-456-7890">
              <p>+33-78-774300</p>
            </Link>
            <Link href="mailto:contact@kingkongbackups.com">
              <p style={{ cursor: "pointer" }}>contact@kingkongbackups.com</p>
            </Link>
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
        </footer>{" "}
      </MobileView>
    </>
  );
}
