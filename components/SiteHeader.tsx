export default function SiteHeader() {
  return (
    <tr>
      <th>
        <a>Name</a>
      </th>
      <th>
        <a>URL</a>
      </th>
      <th className="imgtd">
        <a>Backup</a>
      </th>
      <th className="imgtd">
        <a>Schedule</a>
      </th>
      <th className="imgtd">
        <a>Remove</a>
      </th>
    </tr>
  );
}
