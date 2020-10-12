import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Upgrade() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('img/Union.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
        }}
      >
        <Header />
        <div className="container">
          <div className="upgrade">
            <div className="upcard">
              <h3>Upgrade to Enterprise Package </h3>
              <ul>
                <li>
                  <img src="img/tick.png" />
                  Ulimited Websites{" "}
                </li>
                <li>
                  <img src="img/tick.png" />
                  Ulimited Domains & FTP
                </li>
                <li>
                  <img src="img/tick.png" />
                  Unlimited Storage
                </li>
                <li>
                  <img src="img/tick.png" />
                  24/7 Website Monitoring
                </li>
                <li>
                  <img src="img/tick.png" />
                  500 Mbps + Transfer speed (4X Resources)
                </li>
              </ul>

              <div className="priced">
                <sup>$</sup>3.99 / <span>day</span>
              </div>
              <div className="hidelinks">
                <ul>
                  <li>
                    <img src="img/tick.png" />
                    30 day risk free money back
                  </li>
                  <li>
                    <img src="img/tick.png" />
                    Cancel anytime
                  </li>
                </ul>
              </div>

              <div id="hideup" className="upbtn">
                <button>Next</button>
              </div>
              <div id="showup" className="upbtn">
                <button>Pay</button>
              </div>
              <span className="upspan">
                This will replace your existing subscription plans
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
