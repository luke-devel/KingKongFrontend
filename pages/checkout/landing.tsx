import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cookie from "js-cookie";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default function CheckoutLanding() {
  const router = useRouter();

  const [planChoice, setPlanChoice] = useState(Cookie.get("planChoice"));

  useEffect(() => {
    // Update the document title using the browser API
    planChoice === "0" &&
      handlePlan("PRICE_ID_MONTHLY_USD") &&
      console.log("here");
  }, []);

  const handlePlan = async (query: string) => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: process.env.PRICE_ID_MONTHLY_USD, quantity: 1 }],
      mode: "subscription",
      successUrl: `${process.env.PUB_HOST_NAME}/checkout/pending?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${process.env.PUB_HOST_NAME}/pricing`,
    });
    console.log(error);s
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
            <div className="checkoutright">
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
              <h2 style={{ fontSize: 30 }}>You chose plan: {planChoice}</h2>
              <h2 style={{ fontSize: 30 }}>Redirecting you to Stripe now...</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
