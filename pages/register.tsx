import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Register() {
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
        <div id="register" className="container">
		<form className="card">

					<h1>Register</h1>

					<label>Full Name</label>
					<input type="text" name="fullname"/>

					<label>Phone Number</label>	
					<input type="Number" name="phoneno"/>

					<label>Email Address</label>
					<input type="email" name="emailadd"/>

					<label>Password</label>
					<input type="password" name="password"/>

					<div className="signupbtn">
					<input type="submit" name="signup" value="Sign Up"/>
					</div>

					<div className="twosc"><a href="#">Already have an account?</a>  <a className="log" href="#">Log In</a></div>
		</form>


	</div>
      </div>

      <Footer />
    </div>
  );
}
