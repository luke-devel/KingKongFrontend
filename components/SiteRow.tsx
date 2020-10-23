export default function SiteRow({ siteName, siteLink, serverID }) {
  return (
    <tr >
      <td>
        <a id={serverID}>{siteName}</a>
      </td>
      <td>
        <a href={siteLink}>{siteLink}</a>
      </td>
      <td className="imgtd">
        <a href="#">
          <img className="tbimg" src="/img/cloud-computing.png" />
        </a>
      </td>
      <td className="imgtd">
        <a href="#">
          <img className="tbimg" src="/img/remove 1.png" />
        </a>
      </td>
    </tr>
  );
}
