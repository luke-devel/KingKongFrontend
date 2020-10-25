import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Router from "next/router";
import Cookie from "js-cookie";

export default function Logout() {
  useEffect(() => {
    console.log("Logging user out.");
    Cookie.remove("usertoken");
    Router.push("/");
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/img/Union.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
        }}
      >
        <Header />
      </div>
      <Footer />
    </div>
  );
}
