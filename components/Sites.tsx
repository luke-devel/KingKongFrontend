import React, { useState, useEffect } from "react";
import SiteRow from "./SiteRow";
import Axios from "axios";

export default function Sites() {
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fun();
  }, []);

  const fun = async () => {
    try {
      const { data } = await Axios(`/api/querysites`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const parsedData = JSON.parse(data.data);
      console.log(parsedData);
      let count = 0;
      setDisplayData(
        parsedData.map(({ serverdescription, serveraddress }, index) => {
          var tempCount = count;
          count++;
          return (
            <SiteRow
              count={tempCount}
              siteName={serverdescription}
              siteLink={serveraddress}
              serverID={index + 1}
              key={index}
            />
          );
        })
      );
    } catch (error) {
      console.log("Your site list is empty");
    }
  };

  return <>{!displayData ? `Loading...` : displayData}</>;
}
