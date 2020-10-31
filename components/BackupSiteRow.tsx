import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
export default function BackupSiteRow({
  count,
  backupName,
  backupAddress,
  backupStatus,
  backupID,
  backupDate,
}) {
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
        <a>{backupName}</a>
      </td>
      <td>
        <a>{backupAddress}</a>
      </td>
      <td>
        <a>{backupID}</a>
      </td>
      <th style={{ paddingLeft: "2.1vw" }}>
        <a>
          {backupStatus === "pending" && (
            <FiberManualRecordIcon style={{ color: "yellow" }} />
          )}
          {backupStatus === "active" && (
            <FiberManualRecordIcon style={{ color: "green" }} />
          )}
        </a>
      </th>
      <td>
        <a>{backupDate}</a>
      </td>
      <td className="imgtd">
        <a onClick={()=> console.log('restore')}>
          <img
            className="tbimg"
            src="img/restore (1).png"
            style={{ cursor: "pointer", position: "absolute", zIndex: 1 }}
          />
        </a>
      </td>
      <td className="imgtd">
      <a onClick={()=> console.log('removeBackup, ', backupID)}>
          <img
            className="tbimg"
            src="img/remove 1.png"
            style={{ cursor: "pointer", position: "absolute", zIndex: 1 }}
          />
        </a>
      </td>
    </tr>
  );
}
