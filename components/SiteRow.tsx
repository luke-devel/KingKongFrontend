import Axios from "axios";
import Router from "next/router";

export default function SiteRow({ count, siteName, siteLink, serverID }) {
  const handleBackup = async (serverID, ftpListCount) => {
    // e.preventdefault()
    const addBackupRes = await Axios(`/api/addbackup`, {
      method: "POST",
      data: {
        serverRowID: serverID,
        ftpListCount: ftpListCount,
      },
    });
    if (addBackupRes) {
      Router.reload();
    } else {
      alert("Error. Please try again or contact support.");
    }
  };

  return (
    <tr>
      <td>
        <a>{siteName}</a>
      </td>
      <td>
        <a href={siteLink}>{siteLink}</a>
      </td>
      <td className="imgtd">
        <a
          id={serverID}
          style={{ margin: 0 }}
          onClick={() => handleBackup(serverID, count)}
        >
          <img
            style={{ cursor: "pointer", position: "absolute", zIndex: 1 }}
            className="tbimg"
            src="/img/cloud-computing.png"
          />
        </a>
      </td>
      <td className="imgtd">
        <a id={serverID} style={{ margin: 0 }}>
          <img
            onClick={() => console.log(serverID)}
            style={{ cursor: "pointer", position: "absolute", zIndex: 1 }}
            className="tbimg"
            src="/img/remove 1.png"
          />
        </a>
      </td>
    </tr>
  );
}
