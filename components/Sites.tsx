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
      const { data } = await Axios(`/api/query`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const parsedData = JSON.parse(data.data);
      setDisplayData(
        parsedData.map(({ serverdescription, serveraddress }, index) => {
          return (
            <SiteRow
              siteName={serverdescription}
              siteLink={serveraddress}
              serverID={data.rowId}
              key={index}
            />
          );
        })
      );
    } catch (error) {
      console.log("the err", error);
    }
  };

  return <>{!displayData ? `Loading...` : displayData}</>;
}
