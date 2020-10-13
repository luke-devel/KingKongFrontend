import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FAQ() {
  return (
    <div>
      <Header />

      <div id="faq" className="container">
        <div className="pricing">
          <h1>FAQ</h1>
          <form role="search">
            <input
              id="search"
              type="search"
              placeholder="Search"
            />
            <button id="sform" type="submit">
              Go
            </button>
          </form>
        </div>

        <div className="faqs">
          <div className="fq">
            <h2>How does the Backup/Restore function work ? </h2>

            <p>
              When you signup, you provide us your FTP details. Our software
              starts the functions with FTP access.
            </p>
          </div>

          <div className="fq">
            <h2>What Payment plans do you offer ? </h2>

            <p>
              We have a single pricing, irrespective of the size, content or
              type of the website. Billing cycles are monthly, semi-annually (6
              months) and annually. Monthly billling amounts to 29$. Semi Annual
              billing amounts to 178$ and Annual billing amounts to 361$.
            </p>
          </div>

          <div className="fq">
            <h2>Should I pay for Dedicated Personal Relationship Manager ? </h2>

            <p>No this service is totally free, provided to every customer.</p>
          </div>

          <div className="fq">
            <h2>Do you check the contents of my website/database ? </h2>

            <p>
              No. As a security protocol, we donot check the contents of your
              websites or databases.
            </p>
          </div>

          <div className="fq">
            <h2>Can I cancel my Subscription ? </h2>

            <p>
              Yes. You can cancel it anytime you wish. Just send us a quick mail
              or inform your relationship manager, and we cancel your
              subscription. Bills already paid cannot be returned or
              re-imboursed.
            </p>
          </div>

          <div className="fq">
            <h2>Where is your service you based ? </h2>

            <p>
              We are based in Lille, FRANCE. Our servers are securely based in
              Munich, GERMANY.
            </p>
          </div>

          <div className="fq">
            <h2> Can I change my Hosting company ? </h2>

            <p>
              Yes. You are free to change your hsoting companies. Just backup
              your data before doing so, and inform us about the change, so we
              restore your files to the new backup.
            </p>
          </div>

          <div className="fq">
            <h2> Where is my data stored ? </h2>

            <p>
              Your data is stored securely in our Private servers based in
              Munich, GERMANY.
            </p>
          </div>

          <div className="fq">
            <h2> How do I view my backups ? </h2>

            <p>Your backup history is shown in the User Panel.</p>
          </div>

          <div className="fq">
            <h2>How long can backups be stored ? </h2>

            <p>
              There is no limit to the time duration. It can be stored as long
              as you have an account with us.
            </p>
          </div>

          <div className="fq">
            <h2>How do I change/cancel my subscription ? </h2>

            <p>
              You can send us a quick mail or inform your Relationship Manager.
              They would do it for you.
            </p>
          </div>

          <div className="fq">
            <h2>How do I Backup/Restore my website ? </h2>

            <p>
              Login to the User Panel, and these functions are available there.
              Just click on the button next to it.
            </p>
          </div>
        </div>

        <div id="hh" className="row lastsec" style={{backgroundImage: `url('img/Union2.png')`, paddingTop: 0, paddingBottom: 30}}>
          <h3>Do you have questions ? </h3>

          <h4>Need to change/remove subscription?</h4>

          <div id="hidme" className="secbtn2">
            <button id="hidme">Contact us</button>
          </div>
          <div id="showme" className="secbtn2">
            <button>Request a change</button>
          </div>
        </div>
      </div>

 

      <Footer />
    </div>
  );
}
