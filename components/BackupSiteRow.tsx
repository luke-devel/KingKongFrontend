import Axios from "axios";

export default function BackupSiteRow({ count, backupName, backupAddress, backupID, backupDate }) {
  //   const handleBackup = async (serverID, ftpListCount) => {
  //     // e.preventdefault()
  //     const addBackupRes = await Axios(`/api/addbackup`, {
  //       method: "POST",
  //       data: {
  //         serverRowID: serverID,
  //         ftpListCount: ftpListCount,
  //       },
  //     });
  //     console.log('RES: ', addBackupRes);
  //   };

  return (
    <tr>
      <td>
        <a href="#">{backupName}</a>
      </td>
      <td>
        <a >{backupAddress}</a>
      </td>
      <td>
        <a href="#">{backupID}</a>
      </td>
      <td>
        <a href="#">{backupDate}</a>
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
  );
}
