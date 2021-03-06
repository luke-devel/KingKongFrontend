import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Stripe from "./Stripe";
import { withStyles } from "@material-ui/core/styles";
import Cookie from "js-cookie";
import Router from "next/router";

const useStyles = makeStyles({
  root: {
    borderRadius: 10,
    minWidth: 310,
    minHeight: 480,
    maxHeight: 480,
    background:
      "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
    boxShadow:
      "-15px -15px 22px rgba(44, 44, 44, 0.5), 15px 15px 22px rgba(28, 26, 26, 0.5)",
    maxWidth: 310,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const StyledButtonSixMonth = withStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 5,
    backgroundColor:
      "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
    border: "2px solid #ffffff",
    fontSize: "4.5vh",
    color: "white",
    padding: "0 30px",
    fontWeight: "bold",
    marginTop: 15,
    "&:hover": {
      fontStyle: "italic",
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

export default function SixMonthCard() {
  const classes = useStyles();

  const handleChoice = () => {
    Cookie.set("planChoice", "2");
    if (Cookie.get("usertoken")) {
      Router.push("/checkout/landing");
    } else {
      Router.push("/register");
    }
  };

  return (
    <div
      id="card"
      style={{
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Card className={classes.root}>
        <CardContent>
          <div
            style={{
              fontWeight: 500,
              color: "white",
              fontSize: "3.5vh",
              marginTop: "3vh",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            <sup>$</sup>134.99 / 6 Months
            <span style={{ fontSize: "4vh" }}></span>
          </div>
          <div
            style={{
              position: "absolute",
              top: 90,
              textAlign: "center",
              width: 280,
            }}
          >
            <h3
              style={{
                fontWeight: 500,
                color: "white",
                fontSize: "4vh",
                marginBottom: 0,
                marginTop: 20,
              }}
            >
              30% OFF
            </h3>
          </div>
          <div style={{ position: "absolute", top: "210px" }}>
            <Stripe />
            <h3
              style={{
                margin: 0,
                paddingTop: 10,
                fontWeight: 500,
                color: "white",
                fontSize: "3vh",
              }}
            >
              Secured Stripe Checkout
            </h3>
            <StyledButtonSixMonth onClick={handleChoice}>
              Choose
            </StyledButtonSixMonth>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
