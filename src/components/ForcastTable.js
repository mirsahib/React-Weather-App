import React, { useEffect } from "react";

function ForcastTable(props) {
  useEffect(() => {
    console.log(props.forcastTable);
  });

  return props.forcastTable.map((element) => {
    let weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"][
      new Date(element.dt_txt).getDay()
    ];
    let icon =
      "http://openweathermap.org/img/w/" + element.weather[0].icon + ".png";
    return (
      <div className="forecast" key={element.dt}>
        <div className="forecast-header">
          <div className="day">{weekday}</div>
        </div>
        <div className="forecast-content">
          <div className="forecast-icon">
            <img src={icon} alt="" width="48" />
          </div>
          <div className="degree">
            {element.main.temp_max.toFixed(1)}
            <sup>o</sup>C
          </div>
          <small>
            {element.main.temp_min.toFixed(1)}
            <sup>o</sup>
          </small>
        </div>
      </div>
    );
  });
}

export default ForcastTable;
