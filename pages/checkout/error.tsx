
import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cookie from "js-cookie";

export default function CheckoutError() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('../img/Union.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
        }}
      >
        <Header />
        <div id="register" className="container">
          <div
            className="card"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <div className="checkoutright" style={{ padding: 0 }}>
              </div>
              <h2 style={{ fontSize: 30 }}>Oops ! Something went wrong!</h2>
              <h2 style={{ fontSize: 30 }}>If problem persists, please contact support.</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
 }