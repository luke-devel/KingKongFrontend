import React from "react";
import Router from "next/router";

export default function AdminBody() {
  return (
    <div>
      <div className="container">
        <div className="row" style={{display: "block"}}>
          <div className="headtb2">
            <a href="#" className="heada">
              Backup requests
            </a>
          </div>
          <table>
            <thead>
              <tr>
                <th>
                  <a href="#">Last Backup</a>
                </th>

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
                  <a href="#">Mark Done</a>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="#">9/7/2010</a>
                </td>
                <td>
                  <a href="#">Shopify Store</a>
                </td>
                <td>
                  <a href="www.mytshirts.com">www.mytshirts.com</a>
                </td>
                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/cloud-computing.png" />
                  </a>
                </td>
                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/calendar.png" />
                  </a>
                </td>
                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/done.png" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">6/7/2010</a>
                </td>
                <td>
                  <a href="#">CryptoCurrency</a>
                </td>
                <td>
                  <a href="www.buybitcoin.com">www.buybitcoin.com</a>
                </td>

                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/cloud-computing.png" />
                  </a>
                </td>
                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/calendar.png" />
                  </a>
                </td>
                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/done.png" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">3/7/2010</a>
                </td>
                <td>
                  <a href="#">Portfolio</a>
                </td>
                <td>
                  <a href="www.marksdesign.com">www.marksdesign.com</a>
                </td>

                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/cloud-computing.png" />
                  </a>
                </td>
                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/calendar.png" />
                  </a>
                </td>
                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/done.png" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row" style={{display: "block"}}>
          <div className="headtb2">
            <a href="#" className="heada">
              My backups
            </a>
          </div>
          <table>
            <thead>
              <tr>
                <th>
                  <a href="#">Last Backup</a>
                </th>

                <th>
                  <a href="#">Name</a>
                </th>
                <th>
                  <a href="#">URL</a>
                </th>
                <th>
                  <a href="#">ID</a>
                </th>
                <th className="imgtd">
                  <a href="#">Restore</a>
                </th>
                <th className="imgtd">
                  <a href="#">Mark Done</a>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="#">9/7/2010</a>
                </td>
                <td>
                  <a href="#">Shopify Store</a>
                </td>
                <td>
                  <a href="www.mytshirts.com">www.mytshirts.com</a>
                </td>
                <td>
                  <a href="#">126547</a>
                </td>

                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/restore (1).png" />
                  </a>
                </td>
                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/done.png" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">6/7/2010</a>
                </td>
                <td>
                  <a href="#">CryptoCurrency</a>
                </td>
                <td>
                  <a href="www.buybitcoin.com">www.buybitcoin.com</a>
                </td>
                <td>
                  <a href="#">937257</a>
                </td>

                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/restore (1).png" />
                  </a>
                </td>
                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/done.png" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">3/7/2010</a>
                </td>
                <td>
                  <a href="#">Portfolio</a>
                </td>
                <td>
                  <a href="www.marksdesign.com">www.marksdesign.com</a>
                </td>
                <td>
                  <a href="#">736141</a>
                </td>

                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/restore (1).png" />
                  </a>
                </td>
                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/done.png" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row" style={{display: "block"}}>
          <div className="headtb2">
            <a href="#" className="heada">
              User Activities
            </a>
          </div>
          <table>
            <thead>
              <tr>
                <th>
                  <a href="#">Last Backup</a>
                </th>

                <th>
                  <a href="#">Name</a>
                </th>
                <th>
                  <a href="#">URL</a>
                </th>
                <th className="imgtd">
                  <a href="#">Type of activities </a>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="#">9/7/2010</a>
                </td>
                <td>
                  <a href="#">Shopify Store</a>
                </td>
                <td>
                  <a href="www.mytshirts.com">www.mytshirts.com</a>
                </td>

                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/restore (1).png" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">6/7/2010</a>
                </td>
                <td>
                  <a href="#">CryptoCurrency</a>
                </td>
                <td>
                  <a href="www.buybitcoin.com">www.buybitcoin.com</a>
                </td>
                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/cloud-computing.png" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">3/7/2010</a>
                </td>
                <td>
                  <a href="#">Portfolio</a>
                </td>
                <td>
                  <a href="www.marksdesign.com">www.marksdesign.com</a>
                </td>
                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/restore (1).png" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row" style={{display: "block"}}>
          <div className="headtb2">
            <a href="#" className="heada">
              My Subscriptions
            </a>
          </div>
          <table>
            <thead>
              <tr>
                <th>
                  <a href="#">Name</a>
                </th>
                <th>
                  <a href="#">Subscription</a>
                </th>
                <th className="imgtd">
                  <a href="#">Restore</a>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="#">Anne Cyril</a>
                </td>
                <td>
                  <a href="#">Monthly</a>
                </td>
                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/remove 1.png" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">Mark Jones</a>
                </td>
                <td>
                  <a href="#">Annually</a>
                </td>
                <td className="imgtd">
                  <a href="#">
                    <img className="tbimg" src="img/remove 1.png" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">Juan Rodriguez</a>
                </td>
                <td>
                  <a href="#">Semi Annually</a>
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
    </div>
  );
}
