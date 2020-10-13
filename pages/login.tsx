import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div>
      <div className="topHeader">
        <Header />
        <div id="contact" class="container">
		<form class="card4">

			<h1>Login</h1>

			<label>Email Address</label>
			<input type="email" name="emailadd"/>
					
			<label>Phone Number</label>	
			<input type="Number" name="phoneno"/>
					
			<div class="signupbtn3">
			<input type="submit" name="signup" value="Submit"/>
			</div>


		</form>
	</div>
        <Footer />
      </div>
    </div>
  );
}
