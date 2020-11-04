import React, { useState } from "react";
import Header from "./components/Header";
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
    getWeatherData();
    setCityName("");
  };

  const getWeatherData = async () => {
    console.log("getWeather is called");
    const api = {
      base: "https://api.openweathermap.org/data/2.5/",
      key: "d2aaa61c9a54a1e46b15f39eca1510c0",
    };
    await Axios.get(
      `${api.base}forecast/?q=${cityName
        .split(" ")
        .join("+")}&units=metric&appid=${api.key}`
    )
      .then((res) => {
        let list = res.data.list;
        let timestamp = [];
        let newList = [];
        list.forEach((e) => {
          const time_txt = e.dt_txt.split(" ")[0];
          if (!timestamp.includes(time_txt)) {
            timestamp.push(time_txt);
            newList.push(e);
          }
        });
        res.data.list = newList;
        setWeatherData(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
