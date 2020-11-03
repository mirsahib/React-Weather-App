import React, { useEffect, useState } from "react";
import ForcastTable from "./ForcastTable";

function Home(props) {
  const [state, setState] = useState({
    city: "",
    weekday: "",
    date: "",
    month: "",
    temp: "",
    wind: "",
    rain: "",
    wind_direction: "",
  });
  const extractData = () => {
    let city = props.weatherData.data.city.name;
    let timeStamp = new Date(props.weatherData.data.list[0].dt_txt);
    let date = timeStamp.getDate();
    let weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][timeStamp.getDay()];
    let month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ][timeStamp.getMonth()];
    let temp = props.weatherData.data.list[0].main.temp;
    let wind = (
      props.weatherData.data.list[0].wind.speed *
      (3600 / 1000)
    ).toFixed(2);
    let rain =
      props.weatherData.data.list[0].rain !== undefined
        ? props.weatherData.data.list[0].rain["3h"] * 100
        : "";
    let compassSector = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
      "N",
    ];
    let wind_direction =
      compassSector[
        (props.weatherData.data.list[0].wind.deg / 22.5).toFixed(0)
      ];
    console.log(
      `city ${city},weekday ${weekday},date ${date},month ${month},rain ${rain},temp ${temp},wind ${wind},wind_dir ${wind_direction}`
    );
    setState({ city, weekday, date, month, rain, temp, wind, wind_direction });
    console.log(state);
  };
  useEffect(() => {
    extractData();
  }, []);

  return (
    <div className="forecast-table">
      <div className="container">
        <div className="forecast-container">
          <div className="today forecast">
            <div className="forecast-header">
              <div className="day">Monday</div>
              <div className="date">6 Oct</div>
            </div>
            <div className="forecast-content">
              <div className="location">New York</div>
              <div className="degree">
                <div className="num">
                  23<sup>o</sup>C
                </div>
                <div className="forecast-icon">
                  <img src="images/icons/icon-1.svg" alt="" width="90" />
                </div>
              </div>
              <span>
                <img src="images/icon-umberella.png" alt="" />
                20%
              </span>
              <span>
                <img src="images/icon-wind.png" alt="" />
                18km/h
              </span>
              <span>
                <img src="images/icon-compass.png" alt="" />
                East
              </span>
            </div>
          </div>
          <ForcastTable />
        </div>
      </div>
    </div>
  );
}

export default Home;
