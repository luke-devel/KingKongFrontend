import React, { useState, useEffect } from "react";
import VerifiedCheck from "../components/VerifiedCheck";
import { NoSsr } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Router from "next/router";
import Cookie from "js-cookie";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Stripe from "../components/Stripe";

export default function Pricing() {
  const [state, setstate] = useState("");

  const StyledButton = withStyles({
    root: {
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 5,
      backgroundColor:
        "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
      border: "1px solid #ffffff",
      fontSize: "calc(2vw + 1.5vh)",
      color: "white",
      padding: "0 30px",
      fontWeight: "bold",
      // position: "absolute",
      bottom: 0,
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

  const handleChoice = (choice) => {
    console.log(choice);
    //e.preventDefault();
    switch (choice) {
      case 0:
        // cheapest plan
        Cookie.set("planChoice", 1);
        Router.push("/register");
        break;
      case 1:
        // med plan
        Cookie.set("planChoice", 2);
        Router.push("/register");
        break;
      case 2:
        // top plan
        Cookie.set("planChoice", 3);
        Router.push("/register");
        break;
      default:
      //
    }
  };

  return (
    <div>
      <div className="topHeader">
        <Header />
        <div id="price" className="container" style={{ marginTop: 0 }}>
          <div className="pricing">
            <h1>Pricing</h1>
            <div className="cards">
              <div className="card">
                <div className="priced">
                  <sup>$</sup>0.99 / <span>day</span>
                </div>
                <h3>Yearly Billing</h3>
                <h3 className="off"> 50% OFF</h3>
                <Stripe />
                <VerifiedCheck />
                <div>
                  <NoSsr>
                    <StyledButton
                      onClick={() => handleChoice(0)}
                      style={{ marginTop: "1.5em", marginBottom: "1em" }}
                    >
                      Choose
                    </StyledButton>
                  </NoSsr>
                </div>
              </div>
              <div className="card">
                <div className="priced">
                  <sup>$</sup>1.49 / <span>day</span>
                </div>
                <h3>6 Months Billing</h3>
                <h3 className="off"> 30% OFF</h3>
                <Stripe />
                <VerifiedCheck />

                <div>
                  <NoSsr>
                    <StyledButton
                      onClick={() => handleChoice(1)}
                      style={{ marginTop: "1.5em", marginBottom: "1em" }}
                    >
                      Choose
                    </StyledButton>
                  </NoSsr>
                </div>
              </div>

              <div className="card">
                <div className="priced">
                  <sup>$</sup>1.99 / <span>day</span>
                </div>
                <h3>Monthly Billing</h3>
                <h3 className="off"> No Discount</h3>
                <Stripe />
                <VerifiedCheck />

                <div>
                  <NoSsr>
                    <StyledButton
                      onClick={() => handleChoice(2)}
                      style={{ marginTop: "1.5em", marginBottom: "1em" }}
                    >
                      Choose
                    </StyledButton>
                  </NoSsr>
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
