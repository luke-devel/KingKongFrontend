import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CheckoutSuccess() {
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
              <h1>Payment Received</h1>

              <h3>Thank you !</h3>
            </div>

            <div className="footel">
              You will receive a confirmation Email soon
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
