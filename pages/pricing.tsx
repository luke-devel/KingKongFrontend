import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Router from "next/router";
import Cookie from "js-cookie";
import Header from "../components/PricingHeader";
import Footer from "../components/Footer";
import YearlyCard from "../components/YearlyCard";
import SixMonthCard from "../components/SixMonthCard";
import MonthlyCard from "../components/MonthlyCard";

export default function Pricing() {
  const [spacing, setSpacing] = React.useState<GridSpacing>(10);
  const [state, setstate] = useState("");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const resData = await Axios(`/api/checkauth`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      });
      if (resData.data.message === "Authenticated") {
        setAuth(true);
      }
      else{
        console.log('No Auth');
      }
    } catch (error) {
      console.log("err in auth process");
    }
  };

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

  return (
    <div>
      <Header />
      <div id="body" style={{paddingRight: '10vw', paddingLeft: '10vw', paddingTop: '5vh', paddingBottom: '5vh' }}>
        <Grid
          container
          spacing={5}
          style={{
            minHeight: "100%",
          }}
        >
          <Grid item xs={12} sm={12} md={4} style={{
            minHeight: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <YearlyCard />
          </Grid>
          <Grid item xs={12} sm={12} md={4} style={{
            minHeight: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <SixMonthCard />
          </Grid>
          <Grid item xs={12} sm={12} md={4} style={{
            minHeight: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <MonthlyCard />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
