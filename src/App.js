import React, { useState } from "react";
import Header from "./components/header";
import SearchBar from "./components/SearchBar";
import Home from "./components/Home";
import Footer from "./components/footer";

function App() {
  const [cityName, setCityName] = useState("");

  //function to track change in the search bar
  const handleChange = (e) => {
    setCityName(e.target.value);
  };
  //function to perfom api request
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cityName);
    setCityName("");
  };

  return (
    <div className="">
      <Header />
      <SearchBar
        value={cityName}
        onChangeValue={handleChange}
        handleSubmit={handleSubmit}
      />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
