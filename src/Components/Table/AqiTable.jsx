import React from "react";
import moment from "moment";
import "./AqiTable.scss";
import { getColorCode } from "../../Helper-components/Utility/Utils";
import { useStateValue } from "../../Context-management/StateProvider";

export default function AqiTable({ getSelectedCity }) {
  const [{ aqiData }] = useStateValue();

  let rows_list = Object.entries(aqiData).map((entry) => {
    const [city, aqiData] = entry;
    const latestEntry = aqiData[aqiData.length - 1];

    return (
      <tr key={city}>
        <td className="city" value={city} onClick={(e) => getSelectedCity(e)}>
          {city}
        </td>
        <td
          style={{ color: getColorCode(latestEntry?.aqi) }}
        >
          {latestEntry?.aqi?.toFixed(2)}
        </td>
        <td>{moment(latestEntry?.timeStamp, "x").fromNow()}</td>
      </tr>
    );
  });

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>AQI</th>
            <th>Last Updated</th>
          </tr>
        </thead>

        <tbody>{aqiData && rows_list}</tbody>
      </table>
      <div className="note">*Note : <span> Click on the city to get the live status</span></div>
    </div>
  );
}
