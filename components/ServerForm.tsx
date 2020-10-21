type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { withStyles } from "@material-ui/core/styles";
import { NoSsr } from "@material-ui/core";
import SiteHeader from "./SiteHeader";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import SiteRow from "./SiteRow";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ServerForm() {
  const [inputFormOpen, setInputFormOpen] = useState(true);

  const handleInputFormClose = (e: ButtonEvent) => {
    setInputFormOpen(false);
    Router.reload();
  };

  return (
    <div>
      <Dialog
        open={inputFormOpen}
        onClose={handleInputFormClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "#212121",
            boxShadow:
              "-25px -20px 300px rgba(44, 44, 44, 0.5), 10px 10px 22px rgba(28, 26, 26, 0.5)",
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ color: "white", fontSize: "" }}
        >
          {"Welcome tozz"}
        </DialogTitle>
        <DialogActions style={{ justifyContent: "center" }}>
          <a
            className="log"
            href="/login"
            style={{
              border: "2px solid #FFFFFF",
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 30,
              paddingRight: 30,
              marginBottom: 20,
              width: "3em",
              borderRadius: 5,
            }}
          >
            Log In
          </a>
        </DialogActions>
      </Dialog>

      <div
        id="body"
        style={{
          paddingRight: "10vw",
          paddingLeft: "10vw",
          paddingTop: "5vh",
          paddingBottom: "5vh",
        }}
      >
        <Grid
          container
          spacing={5}
          style={{
            minHeight: "100%",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            style={{
              minHeight: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Grid>
        </Grid>
      </div>
    </div>
  );
}
