import React from "react";
import banner from "../images/banner.jpg";

function SearchBar(props) {
  return (
    <div className="hero" style={{ background: `url(${banner})` }}>
      <div className="container">
        <form
          action="#"
          className="find-location"
          onSubmit={props.handleSubmit}
        >
          <input
            value={props.value}
            onChange={(e) => {
              props.onChangeValue(e);
            }}
            type="text"
            placeholder="Find your location..."
          />
          <input type="submit" value="Find" />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
