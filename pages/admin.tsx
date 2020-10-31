import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdminBody from "../components/AdminBody";
import Router from "next/router";
import Axios from "axios";
import { Spin, Space } from "antd";

export default function Admin() {
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
        data: {
          checkAdmin: "true",
        },
      });
      if (resData.data.message === "Authenticated") {
        setAuth(true);
      } else {
        alert("An error has occured. Please return to the homepage");
        Router.push("/");
      }
    } catch (error) {
      console.log("err in auth process");
    }
  };
  return (
    <>
      {!auth ? (
        <>
          <Header />
          <div style={{ width: "100vw", height: "100vh" }}>
            <div id="body" style={{ textAlign: "center" }}>
              <Space size="middle" style={{ marginTop: "20vh" }}>
                <Spin size="large" />
              </Space>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <div>
          <Header />
          <AdminBody />
          <Footer />
        </div>
      )}
    </>
  );
}
