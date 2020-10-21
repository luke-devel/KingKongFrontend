import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Sites from "../../components/Sites";
import ServerForm from "../../components/ServerForm";

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
              <a href="/user/addsite" className="headaa">
                Add site
              </a>
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
                      <a href="#">Schedule</a>
                    </th>
                    <th className="imgtd">
                      <a href="#">Remove</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <Sites />
                </tbody>
              </table>
            </div>
          </div>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

//!get initial props of ftp server info.
