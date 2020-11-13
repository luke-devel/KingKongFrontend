import React from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 700px)",
  });
  return (
    <footer style={{ bottom: 0, maxHeight: 500, width: "100%" }}>
      <div className="logo">
        <a href="/" className="logo">
          <img src="/img/logo.png" />
        </a>
      </div>

      <div className="footmenu" >
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

      {isTabletOrMobileDevice ? (
        //! Mobile 
        <div className="footabt">
          <Link href="tel:+33780774300">
            <p>+33 780774300</p>
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
      ) : (
          //! Desktop 
          <div className="footabt" style={{marginLeft: '-5vw'}}>
            <Link href="tel:+33780774300">
              <p>+33 780774300</p>
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
        )}

    </footer>
  );
}
