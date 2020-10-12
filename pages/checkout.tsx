import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Checkout() {
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
        <div id="register" className="container">
          <div className="checkout">
            <form className="checkoutcard">
              <h1>Payment Details</h1>

              <label>Name on card</label>
              <input type="text" name="fullname" />

              <label id="cardno">
                Card number{" "}
                <div className="imgs">
                  <img src="img/visa.png" />
                  <img src="img/mastercard.png" />
                </div>
              </label>
              <input type="Number" name="cardno" />

              <div id="twodiv">
                <div className="twodiv">
                  <label>Expiration</label>
                  <input type="email" name="emailadd" />
                </div>
                <div className="twodivspan">
                  <span className="dv"> / </span>
                </div>
                <div className="twodiv">
                  <input type="email" name="emailadd" />
                </div>
                <div id="lasttwo" className="twodiv">
                  <label>CVC</label>
                  <input type="email" name="cvc" />
                </div>
              </div>

              <div className="totalbill">
                <div id="hida" className="cal">
                  <p>Total : </p>
                  <p>
                    360$ <span className="add">(Annual Billing)</span>
                  </p>
                </div>
                <div id="hida" className="cal">
                  <p>Tax : </p>
                  <p>
                    {" "}
                    <b>0 </b> <span className="add">(Additional 20% OFF )</span>{" "}
                  </p>
                </div>
                <div className="subtotal">
                  <p>SubTotal : </p>
                  <p>
                    {" "}
                    <b>360$</b>{" "}
                  </p>
                </div>
              </div>

              <div className="twoopc">
                <ul>
                  <li>
                    <img src="img/tick.png" />{" "}
                    <p id="newli">30-day risk free money back</p>
                  </li>
                  <li>
                    <img src="img/tick.png" />
                    <p id="newli">Cancel anytime</p>
                  </li>
                </ul>
              </div>

              <div className="checkoutpay">
                <input type="submit" name="signup" value="Pay" />
              </div>
            </form>

            <div className="checkoutright">
              <div className="twoopc">
                <ul style={{ justifyContent: "center" }}>
                  <li>
                    <img src="img/tick.png" />
                    <p
                      id="newp"
                      style={{ marginBlockStart: 0, marginBlockEnd: 0 }}
                    >
                      Verified by
                    </p>
                  </li>
                </ul>
              </div>
              <div className="imgco">
                <img src="img/stripe.png" />
                <img className="himg" src="img/stripemob.png" />
              </div>

              <div
                id="hida"
                className="cal"
                style={{ justifyContent: "center" }}
              >
                <p id="newp">Payment Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
