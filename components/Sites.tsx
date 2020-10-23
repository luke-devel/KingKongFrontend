import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { withStyles } from "@material-ui/core/styles";
import { NoSsr } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SiteHeader from "./SiteHeader";
import SiteRow from "./SiteRow";
import Cookie from "js-cookie";
import Axios from "axios";

import jwt_decode from "jwt-decode";

export default function Sites() {
  const [userSites, setUserSites] = useState([]);

  useEffect(() => {
    fun();
  }, []);

  const fun = async () => {
    if (Cookie.get("userdata")) {
      const token = await Cookie.get("userdata");
      const decoded = await jwt_decode(token);
      try {
        console.log(decoded.id, decoded.email);
        await Axios(`/api/query/${decoded.id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        })
          .then((res) => {
            console.log("res", res.data);
            setUserSites(res.data);
          })
          .catch((err) => console.log("err", err));
      } catch (error) {
        console.log("the err");
      }
    }
    else{
      console.log('no cookie, from sites.tsx');
      
    }
  };

  const siteData = userSites.map(
    ({ serverdescription, serveraddress }, index) => {
      return (
        <SiteRow
          siteName={serverdescription}
          siteLink={serveraddress}
          serverID={index}
        />
      );
    }
  );

  return <>{siteData}</>;
}
