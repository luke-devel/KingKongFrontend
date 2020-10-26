import React, { useState, useEffect } from "react";
import BackupSiteRow from "./BackupSiteRow";
import Axios from "axios";
import moment from 'moment'

export default function BackupSites() {
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fun();
  }, []);

  const fun = async () => {
    try {
      const { data } = await Axios(`/api/querybackups`, {
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
            <BackupSiteRow
              count={tempCount}
              backupName={serverdescription}
              backupAddress={serveraddress}
              backupID={count}
              backupDate={moment().format('L')}
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
