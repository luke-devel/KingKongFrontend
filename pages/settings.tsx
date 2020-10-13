import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Settings() {
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
        <div id="contact" className="container">
          <form className="card3">
            <h1>Edit Account Details</h1>

            <label>Name</label>
            <input type="text" name="fullname" />

            <label>Email Address</label>
            <input type="email" name="emailadd" />

            <label>Phone Number</label>
            <input type="Number" name="phoneno" />

            <label>FTP Server IP</label>
            <input type="Number" name="ftpserver" />

            <label>FTP Username</label>
            <input type="Number" name="ftpusername" />

            <label>FTP Password</label>
            <input type="password" name="password" />

            <div id="settingsbtn" className="signupbtn2">
              <input type="submit" name="signup" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
