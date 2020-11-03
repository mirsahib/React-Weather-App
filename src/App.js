import React, { useState } from "react";
import Header from "./components/header";
import SearchBar from "./components/SearchBar";
import Home from "./components/Home";
import Footer from "./components/footer";
import Axios from "axios";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  //function to track change in the search bar
  const handleChange = (e) => {
    setCityName(e.target.value);
  };
  //function to perfom api request
  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName("");
    getWeatherData();
  };

  const getWeatherData = async () => {
    console.log("getWeather is called");
    const api = {
      base: "https://api.openweathermap.org/data/2.5/",
      key: process.env.REACT_APP_API_KEY,
    };
    // const data = await Axios.get(
    //   `${api.base}forecast/?q=${cityName}&units=metric&appid=${api.key}`
    // );
    const data = JSON.parse(localStorage.getItem("weather-data"));
    let list = data.data.list;
    let timestamp = [];
    let newList = [];
    list.forEach((e) => {
      const time_txt = e.dt_txt.split(" ")[0];
      if (!timestamp.includes(time_txt)) {
        timestamp.push(time_txt);
        newList.push(e);
      }
    });
    data.data.list = newList;
    setWeatherData(data);
  };

  return (
    <div className="">
      <Header />
      <SearchBar
        value={cityName}
        onChangeValue={handleChange}
        handleSubmit={handleSubmit}
      />
      {weatherData ? <Home weatherData={weatherData} /> : ""}
      <Footer />
    </div>
  );
}

export default App;
