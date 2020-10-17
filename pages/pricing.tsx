import React, { useState } from "react";

import { NoSsr } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Pricing() {
  const router = useRouter();
  const [state, setstate] = useState("");

  const StyledButton = withStyles({
    root: {
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 10,
      backgroundColor: "#ffffff",
      border: "2px solid #ffffff",
      fontSize: "2em",
      color: "black",
      height: "2em",
      width: "7em",
      padding: "0 30px",
      fontWeight: "bold",
      // position: "absolute",
      bottom: 0,
      "&:hover": {
        // fontStyle: "italic",
        fontWeight: "bold",
        backgroundColor: "#ffffff",
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
          <div className="pricing" style={{ marginTop: 10 }}>
            <h1>Pricing</h1>
            <div className="cards">
              <div className="card">
                <div className="priced">
                  <sup>$</sup>0.99 / <span>day</span>
                </div>
                <h3>Yearly Billing</h3>
                <h3 className="off"> 50% OFF</h3>
                <div style={{ marginTop: "5vh" }}>
                  <NoSsr>
                    <StyledButton onClick={() => handleChoice(0)} style={{ marginBottom: '1em'}}>
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
                <div>
                  <NoSsr>
                    <StyledButton onClick={() => handleChoice(1)} style={{marginTop: '1.5em' , marginBottom: '1em'}}>
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
                <div style={{ marginTop: "10vh" }}>
                  <NoSsr>
                    <StyledButton onClick={() => handleChoice(2)} style={{marginTop: '1.5em', marginBottom: '1em'}}>
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
