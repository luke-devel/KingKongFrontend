import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cookie from "js-cookie";
import { loadStripe } from "@stripe/stripe-js";
import Router from "next/router";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function CheckoutLanding() {
  const [planChoice, setPlanChoice] = useState(Cookie.get("planChoice"));

  useEffect(() => {
    // Update the document title using the browser API
    switch (planChoice) {
      case "1":
        // top plan
        handleYearlyPlan() && console.log("Yarly plan chosen.");
        break;
      case "2":
        // med plan
        handleSixMonthPlan() && console.log("Biannually plan chosen.");
        break;
      case "3":
        // Monthly cheapest plan
        handleMonthlyPlan() && console.log("Monthly plan chosen.");
        break;
      default:
        console.log("No plan chosen, redirecting you to pricing.");
        Router.push("/pricing");
      //
    }
  }, []);

  const handleMonthlyPlan = async () => {
    console.log('in monthly price', process.env.NEXT_PUBLIC_PRICE_ID_MONTHLY);
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        { price: process.env.NEXT_PUBLIC_PRICE_ID_MONTHLY, quantity: 1 },
      ],
      mode: "payment",
      successUrl: `${process.env.NEXT_PUBLIC_PUB_HOST_NAME}/checkout/pending?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${process.env.NEXT_PUBLIC_PUB_HOST_NAME}/pricing`,
    });
    console.log('stripe error: error', error);
  };

  const handleSixMonthPlan = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        { price: process.env.NEXT_PUBLIC_PRICE_ID_MONTHLY_USD, quantity: 1 },
      ],
      mode: "subscription",
      successUrl: `${process.env.NEXT_PUBLIC_PUB_HOST_NAME}/checkout/pending?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${process.env.NEXT_PUBLIC_PUB_HOST_NAME}/pricing`,
    });
    console.log(error);
  };

  const handleYearlyPlan = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        { price: process.env.NEXT_PUBLIC_PRICE_ID_MONTHLY_USD, quantity: 1 },
      ],
      mode: "subscription",
      successUrl: `${process.env.NEXT_PUBLIC_PUB_HOST_NAME}/checkout/pending?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${process.env.NEXT_PUBLIC_PUB_HOST_NAME}/pricing`,
    });
    console.log(error);
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
            <div className="checkoutright" style={{ margin: 0 }}>
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
              <h2 style={{ fontSize: "3.5vw", margin: 0 }}>
                You chose plan:{" "}
                {planChoice
                  ? (planChoice === "1" && `Monthly`) ||
                    (planChoice === "2" && `Biannually`) ||
                    (planChoice === "3" && `Yearly`)
                  : 'No plan chosen. Sending you back to pricing'}
              </h2>
              <h2 style={{ fontSize: "3vw", margin: "1.5vh" }}>
                Redirecting you to Stripe now.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
