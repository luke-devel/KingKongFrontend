import Header from "../../components/UserHeader";
import Footer from "../../components/Footer";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Sites from "../../components/Sites";
import Link from "next/link";

const testData = [
  {
    servers: {
      Nissan: [
        { model: "Sentra", doors: 4 },
        { model: "Maxima", doors: 4 },
        { model: "Skyline", doors: 2 },
      ],
      Ford: [
        { model: "Taurus", doors: 4 },
        { model: "Escort", doors: 4 },
      ],
    },
  },
];

export default function User() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Header />
      <div
        id="body"
        style={{
          paddingTop: "5vh",
          paddingBottom: "5vh",
        }}
      >
        <Grid
          container
          spacing={5}
          style={{
            minHeight: "100%",
          }}
        >
          <div className="row" style={{ display: "block" }}>
            <div className="headtb">
              <a href="" className="heada">
                My Sites
              </a>
              <Link href="/user/addsite">
                <a className="headaa">Add site</a>
              </Link>
            </div>
            <div className="">
              <table>
                <thead>
                  <tr>
                    <th>
                      <a href="#">Name</a>
                    </th>
                    <th>
                      <a href="#">URL</a>
                    </th>
                    <th className="imgtd">
                      <a href="#">Backup</a>
                    </th>
                    <th className="imgtd">
                      <a href="#">Remove</a>
                    </th>
                  </tr>
                </thead>
                <tbody>{/* <Sites /> */}</tbody>
              </table>
              <div className="row" style={{ display: "block" }}>
                <div className="headtb2">
                  <a href="#" className="heada">
                    My backups
                  </a>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>
                        <a href="#">Name</a>
                      </th>
                      <th>
                        <a href="#">URL</a>
                      </th>
                      <th>
                        <a href="#">ID</a>
                      </th>
                      <th>
                        <a href="#">Last Backup</a>
                      </th>
                      <th className="imgtd">
                        <a href="#">Restore</a>
                      </th>
                      <th className="imgtd">
                        <a href="#">Remove</a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="#">Shopify Store</a>
                      </td>
                      <td>
                        <a href="www.mytshirts.com">www.mytshirts.com</a>
                      </td>
                      <td>
                        <a href="#">126547</a>
                      </td>
                      <td>
                        <a href="#">9/7/2010</a>
                      </td>
                      <td className="imgtd">
                        <a href="#">
                          <img className="tbimg" src="img/restore (1).png" />
                        </a>
                      </td>
                      <td className="imgtd">
                        <a href="#">
                          <img className="tbimg" src="img/remove 1.png" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="row" style={{ display: "block" }}>
              <div className="headtb2">
                <a href="#" className="heada">
                  My Subscriptions
                </a>
              </div>
              <table className="halftb">
                <thead>
                  <tr>
                    <th>
                      <a href="#">Name</a>
                    </th>
                    <th>
                      <a href="#">Subscription</a>
                    </th>
                    <th>
                      <a href="#">FTP</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="#">Mark Jones</a>
                    </td>
                    <td>
                      <a href="#">Monthly</a>
                    </td>
                    <td>
                      <a href="#">129.736.3927</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              className="row lastsec"
              style={{
                display: "block",
                backgroundImage: `url('img/Union2.png')`,
                paddingTop: 110,
                paddingBottom: 0,
              }}
            >
              <h3>Need to change/remove subscription?</h3>

              <div className="secbtn2">
                <button>Request a change</button>
              </div>
            </div>
          </div>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
