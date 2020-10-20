import useSWR from "swr";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { NoSsr } from "@material-ui/core";

const StyledButton = withStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 5,
    backgroundColor:
      "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
    border: "1px solid #ffffff",
    fontSize: "calc(2vw + 1.5vh)",
    color: "white",
    padding: "0 30px",
    fontWeight: "bold",
    // position: "absolute",
    bottom: 0,
    "&:hover": {
      // fontStyle: "italic",
      fontWeight: "bold",
      backgroundColor:
        "linear-gradient(144.8deg, rgba(10, 9, 9, 0.5) 0%, rgba(56, 56, 56, 0.5) 100%), #212121",
      color: "#black",
      transform: "scale(1.05)",
      transitionDuration: ".5s",
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

export default function Pending() {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.session_id ? `/api/checkout/${router.query.session_id}` : null,
    (url) => fetch(url).then((res) => res.json())
  );
  error && console.log(`there was an error.`);

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
        <Grid item xs={12} md={12}>
          <div
            className="card"
            style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
          >
            <a className="logo" style={{ marginTop: "1.5em" }}>
              <img src="/img/logo.png" />
            </a>
            <p
              style={{
                fontSize: "calc(2.5vw + 1.5vh)",
                overflow: "hidden",
                whiteSpace: "nowrap",
                color: "white",
                margin: "3vh",
              }}
            >
              Payment Status:
            </p>
            <p
              style={{
                fontSize: "calc(3vw + 1.5vh)",
                color: "white",
                marginBottom: "1vh",
                marginTop: "0vh",
                fontStyle: 'italic'
              }}
            >
              {/* Uppercase payment status */}
              {data && data.payment_status === "paid"
                ? `${
                    data.payment_status.charAt(0).toUpperCase() +
                    data.payment_status.slice(1)
                  }!`
                : "Pending..."}
            </p>
            <p
              style={{
                fontSize: "calc(1.5vw + 1.5vh)",
                color: "white",
                marginBottom: "1vh",
                marginTop: "1vh",
              }}
            >
              {data && data.payment_status === "paid"
                ? `Thank you for your purchase! Click below to head into your user portal.`
                : "Plase wait..."}
            </p>
            {data && data.payment_status === "paid" ? (
              <div>
              <NoSsr>
                <StyledButton
                  onClick={() => router.push('/user')}
                  style={{ marginTop: "3vh", marginBottom: "1vh" }}
                >
                  Continue
                </StyledButton>
              </NoSsr>
              </div>

            ) : (
              <h1>Fetching Status</h1>
            )}
          </div>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
