import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VerifiedCheck from "../../components/VerifiedCheck";
import Stripe from "../../components/Stripe";

export default function Pending() {
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
            <Stripe />
            <VerifiedCheck />
            <p id="newp" style={{ fontSize: "4em", fontWeight: "bold"}}>
              Success!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
