import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blank() {
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
        
      </div>
      <Footer />
    </div>
  );
}
