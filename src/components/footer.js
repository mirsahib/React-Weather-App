import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="colophon">
          Copyright {new Date().getFullYear()} Company MirCorp. All rights
          reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
