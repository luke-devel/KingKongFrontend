import Header from "../components/ContactHeader";
import Footer from "../components/Footer";
import Router from "next/router";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/img/Union.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
        }}
      >
        <Header />
        <div id="contact" className="container">
          <form className="card2">
            <h1>Get In Touch</h1>

            <label>Full Name</label>
            <input type="text" name="fullname" />

            <label>Email Address</label>
            <input type="email" name="emailadd" />

            <label>Message</label>
            <textarea></textarea>
            <Link href="/">
              <div className="signupbtssn2">
                <input type="submit" name="signup" value="Submit" />
              </div>
            </Link>

            <div className="hidep">
              {" "}
              <a className="log" href="#">
                Check out our FAQ
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
