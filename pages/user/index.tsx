import React, { useState, useEffect } from "react";
import { Spin, Space } from "antd";
import Axios from "axios";
import Header from "../../components/UserHeader";
import Footer from "../../components/Footer";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Sites from "../../components/Sites";
import Link from "next/link";
import Box from "@material-ui/core/Box";
import Router from "next/router";

export default function User() {
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
      } else {
        console.log("No Auth");
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
            <div id="body" style={{textAlign: "center"}}>
                <Space size="middle" style={{marginTop: "20vh"}}>
                  <Spin size="large" />
                </Space>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <div style={{ width: "100vw", height: "100vh" }}>
          <Header />
          <div
            id="body"
            style={{
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
              <div className="row" style={{ display: "block" }}>
                <div className="headtb">
                  <a href="" className="heada">
                    My Sites
                  </a>
                  <Link href="/user/addsite">
                    <a className="headaa">Add site</a>
                  </Link>
                </div>
                <div className="">
                  <table>
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
                    <div className="headtb2">
                      <a href="#" className="heada">
                        My backups
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
                        <tr>
                          <td>
                            <a href="#">To Do</a>
                          </td>
                          <td>
                            <a href="www.mytshirts.com">To Do</a>
                          </td>
                          <td>
                            <a href="#">To Do</a>
                          </td>
                          <td>
                            <a href="#">9/7/2010</a>
                          </td>
                          <td className="imgtd">
                            <a href="#">
                              <img
                                className="tbimg"
                                src="img/restore (1).png"
                              />
                            </a>
                          </td>
                          <td className="imgtd">
                            <a href="#">
                              <img className="tbimg" src="img/remove 1.png" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="row" style={{ display: "block" }}>
                  <div className="headtb2">
                    <a href="#" className="heada">
                      My Subscriptions
                    </a>
                  </div>
                  <table className="halftb">
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
                  </table>
                </div>

                <div
                  className="row lastsec"
                  style={{
                    display: "block",
                    backgroundImage: `url('img/Union2.png')`,
                    paddingTop: 110,
                    paddingBottom: 0,
                  }}
                >
                  <h3>Need to change/remove subscription?</h3>

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
