import React from "react";
import logo from "../images/logo.png";

function header() {
  return (
    <div className="site-header">
      <div className="container">
        <a href="index.html" className="branding">
          <img src={logo} alt="" className="logo" />
          <div className="logo-type">
            <h1 className="site-title">React Weather app</h1>
            <small className="site-description">Weather forcasting app</small>
          </div>
        </a>
      </div>
    </div>
  );
}

export default header;
