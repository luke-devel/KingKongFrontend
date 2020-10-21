import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Router from "next/router";
import Cookie from "js-cookie";
import Header from "../components/Header";
import Footer from "../components/Footer";
import YearlyCard from "../components/YearlyCard";
import SixMonthCard from "../components/SixMonthCard";
import MonthlyCard from "../components/MonthlyCard";

export default function Pricing2() {
  const [spacing, setSpacing] = React.useState<GridSpacing>(10);
  const [state, setstate] = useState("");

  const StyledButton = withStyles({
    root: {
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 5,
      backgroundColor: "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
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

  const handleChoice = (choice: number) => {
    console.log(choice);
    //e.preventDefault();
    switch (choice) {
      case 0:
        // Yearly top plan
        Cookie.set("planChoice", "1");
        Router.push("/register");
        break;
      case 1:
        // 6 mo med plan
        Cookie.set("planChoice", "2");
        Router.push("/register");
        break;
      case 2:
        // Monthly cheapest plan
        Cookie.set("planChoice", "3");
        Router.push("/register");
        break;
      default:
      //
    }
  };

  return (
    <div>
      <Header />
      <div id="body" style={{ height: "70vh", marginTop: '5vh'}}>
        <Grid
          container
          spacing={10}
          style={{
            paddingLeft: "10vw",
            paddingRight: "10vw",
            paddingBottom: '5vh',
            minHeight: "100%",
          }}
        >
          <Grid item xs={12} sm={12} md={4}>
            <YearlyCard />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <SixMonthCard />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MonthlyCard />
          </Grid>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}
