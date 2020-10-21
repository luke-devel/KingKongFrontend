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
    minWidth: 100,
    background: "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
    boxShadow: "-15px -15px 22px rgba(44, 44, 44, 0.5), 15px 15px 22px rgba(28, 26, 26, 0.5)",
    // maxWidth: 250,
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

const StyledButton = withStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 5,
    backgroundColor: "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
    border: "2px solid #ffffff",
    fontSize: "4.5vh",
    color: "white",
    padding: "0 30px",
    fontWeight: "bold",
    marginTop: 15,
    "&:hover": {
      fontStyle: "italic",
      fontWeight: "bold",
      backgroundColor: "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
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
    Router.push("/register");
  };

  return (
    <div
      id="card"
      style={{
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Card className={classes.root}>
        <CardContent>
          <div
            style={{
              fontWeight: 500,
              color: "white",
              fontSize: "6vh",
              marginTop: "3vh",
            }}
          >
            <sup>$</sup>1.49 / <span>day</span>
          </div>
          <h3 style={{ fontWeight: 500, color: "white", fontSize: "4vh" }}>
            Six Months Billing
          </h3>
          <h3
            style={{
              fontWeight: 500,
              color: "white",
              fontSize: "4vh",
              marginBottom: 0,
            }}
          >
            {" "}
            30% OFF
          </h3>
          <Stripe />
          <h3
            style={{
              margin: 0,
              fontWeight: 500,
              color: "white",
              fontSize: "3vh",
            }}
          >
            {" "}
            Secure Stripe Checkout
          </h3>
          <StyledButton onClick={handleChoice}>Choose</StyledButton>
        </CardContent>
      </Card>
    </div>
  );
}
