import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div>
      <div style={{ backgroundImage: `url('img/Union.png')`, backgroundRepeat: "no-repeat", backgroundPosition: "top right",
		backgroundSize: "contain"}}>
	  <Header />
        <div id="contact" className="container">
          <form className="card4">
            <h1>Login</h1>

            <label>Email Address</label>
            <input type="email" name="emailadd" />

            <label>Phone Number</label>
            <input type="Number" name="phoneno" />

            <div className="signupbtn3">
              <input type="submit" name="signup" value="Submit" />
            </div>
          </form>
        </div>

	  </div>
      
	  <Footer />

    </div>
  );
}
