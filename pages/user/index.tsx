import React, { useState, useEffect } from "react";
import { Spin, Space } from "antd";
import Axios from "axios";
import Header from "../../components/UserHeader";
import Footer from "../../components/Footer";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Sites from "../../components/Sites";
import BackupSites from "../../components/BackupSites";
import Link from "next/link";
import Router from "next/router";

export default function User() {
  const [auth, setAuth] = useState(false);
  const [menuStatus, setMenuStatus] = useState(1);
  
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
          checkMember: "true",
        },
      });
      if (resData.data.message === "Authenticated Paid Member") {
        setAuth(true);
      } else {
        console.log("Not a paid member.");
        alert("You are not a paid member. Please subscirbe first.")
        Router.push("/pricing");
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
        <div style={{ width: "100vw", height: "100vh" }}>
          <Header />
          <div id="body" style={{}}>
            <Grid
              container
              spacing={5}
              style={{
                minHeight: "100%",
                margin: 0,
              }}
            >
              <div className="row" style={{ display: "block"}}>
                <div className="headtb" style={{ margin: 0 }}>
                  <a
                    href=""
                    className="heada"
                    style={{ textDecoration: "underline", marginLeft: "2vw" }}
                  >
                    My Sites
                  </a>
                  <Link href="/user/addsite">
                    <a
                      className="headaa"
                      style={{
                        zIndex: menuStatus,
                        fontSize: 20,
                        minWidth: 150,
                        maxWidth: 160,
                        marginRight: 20,
                      }}
                    >
                      Add site
                    </a>
                  </Link>
                </div>
                <div >
                  <table  style={{marginLeft: '2.5vw'}}>
                    <thead>
                      <tr>
                        <th>
                          <a href="#">Name</a>
                        </th>
                        <th>
                          <a href="#">URL</a>
                        </th>
                        <th className="imgtd">
                          <a href="#">Backup</a>
                        </th>
                        <th className="imgtd">
                          <a href="#">Remove</a>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <Sites />
                    </tbody>
                  </table>
                  <div className="row" style={{ display: "block" }}>
                    <div className="headtb2" style={{ marginBottom: 0 }}>
                      <a
                        href="#"
                        className="heada"
                        style={{ textDecoration: "underline" }}
                      >
                        My Backups
                      </a>
                    </div>
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <a href="#">Name</a>
                          </th>
                          <th>
                            <a href="#">URL</a>
                          </th>
                          <th>
                            <a href="#">ID</a>
                          </th>
                          <th>
                            <a href="#">Status</a>
                          </th>
                          <th>
                            <a href="#">Last Backup</a>
                          </th>
                          <th className="imgtd">
                            <a href="#">Restore</a>
                          </th>
                          <th className="imgtd">
                            <a href="#">Remove</a>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                       <BackupSites/>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="row" style={{ display: "block" }}>
                  <div className="headtb2">
                    <a
                      className="heada"
                      style={{ textDecoration: "underline" }}
                    >
                      My Subscriptions:
                    </a>
                   
                  </div>
                  <div className="headtb2">
                  <a
                      className="heada"
                     
                    >
                      Active.
                    </a>
                  </div>
                  {/* <table className="halftb">
                    <thead>
                      <tr>
                        <th>
                          <a href="#">Name</a>
                        </th>
                        <th>
                          <a href="#">Subscription</a>
                        </th>
                        <th>
                          <a href="#">FTP</a>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="#">To Do</a>
                        </td>
                        <td>
                          <a href="#">Monthly</a>
                        </td>
                        <td>
                          <a href="#">129.736.3927</a>
                        </td>
                      </tr>
                    </tbody>
                  </table> */}
                </div>

                <div
                  className="row lastsec"
                  style={{
                    display: "block",
                    backgroundImage: `url('img/Union2.png')`,
                    backgroundPosition: 'center',
                    paddingTop: 80,
                    paddingBottom: 0,
                  }}
                >
                  <h3 style={{fontSize: 'calc(1.5vh + 2vw)', paddingBottom: 0}}>Need to change/remove subscription?</h3>

                  <div className="secbtn2">
                    <button>Request a change</button>
                  </div>
                </div>
              </div>
            </Grid>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
