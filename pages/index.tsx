import Link from "next/link";
import Cookie from "js-cookie";
import React, { useEffect } from "react";
import tawkTo from "tawkto-react";
import Header from "../components/IndexHeader";
import Footer from "../components/Footer";
import { useMediaQuery } from "react-responsive";

const colStyles = {
  backgroundImage: `url('img/Union1.png')`,
  backgroundRepeat: "no-repeat",
  justifyContent: "center",
  padding: 40px 0px 0px 85px;
};

const bottomStyle = {
  background: `url('img/Union2.png')`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
  maxHeight: "50vh",
  marginBottom: "calc((.2em + 2.2vmin) + (.2em + 2.2vmax))",
  flexDirection: "column" as "column",
  textAlign: "center" as "center",
  lineHeight: 0,
};

export default function Home() {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const [auth, setAuth] = React.useState(() => {
    if (Cookie.get("userdata")) {
      return true;
    } else {
      return false;
    }
  });
  const tawkToPropertyId = process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID;
  useEffect(() => {
    tawkTo(tawkToPropertyId);
  }, []);
  return (
    <div>
      <div
        className="topHeader"
        style={{
          marginBottom: 90,
          backgroundImage: `url('/img/Union.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
          minWidth: "100vw",
        }}
      >
        <Header />
        <div className="header" style={{ marginTop: "5vh" }}>
          {isTabletOrMobileDevice ? (
            //! Mobile
            <div className="mobiletop">
              <h1
                style={{
                  fontSize: "calc((.2em + 3vmin) + (.2em + 3vmax))",
                  padding: 50,
                  paddingBottom: 0,
                }}
              >
                One platform to secure all your websites.
              </h1>{" "}
              <h3
                style={{
                  marginTop: "4vh",
                  fontWeight: 500,
                  marginBottom: 5,
                }}
              >
                Backup & Restore in ONE CLICK.
              </h3>
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "3.9vw",
                    width: "100vw",
                    marginTop: 0,
                    marginBottom: 0,
                  }}
                >
                  30,000 websites are hacked every day.
                </p>
                <p
                  style={{
                    fontSize: "3.7vw",
                    width: "100vw",
                    marginTop: 0,
                  }}
                >
                  Over 10 thousand sites are lost due to broken Backup files.
                </p>
              </div>
            </div>
          ) : (
            //! Desktop
            <>
              <h1 style={{ fontSize: "calc((.2em + 2vmin) + (.2em + 2vmax))" }}>
                One platform to secure all your websites.
              </h1>{" "}
              <h3
                style={{
                  fontSize: "calc((.13em + 2.15vmin) + (.13em + 2.15vmax))", marginTop: 0
                }}
              >
                Backup & Restore in ONE CLICK.
              </h3>
              <p>
                30,000 websites are hacked every day. Over 10 thousand sites are
                lost due to broken Backup files.
              </p>
            </>
          )}

          <div className="twoop">
            {isTabletOrMobileDevice ? (
              // Mobile
              <>
                <ul style={{ paddingLeft: 20 }}>
                  <li style={{ width: "70%" }}>
                    <div
                      style={{
                        color: "#ffffff",
                        fontSize: "3.6vw",
                        width: "100%",
                        paddingRight: 0,
                      }}
                    >
                      <img style={{ paddingRight: 10 }} src="img/tick.png" />
                      30-day risk free money back
                    </div>
                  </li>
                  <li style={{ width: "50%" }}>
                    <div style={{ color: "#ffffff", fontSize: "3.8vw" }}>
                      <img style={{ paddingRight: 8 }} src="img/tick.png" />
                      Cancel anytime
                    </div>
                  </li>{" "}
                </ul>
                <div className="secbtn" style={{marginTop: "7vh"}}>
                  <Link href="/pricing">
                    <button style={{ cursor: "pointer" }}>
                      Secure my website
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              // Desktop
              <>
                <ul style={{ marginBottom: 0 }}>
                  <li>
                    <img src="img/tick.png" />{" "}
                    <p style={{ color: "#ffffff", marginTop: 0 }}>
                      30-day risk free money back
                    </p>
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <img src="img/tick.png" />
                    <p style={{ color: "#ffffff", marginTop: 0 }}>
                      Cancel anytime
                    </p>
                  </li>
                </ul>
                <div className="secbtn" style={{marginTop: '2vh'}}>
                  <Link href="/pricing">
                    <button style={{ cursor: "pointer" }}>
                      Secure my website
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="row1"
          style={{
            marginBottom: 90,
          }}
        >
          <div className="leftcol" style={colStyles}>
            <h3>Eezy peezy Dashboard</h3>
            <p>
              Backup all your websites, irrespective of the hosting provider, in
              one simple and easy to use dashboard. Just enter your FTP details
              and we start.
            </p>
            <div className="secbtn1" style={{ cursor: "pointer" }}>
              {!auth ? (
                <Link href="/pricing">
                  <button style={{ cursor: "pointer" }}>Backup Now</button>
                </Link>
              ) : (
                <Link href="/user">
                  <button style={{ cursor: "pointer" }}>Backup Now</button>
                </Link>
              )}
            </div>
          </div>
          <div className="rightcol">
            <img id="img1" className="mac" src="img/mackbook.png" />
          </div>
        </div>
        <div className="row">
          <div className="rightcol">
            <img id="img2" className="mac" src="img/device.png" />
          </div>
          <div className="leftcol" style={colStyles}>
            <h3>Works on all your devices </h3>
            <p>
              User Panel works seamlessly on every device. No need to download
              special software. Our website runs smoothly on all your favourite
              devices.
            </p>
            <div className="secbtn1">
              {!auth ? (
                <Link href="/pricing">
                  <button style={{ cursor: "pointer" }}>Backup Now</button>
                </Link>
              ) : (
                <Link href="/user">
                  <button style={{ cursor: "pointer" }}>Backup Now</button>
                </Link>
              )}
            </div>
            <div className="hidbtn">
              {!auth ? (
                <Link href="/pricing">
                  <button style={{ cursor: "pointer" }}>Backup Now</button>
                </Link>
              ) : (
                <Link href="/user">
                  <button style={{ cursor: "pointer" }}>Backup Now</button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="row1">
          <div className="leftcol" style={colStyles}>
            <h3>Stay connected on the move</h3>
            <p>
              Backup & Restore on the go. Quickly connect using a smartphone. It
              works perfectly whether you are travelling or in a business
              meeting or clubbing with your buddies.
            </p>
            <div className="secbtn1">
              {!auth ? (
                <Link href="/pricing">
                  <button style={{ cursor: "pointer" }}>Backup Now</button>
                </Link>
              ) : (
                <Link href="/user">
                  <button style={{ cursor: "pointer" }}>Backup Now</button>
                </Link>
              )}
            </div>
            <div className="hidbtn">
              <Link href="/pricing">
                <button>Secure my website</button>
              </Link>
            </div>
          </div>
          <div className="rightcol">
            <img
              id="img3"
              className="mac"
              src="img/iPhone-XS-Longscroll-Mockup 1.png"
              style={{ position: "relative" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="rightcol">
            <img id="img4" className="mac" src="img/iPhone-Xs 1.png" />
          </div>
          <div className="leftcol" style={colStyles}>
            <h3>Email alerts </h3>
            <p>
              Relax, and grab a coffee. We alert you every time a backup/restore
              is initiated or completed.
            </p>
            <div className="secbtn1">
              {!auth ? (
                <Link href="/pricing">
                  <button style={{ cursor: "pointer" }}>Backup Now</button>
                </Link>
              ) : (
                <Link href="/user">
                  <button style={{ cursor: "pointer" }}>Backup Now</button>
                </Link>
              )}
            </div>
            <div className="hidbtn">
              <Link href="/pricing">
                <button>Secure my website</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="milsection" style={{ marginTop: 10, marginBottom: 10 }}>
          <h1 style={{ fontSize: "calc((.2em + 2vmin) + (.2em + 2vmax))" }}>
            Military Grade Protection
          </h1>
          <p style={{ marginTop: "calc(.5vh + .5vw)" }}>
            Our servers are securely based in
            <span style={{ color: "white" }}> Germany</span>, end to end
            encrypted.
          </p>

          <div className="twoop">
            {" "}
            <ul>
              <li>
                <img src="img/tick.png" />{" "}
                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "calc((.1em + 1.2vmin) + (.1em + 1.2vmax))",
                    lineHeight: "10vh",
                    marginTop: 0,
                  }}
                >
                  Your data is safe.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="lcol">
            <img src="img/cloud-computing.png" />
            <h1>Backup On Demand</h1>
            <p>
              Create backups with one click. Anywhere, Anytime. Manage
              everything in the easy to use Admin Panel.
            </p>
          </div>
          <div className="lcol">
            <img src="img/restore.png" />
            <h1>Restore On Demand</h1>
            <p>
              Recreate your website exactly like you left it, with one-click
              restore. Choose from up to 30 backup versions for easy recovery.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="lcol">
            <img src="img/calendar.png" />
            <h1>Schedule for later </h1>
            <p>
              Running Late? Schedule for Auto Backup or Restore with one click.
            </p>
          </div>
          <div className="lcol">
            <img src="img/robotic.png" />
            <h1>Auto-Pilot Mode </h1>
            <p>Relationship Manager takes care of periodic Backup/Restore.</p>
          </div>
        </div>

        <div className="row">
          <div className="lcol">
            <img src="img/customer-service 1.png" />
            <h1>
              Dedicated Personal <br /> Relationship Manager
            </h1>
            <p style={{ marginBottom: "5vh" }}>
              Lost a file? Errors in your Site? Your help is one chat away.
              Quickly connect to your Manager on Phone.
            </p>
          </div>
        </div>

        <div className="rowbottom" style={bottomStyle}>
          <h3 style={{ fontSize: "calc((.2em + 1.3vmin) + (.2em + 1.3vmax))" }}>
            Simple, Transparent Pricing.
          </h3>

          <h1
            style={{
              fontSize: "calc((.2em + 1.8vmin) + (.2em + 1.8vmax))",
              marginTop: "calc(7vh + 2vw)",
            }}
          >
            Any site, Any size, ONE PRICE
          </h1>

          <p
            style={{
              fontSize: "calc((.2em + 1vmin) + (.2em + 1vmax))",
              marginTop: "calc(7vh + 2vw)",
            }}
          >
            Unlimited WebSites & Usage
          </p>

          <div className="priced" style={{ marginTop: 0, marginBottom: 0 }}>
            <sup>$</sup>0.99 / <span>day</span>
          </div>
          <div className="secbtn2" style={{ marginTop: "1vh" }}>
            {!auth ? (
              <Link href="/pricing">
                <button style={{ cursor: "pointer", marginTop: 0 }}>
                  Secure my website
                </button>
              </Link>
            ) : (
              <Link href="/user">
                <button style={{ cursor: "pointer", marginTop: 0 }}>
                  Secure my website
                </button>
              </Link>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
