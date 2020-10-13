import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Pricing() {
  return (
    <div>
      <div className="topHeader">
        <Header />
        <div id="price" className="container">
          <div className="pricing">
            <h1>Pricing</h1>
            <div className="cards">
              <div className="card">
                <div className="priced">
                  <sup>$</sup>0.99 / <span>day</span>
                </div>

                <h3>Yearly Billing</h3>
                <h3 className="off"> 50% OFF</h3>

                <div className="pricebtn">
                  <button>Choose</button>
                </div>
              </div>

              <div className="card">
                <div className="priced">
                  <sup>$</sup>1.49 / <span>day</span>
                </div>

                <h3>6 Months Billing</h3>
                <h3 className="off"> 30% OFF</h3>

                <div className="pricebtn">
                  <button>Choose</button>
                </div>
              </div>

              <div className="card">
                <div className="priced">
                  <sup>$</sup>1.99 / <span>day</span>
                </div>

                <h3>Monthly Billing</h3>

                <div className="pricebtn1">
                  <button>Choose</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
