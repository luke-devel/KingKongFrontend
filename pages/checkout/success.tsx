import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
            style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center", padding: '3em' }}
          >

            <Stripe/>
            <div style={{ whiteSpace: "nowrap"}}>
            <p id="newp" style={{ fontSize: "2em", fontWeight: "bold", }}>
             Payment Success!
            </p>
            </div>
         
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
