import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Pricing() {
  const router = useRouter();
  const [state, setstate] = useState("");

  const handleChoice = (choice) => {
    console.log(choice);
    //e.preventDefault();
    switch (choice) {
      case 0:
        // cheapest plan
        Cookie.set("planChoice", 0);
        router.push("/register");
        break;
      case 1:
        // med plan
        Cookie.set("planChoice", 1);
        router.push("/register");
        break;
      case 2:
        // top plan
        Cookie.set("planChoice", 2);
        router.push("/register");
        break;
      default:
      //
    }
  };

  return (
    <div>
      <div className="topHeader">
        <Header />
        <div id="price" className="container">
          <div className="pricing">
            <h1>Pricing</h1>
            <div className="cards">
              <div className="card">
                <div className="priced">
                  <sup>$</sup>0.99 / <span>day</span>
                </div>

                <h3>Yearly Billing</h3>
                <h3 className="off"> 50% OFF</h3>

                <div
                  className="pricebtn"
                  id="0"
                  onClick={() => handleChoice(0)}
                >
                  <button>Choose</button>
                </div>
              </div>

              <div className="card">
                <div className="priced">
                  <sup>$</sup>1.49 / <span>day</span>
                </div>

                <h3>6 Months Billing</h3>
                <h3 className="off"> 30% OFF</h3>

                <div className="pricebtn" onClick={() => handleChoice(1)}>
                  <button>Choose</button>
                </div>
              </div>

              <div className="card">
                <div className="priced">
                  <sup>$</sup>1.99 / <span>day</span>
                </div>

                <h3>Monthly Billing</h3>

                <div className="pricebtn1" onClick={() => handleChoice(2)}>
                  <button>Choose</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
