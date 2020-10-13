import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const colStyles = {
  backgroundImage: `url('img/Union1.png')`,
  backgroundRepeat: "no-repeat",
  justifyContent: "center",
};

const bottomStyle = {
  background: `url('img/Union2.png')`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
  flexDirection: "column" as "column",
  textAlign: "center" as "center",
};

export default function Home() {
  return (
    <div>
      <div
        className="topHeader"
        style={{
          marginBottom: 90,
          backgroundImage: `url('img/Union.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
        }}
      >
        <Header />
        <div className="header">
          <h1>One platform to secure all your websites.</h1>
          <h3>Backup & Restore in ONE CLICK.</h3>
          <p>
            30,000 websites are hacked every day. Over 10 thousand sites are
            lost due to broken Backup files.
          </p>

          <div className="twoop">
            <ul>
              <li>
                <img src="img/tick.png" /> <p>30-day risk free money back</p>
              </li>{" "}
              <li>
                <img src="img/tick.png" />
                <p>Cancel anytime</p>
              </li>
            </ul>
          </div>
          <Link href="/pricing">
            <div className="secbtn">
              <button>Secure my website</button>
            </div>
          </Link>
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
            <div className="secbtn1">
              <button>Backup Now</button>
            </div>
            <Link href="/pricing">
              <div className="hidbtn">
                <button>Secure my website</button>
              </div>
            </Link>
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
              <button>Backup Now</button>
            </div>
            <Link href="/pricing">
              <div className="hidbtn">
                <button>Secure my website</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="leftcol" style={colStyles}>
            <h3>Stay connected on the move</h3>
            <p>
              Backup & Restore on the go. Quickly connect using a smartphone. It
              works perfectly whether you are travelling or in a business
              meeting or clubbing with your buddies.
            </p>
            <div className="secbtn1">
              <button>Backup Now</button>
            </div>
            <Link href="/pricing">
              <div className="hidbtn">
                <button>Secure my website</button>
              </div>
            </Link>
          </div>
          <div className="rightcol">
            <img
              id="img3"
              className="mac"
              src="img/iPhone-XS-Longscroll-Mockup 1.png"
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
              <button>Backup Now</button>
            </div>
            <Link href="/pricing">
              <div className="hidbtn">
                <button>Secure my website</button>
              </div>
            </Link>
          </div>
        </div>

        <div className="milsection">
          <h1>Military Grade Protection</h1>
          <p>
            {" "}
            Our servers are securely based in{" "}
            <span style={{ color: "white" }}> Germany</span>, end to end
            encrypted.
          </p>

          <div className="twoop">
            {" "}
            <ul>
              <li>
                <img src="img/tick.png" /> <p>Your data is safe.</p>
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
            <p>
              Lost a file? Errors in your Site? Your help is one chat away.
              Quickly connect to your Manager on Phone.
            </p>
          </div>
        </div>

        <div className="row" style={bottomStyle}>
          <h3>Simple, Transparent Pricing.</h3>
          <h1>Any site, Any size, ONE PRICE</h1>

          <p>Unlimited WebSites & Usage</p>

          <div className="priced">
            <sup>$</sup>0.99 / <span>day</span>
          </div>
          <Link href="/pricing">
            <div className="secbtn2">
              <button>Secure my website</button>
            </div>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}
