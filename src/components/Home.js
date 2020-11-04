import React, { useEffect, useState } from "react";
import ForcastTable from "./ForcastTable";
import umberella from "../images/icon-umberella.png";
import windBlow from "../images/icon-wind.png";
import windDirection from "../images/icon-compass.png";

function Home(props) {
  const [state, setState] = useState({
    city: "",
    date: "",
    weekday: "",
    month: "",
    temp: "",
    wind: "",
    rain: "",
    wind_direction: "",
  });
  useEffect(() => {
    //extractData();
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
    let temp = props.weatherData.data.list[0].main.temp.toFixed(1);
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
    let newState = {
      city,
      date,
      weekday,
      month,
      temp,
      wind,
      rain,
      wind_direction,
    };
    if (state.city !== newState.city) {
      setState(newState);
    }
    console.log("component updated");
  }, [props.weatherData.data.city.name, props.weatherData.data.list, state]);

  return (
    <div className="forecast-table">
      <div className="container">
        <div className="forecast-container">
          <div className="today forecast">
            <div className="forecast-header">
              <div className="day">{state.weekday}</div>
              <div className="date">{state.date + " " + state.month}</div>
            </div>
            <div className="forecast-content">
              <div className="location">{state.city}</div>
              <div className="degree">
                <div className="num">
                  {state.temp}
                  <sup>o</sup>C
                </div>
                <div className="forecast-icon">
                  <img src="images/icons/icon-1.svg" alt="" width="90" />
                </div>
              </div>
              <span>
                <img src={umberella} alt="" />
                {state.rain !== "" ? state.rain + "%" : "0%"}
              </span>
              <span>
                <img src={windBlow} alt="" />
                {state.wind + "km/h"}
              </span>
              <span>
                <img src={windDirection} alt="" />
                {state.wind_direction}
              </span>
            </div>
          </div>
          <ForcastTable
            forcastTable={props.weatherData.data.list.slice(1, 6)}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
