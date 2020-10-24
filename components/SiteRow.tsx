export default function SiteRow({ siteName, siteLink, serverID }) {
  return (
    <tr>
      <td>
        <a>{siteName}</a>
      </td>
      <td>
        <a href={siteLink}>{siteLink}</a>
      </td>
      <td className="imgtd">
        <a id={serverID}>
          <img
            style={{ cursor: "pointer", position: "absolute", zIndex: 1 }}
            className="tbimg"
            src="/img/cloud-computing.png"
          />
        </a>
      </td>
      <td className="imgtd">
        <a id={serverID}>
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
