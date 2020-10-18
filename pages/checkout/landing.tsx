import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cookie from "js-cookie";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export default async function CheckoutLanding() {
  // useEffect(async() => {
  //   // Update the document title using the browser API
  //   !Cookie.get("planChoice")
  //     ? handleNoPlan()
  //     : handlePlan(Cookie.get("planChoice"));

  //   const { sessionId } = await fetch('/api/checkout/session')

  // }, []);

  const handlePlan = async (params: any) => {
    console.log("plan", params);
    switch (params) {
      case 0:
        // 360 one time payment for year

        break;
      case 1:
        //  one time payment for 6 months

        break;
      case 2:
        // $ 62/month billing
        break;
      default:
      // invalid params
    }
  };

  const handleNoPlan = async () => {
    console.log("no plan");
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url('../img/Union.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
        }}
      >
        <Header />
        <div id="register" className="container">
          <div
            className="card"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <div className="checkoutright" style={{ padding: 0 }}>
              <div className="twoopc">
                <ul style={{ justifyContent: "center" }}>
                  <li>
                    <img src="../img/tick.png" />
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
                <img src="../img/stripe.png" />
                <img className="himg" src="../img/stripemob.png" />
              </div>

              <div
                id="hida"
                className="cal"
                style={{ justifyContent: "center" }}
              >
                <p id="newp">Payment Partner</p>
              </div>
              <h2 style={{ fontSize: 30 }}>Sending you to Stripe now.</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
