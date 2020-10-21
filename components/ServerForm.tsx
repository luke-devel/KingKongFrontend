import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { withStyles } from "@material-ui/core/styles";
import { NoSsr } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SiteHeader from "./SiteHeader";
import SiteRow from "./SiteRow";

export default function Sites() {
  return (
    <SiteRow siteName='hi' siteLink='foo.com' serverID='111' />
  );
}
