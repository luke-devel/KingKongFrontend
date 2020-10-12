import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CheckoutError() {
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
        <div id="success" className="container">
          <div className="successcard">
            <div className="suc">
              <div id="suchide">
                <h1> Oops ! Something went wrong</h1>
              </div>

              <div id="sucshow" className="suc">
                <h2>
                  {" "}
                  <span>
                    Oops !<br />{" "}
                  </span>{" "}
                  Something went wrong
                </h2>
              </div>

              <h3>Please try again</h3>
            </div>

            <div className="footel">
              If problem persists, please contact support.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
